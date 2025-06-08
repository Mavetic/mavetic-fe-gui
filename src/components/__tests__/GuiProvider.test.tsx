import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import GuiProvider from "../GuiProvider";

describe("GuiProvider", () => {
  it("renders component with test content", () => {
    render(
      <GuiProvider>
        <div>TEST</div>
      </GuiProvider>,
    );

    expect(screen.getByText("TEST")).toBeInTheDocument();
  });
});
