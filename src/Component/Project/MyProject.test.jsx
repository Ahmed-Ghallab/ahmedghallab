import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import MyProject from "./MyProject";

describe("MyProject Component", () => {
  it("renders section title and project cards", () => {
    render(<MyProject />);
    expect(screen.getByText("Featured Projects")).toBeInTheDocument();
    expect(screen.getByText(/Enaya – Full E-Commerce Platform/i)).toBeInTheDocument();
  });

  it("filters projects when tier tabs are clicked", () => {
    render(<MyProject />);
    const tier1Filter = screen.getByText(/Tier 1: Flagship & SaaS/i);
    fireEvent.click(tier1Filter);
    expect(screen.getByText(/Enaya – Full E-Commerce Platform/i)).toBeInTheDocument();
  });
});
