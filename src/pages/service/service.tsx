"use client";
import React from "react";
import Wrapper from "@/layouts/wrapper";
import HeaderAbout from "@/layouts/headers/header-about";
import ServiceHero from "@/components/service/service-hero";
import ServiceSix from "@/components/service/service-six";
import SeoServiceContent from "@/components/seo/seo-service-content";
import FooterFour from "@/layouts/footers/footer-four";

export default function ServiceMain() {
  return (
    <Wrapper>
      {/* header area start */}
      <HeaderAbout />
      {/* header area end */}

      <main>
        {/* service hero start */}
        <ServiceHero />
        {/* service hero end */}

        {/* service area start */}
        <ServiceSix />
        {/* service area end */}
      </main>

      {/* seo content area */}
      <SeoServiceContent />
      {/* seo content area */}

      {/* footer area */}
      <FooterFour />
      {/* footer area */}
    </Wrapper>
  );
}
