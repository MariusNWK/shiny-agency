import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from ".";
import { ThemeProvider } from "../../utils/context";

describe("The Home component", () => {
  it("should render title", () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </MemoryRouter>
    );
    screen.getByText(
      "Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents"
    );
    // screen.debug()
  });
});
