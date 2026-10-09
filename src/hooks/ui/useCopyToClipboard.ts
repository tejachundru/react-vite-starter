import { useCallback, useEffect, useRef, useState } from "react";

type CopyStatus = "idle" | "copied" | "error";

interface UseCopyToClipboardReturn {
  value: string;
  status: CopyStatus;
  copy: (text: string) => Promise<boolean>;
  reset: () => void;
}

export function useCopyToClipboard(timeout = 2000): UseCopyToClipboardReturn {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<CopyStatus>("idle");

  const timeoutRef = useRef<number | null>(null);

  /** Clears the existing timeout */
  const clearExistingTimeout = useCallback((): void => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  /** Reset hook state */
  const reset = useCallback((): void => {
    setStatus("idle");
    setValue("");
    clearExistingTimeout();
  }, [clearExistingTimeout]);

  /** Start auto-reset timer */
  const startResetTimer = useCallback((): void => {
    clearExistingTimeout();

    timeoutRef.current = window.setTimeout(() => {
      setStatus("idle");
      timeoutRef.current = null;
    }, timeout);
  }, [clearExistingTimeout, timeout]);

  /** Copy text to clipboard */
  const copy = useCallback(
    async (text: string): Promise<boolean> => {
      try {
        if (
          typeof navigator !== "undefined" &&
          navigator.clipboard?.writeText
        ) {
          await navigator.clipboard.writeText(text);
        } else {
          const textArea = document.createElement("textarea");

          textArea.value = text;
          textArea.style.position = "fixed";
          textArea.style.left = "-999999px";
          textArea.style.top = "-999999px";

          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();

          const success = document.execCommand("copy");

          document.body.removeChild(textArea);

          if (!success) throw new Error("execCommand failed");
        }

        setValue(text);
        setStatus("copied");

        startResetTimer();

        return true;
      } catch (error) {
        console.error("Copy failed:", error);
        setStatus("error");
        return false;
      }
    },
    [startResetTimer]
  );

  /** Cleanup timer on unmount */
  useEffect(() => {
    return clearExistingTimeout;
  }, [clearExistingTimeout]);

  return { value, status, copy, reset };
}