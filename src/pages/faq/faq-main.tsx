"use client";
import React from "react";
import Wrapper from "@/layouts/wrapper";
import HeaderAbout from "@/layouts/headers/header-about";
import FaqArea from "@/components/faq/faq-area";
import FooterFour from "@/layouts/footers/footer-four";

export default function FaqMain() {
  return (
    <Wrapper>
      {/* header area start */}
      <HeaderAbout />
      {/* header area end */}

      <main>
        {/* faq area start */}
        <FaqArea />
        {/* faq area end */}
      </main>

      {/* footer area */}
      <FooterFour />
      {/* footer area */}
    </Wrapper>
  );
}
