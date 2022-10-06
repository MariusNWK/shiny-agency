import Card from "./";
import { render } from "@testing-library/react";
import { ThemeProvider } from "../../utils/context";

describe("Card", () => {
  test("Should render title and image", async () => {
    render(
      <ThemeProvider>
        <Card
          title="Harry Potter"
          label="Magicien frontend"
          picture="../../assets/profile.png"
        />
      </ThemeProvider>
    );
  });
});
