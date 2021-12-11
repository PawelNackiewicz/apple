import { useContext } from "react";
import { ThemeContext } from "../pages/_app";

export function Footer() {
  const [theme] = useContext(ThemeContext);

  return (
    <footer className={`w-full flex justify-center bg-${theme}-500 p-2`}>
      <p>Copyright 2021</p>
    </footer>
  );
}
