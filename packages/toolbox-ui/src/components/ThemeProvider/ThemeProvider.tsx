import { createContext, PropsWithChildren, useContext, useEffect } from "react";

type ThemeContextType = {
  theme: "light" | "dark";
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
});

type ThemeProviderProps = PropsWithChildren<
  ThemeContextType & {
    target?: HTMLElement;
  }
>;

export function ThemeProvider({ children, target, theme }: ThemeProviderProps) {
  // update html data-theme attribute
  useEffect(() => {
    (target ?? document.body).dataset.theme = theme;
    return () => {
      delete (target ?? document.body).dataset.theme;
    };
  }, [target, theme]);

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
