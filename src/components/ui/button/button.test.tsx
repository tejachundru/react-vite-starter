import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  it("renders", () => {
    render(<Button>Button</Button>);
    expect(true).toBe(true);
  });
});
