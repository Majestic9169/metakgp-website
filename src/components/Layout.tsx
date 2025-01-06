import React from "react";
import { HeaderSection } from "../sections/Header";
import { FooterSection } from "../sections/Footer";

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <HeaderSection />
      <main>{children}</main>
      <FooterSection />
    </div>
  );
};