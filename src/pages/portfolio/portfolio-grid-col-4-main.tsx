"use client";
import React from "react";
import Wrapper from "@/layouts/wrapper";
import HeaderAbout from "@/layouts/headers/header-about";
import PortfolioGrid4ColArea from "@/components/portfolio/portfolio-grid-4-col-area";
import SeoPortfolioContent from "@/components/seo/seo-portfolio-content";
import FooterFour from "@/layouts/footers/footer-four";

export default function PortfolioGridCol4Main() {
  return (
    <Wrapper>
      {/* header area start */}
      <HeaderAbout />
      {/* header area end */}

      <main>
        {/* portfolio grid 4 col area start */}
        <PortfolioGrid4ColArea />
        {/* portfolio grid 4 col area end */}
      </main>

      {/* seo content area */}
      <SeoPortfolioContent />
      {/* seo content area */}

      {/* footer area */}
      <FooterFour />
      {/* footer area */}
    </Wrapper>
  );
}
