import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AppInput from "../components/AppInput";

describe("AppInput", () => {
  it("should render", () => {
    render(<AppInput />);
    expect(screen.getByText("Value")).toBeDefined();
    expect(screen.getByAltText("minus")).toBeDefined();
    expect(screen.getByAltText("plus")).toBeDefined();
    expect(screen.findByRole("input")).toBeDefined();
  });
});
