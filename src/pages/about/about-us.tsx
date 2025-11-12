"use client";
import React from "react";
import Wrapper from "@/layouts/wrapper";
import HeaderAbout from "@/layouts/headers/header-about";
import AboutUsHero from "@/components/about/about-us-hero";
import AboutUsArea from "@/components/about/about-us-area";
import AwardOne from "@/components/award/award-one";
import BrandFive from "@/components/brand/brand-five";
import AboutPortfolio from "@/components/portfolio/about-portfolio";
import ContactTwo from "@/components/contact/contact-two";
import SeoAboutContent from "@/components/seo/seo-about-content";
import FooterFour from "@/layouts/footers/footer-four";

export default function AboutUsMain() {
  return (
    <Wrapper>
      {/* header area start */}
      <HeaderAbout />
      {/* header area end */}

      <main>
        {/* hero area start */}
        <AboutUsHero />
        {/* hero area end */}

        {/* about area start */}
        <AboutUsArea />
        {/* about area end */}

        {/* award area start */}
        <AwardOne />
        {/* award area end */}

        {/* brand area start */}
        <BrandFive />
        {/* brand area end */}

        {/* portfolio area start */}
        <AboutPortfolio />
        {/* portfolio area end */}

        {/* contact area start */}
        <ContactTwo />
        {/* contact area end */}
      </main>

      {/* seo content area */}
      <SeoAboutContent />
      {/* seo content area */}

      {/* footer area */}
      <FooterFour />
      {/* footer area */}
    </Wrapper>
  );
}
