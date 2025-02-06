import { PlusCircle } from "lucide-react";
import { Button } from "./button";

const meta = {
  title: "Components/Button",
  component: Button,
};

export default meta;

const variants = [
  "default",
  "secondary",
  "destructive",
  "outline",
  "link",
] as const;

export function Default(): JSX.Element {
  return (
    <div className="flex flex-row gap-8">
      {variants.map((variant) => (
        <Button key={variant} variant={variant}>
          {variant}
        </Button>
      ))}
    </div>
  );
}

const SIZES = ["sm", "default", "lg", "icon"] as const;

export function Sizes(): JSX.Element {
  return (
    <div className="flex flex-row gap-8">
      {SIZES.map((size) => (
        <Button key={size} size={size}>
          {size !== "icon" && size}
          {size === "icon" && <PlusCircle />}
        </Button>
      ))}
    </div>
  );
}

export function WithIcon(): JSX.Element {
  return (
    <Button>
      <PlusCircle className="mr-2 size-4" />
      Add
    </Button>
  );
}
