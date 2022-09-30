import { useContext } from "react";
import { ThemeContext } from "../context";
import { createGlobalStyle } from "styled-components";

function GlobalStyle() {
  const { theme } = useContext(ThemeContext);

  return <StyledGlobalStyle isDarkMode={theme === "dark"} />;
}

interface GlobaleStyleProps {
  isDarkMode: boolean;
}

const StyledGlobalStyle = createGlobalStyle`
  * {
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
  }
 
  body {
    background-color: ${(props: GlobaleStyleProps) =>
      props.isDarkMode ? "#2F2E41" : "white"}; 
  }
`;

export default GlobalStyle;
