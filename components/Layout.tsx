import React, { ReactChild, ReactChildren, useContext } from "react";
import { ThemeContext } from "../pages/_app";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

interface LayoutProps {
  children: ReactChild | ReactChildren;
}

export function Layout({ children }: LayoutProps) {
  const [theme] = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-col justify-between min-h-screen bg-${theme}-300`}
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
