"use client";
import { ThemeProvider, Button } from "@material-tailwind/react";

import React from "react";
import BodyComponent from "./components/bodyComponent";
import NavbarComponent from "./components/navbarComponent";
import FooterComponent from "./components/footerComponent";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <NavbarComponent></NavbarComponent>
      <BodyComponent>{children}</BodyComponent>
      <FooterComponent></FooterComponent>
    </ThemeProvider>
  );
};

export default Provider;
