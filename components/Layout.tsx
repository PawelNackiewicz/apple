import React, { ReactChildren, ReactChild } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

interface LayoutProps {
  children: ReactChild | ReactChildren;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-green-300">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
