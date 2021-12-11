import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { createContext, useState } from "react";

export type ThemeData = "green" | "red" | "blue";

export const ThemeContext = createContext<ThemeData>("red");
ThemeContext.displayName = "ThemeContext";

function ThemeProvider(props: any) {
  const [theme, setTheme] = useState<ThemeData>("red");
  const value = [theme, setTheme];
  return <ThemeContext.Provider value={value} {...props} />;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
