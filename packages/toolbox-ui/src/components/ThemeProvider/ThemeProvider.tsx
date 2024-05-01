import { createContext, PropsWithChildren, useContext } from "react";

type ThemeContextType = {
  theme: "light" | "dark";
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
});

type ThemeProviderProps = PropsWithChildren<ThemeContextType>;

export function ThemeProvider({ children, ...value }: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
