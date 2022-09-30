import React, { createContext, useState } from "react";

interface ThemeContextType {
  theme: string;
  toggleTheme(): void;
}

const defaultTheme: ThemeContextType = {
  theme: "light",
  toggleTheme: () => {
    console.log("defaultTheme");
  },
};
export const ThemeContext = createContext(defaultTheme);

interface LayoutProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: LayoutProps) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export interface AnswerType {
  title: string;
  description: string;
}

interface SurveyContextType {
  answers: AnswerType[];
  saveAnswers(newAnswers: AnswerType[]): void;
}

const defaultSurvey: SurveyContextType = {
  answers: [],
  saveAnswers: () => {
    console.log("defaultAnswers");
  }
};
export const SurveyContext = createContext(defaultSurvey);

export const SurveyProvider = ({ children }: LayoutProps) => {
  const defaultAnswers: AnswerType[] = [];
  const [answers, setAnswers] = useState(defaultAnswers);
  function saveAnswers(newAnswers: AnswerType[]) {
    setAnswers({ ...answers, ...newAnswers });
  }

  return (
    <SurveyContext.Provider value={{ answers, saveAnswers }}>
      {children}
    </SurveyContext.Provider>
  );
};
