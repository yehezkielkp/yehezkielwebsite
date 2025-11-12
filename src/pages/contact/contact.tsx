"use client";
import React from "react";
import Wrapper from "@/layouts/wrapper";
import HeaderAbout from "@/layouts/headers/header-about";
import ContactTwo from "@/components/contact/contact-two";
import FooterFour from "@/layouts/footers/footer-four";

export default function ContactMain() {
  return (
    <Wrapper>
      {/* header area start */}
      <HeaderAbout />
      {/* header area end */}

      <main>
        {/* contact area start */}
        <ContactTwo />
        {/* contact area end */}
      </main>

      {/* footer area */}
      <FooterFour />
      {/* footer area */}
    </Wrapper>
  );
}
