"use client";
import React from "react";
import Wrapper from "@/layouts/wrapper";
import HeaderAbout from "@/layouts/headers/header-about";
import SeoPortfolioContent from "@/components/seo/seo-portfolio-content";
import FooterFour from "@/layouts/footers/footer-four";

export default function PortfolioStandardMain() {
  return (
    <Wrapper>
      {/* header area start */}
      <HeaderAbout />
      {/* header area end */}

      <main>
        {/* Portfolio content here - Add your portfolio standard component */}
        <div className="tp-portfolio-standard-area pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>Portfolio Standard</h2>
                <p>Portfolio standard layout coming soon...</p>
              </div>
            </div>
          </div>
        </div>
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
