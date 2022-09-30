import React, { createContext, useState } from "react";

interface ThemeContextType {
  theme: string;
  toggleTheme(): void;
}

const defaultTheme: ThemeContextType = {theme: 'light', toggleTheme: () => { console.log("defaultTheme") }};
export const ThemeContext = createContext(defaultTheme);

interface LayoutProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }:LayoutProps) {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
