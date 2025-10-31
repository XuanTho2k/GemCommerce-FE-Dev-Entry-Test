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
  //   it("should select pixel when clicked", () => {
  //     render(<UnitTab />);
  //     fireEvent.click(screen.getByText("px"));
  //     expect(screen.getByText("px")).toHaveBeenCalledTimes(1);
  //   });
  //   it("should select % when clicked", () => {
  //     render(<UnitTab />);
  //     fireEvent.click(screen.getByText("%"));
  //     expect(screen.getByText("%")).toHaveBeenCalledTimes(1);
  //   });
});
