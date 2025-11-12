"use client";
import React from "react";
import Wrapper from "@/layouts/wrapper";
import HeaderAbout from "@/layouts/headers/header-about";
import ServiceDetailsArea from "@/components/service/service-details-area";
import ServiceFive from "@/components/service/service-five";
import SeoServiceContent from "@/components/seo/seo-service-content";
import FooterFour from "@/layouts/footers/footer-four";

export default function ServiceDetailsMain() {
  return (
    <Wrapper>
      {/* header area start */}
      <HeaderAbout />
      {/* header area end */}

      <main>
        {/* service details area start */}
        <ServiceDetailsArea />
        {/* service details area end */}

        {/* service area start */}
        <ServiceFive />
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
