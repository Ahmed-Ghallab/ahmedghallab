import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import MyHeader from "./MyHeader";

describe("MyHeader Component", () => {
  it("renders hero greeting and developer name", () => {
    render(<MyHeader />);
    expect(screen.getByText("Ahmed Ghallab.")).toBeInTheDocument();
    expect(screen.getByText(/Hi, my name is/i)).toBeInTheDocument();
  });

  it("renders CTA buttons leading to projects, experience and resume", () => {
    render(<MyHeader />);
    expect(screen.getByText("View Flagship Projects")).toBeInTheDocument();
    expect(screen.getByText("Experience & Journey")).toBeInTheDocument();
    expect(screen.getByText("CV & Resume")).toBeInTheDocument();
  });
});
