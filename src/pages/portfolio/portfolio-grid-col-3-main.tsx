"use client";
import React from "react";
import Wrapper from "@/layouts/wrapper";
import HeaderAbout from "@/layouts/headers/header-about";
import PortfolioGridCol3Area from "@/components/portfolio/portfolio-grid-col-3-area";
import SeoPortfolioContent from "@/components/seo/seo-portfolio-content";
import FooterFour from "@/layouts/footers/footer-four";

export default function PortfolioGridCol3Main() {
  return (
    <Wrapper>
      {/* header area start */}
      <HeaderAbout />
      {/* header area end */}

      <main>
        {/* portfolio grid 3 col area start */}
        <PortfolioGridCol3Area />
        {/* portfolio grid 3 col area end */}
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
