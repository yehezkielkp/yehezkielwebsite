"use client";
import React from "react";
import Wrapper from "@/layouts/wrapper";
import HeaderAbout from "@/layouts/headers/header-about";
import SeoPortfolioContent from "@/components/seo/seo-portfolio-content";
import FooterFour from "@/layouts/footers/footer-four";

export default function PortfolioDetails1Main() {
  return (
    <Wrapper>
      {/* header area start */}
      <HeaderAbout />
      {/* header area end */}

      <main>
        {/* Portfolio details content here */}
        <div className="tp-portfolio-details-area pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>Portfolio Details</h2>
                <p>Portfolio details coming soon...</p>
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
