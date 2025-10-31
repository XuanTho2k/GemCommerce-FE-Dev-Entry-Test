import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import UnitTab from "../components/UnitTab";

describe("UnitTab", () => {
  it("should render", () => {
    render(<UnitTab />);
    expect(screen.getByText("Unit")).toBeDefined();
    expect(screen.getByText("%")).toBeDefined();
    expect(screen.getByText("px")).toBeDefined();
  });
});
