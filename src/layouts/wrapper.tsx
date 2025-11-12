"use client";
import React from "react";
import FloatingWhatsApp from "@/components/floating-whatsapp";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap.bundle.min");
}

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <React.Fragment>
      {children}
      <FloatingWhatsApp />
    </React.Fragment>
  );
};

export default Wrapper;
