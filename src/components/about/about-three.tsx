import React from "react";
import Link from "next/link";
// internal imports
import { ArrowBg, RightArrowTwo,FirstBracket, FirstBracketTwo } from "../svg";

export default function AboutThree() {

  return (
    <div className="tp-about-3-area pt-120 pb-110" style={{paddingTop: '80px'}}>
      <div className="container">
        <div className="row">
          <div className="col-xl-11">
            <div className="tp-about-3-title-box" style={{ paddingBottom: '20px', overflow: 'visible' }}>
              <span className="tp-section-subtitle-2 tp_fade_bottom">
                <span>
                  <FirstBracket />
                </span>
                <span className="tp-subtitle-text tp_text_invert">
                  Why Choose Me?
                </span>
                <span>
                  <FirstBracketTwo />
                </span>
              </span>
              <h4 className="tp-section-title-90 tp_text_invert tp_fade_bottom" style={{ lineHeight: '1.2', overflow: 'visible' }}>
                I Help Your Brand Grow Through{" "}
                <span>
                  {" "}
                  <br />Data-Driven Digital Marketing Strategy
                </span>
              </h4>
            </div>
          </div>
        </div>
        <div className="row align-items-center" style={{ marginTop: '40px' }}>
          <div className="col-xl-6 col-lg-6 col-md-4">
            <div className="tp-about-3-portrait-placeholder text-lg-end">
              <div style={{
                width: '100%',
                maxWidth: '400px',
                height: '600px',
                backgroundColor: '#808080',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}>
                <div style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: '20px',
                  fontWeight: '600'
                }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎥</div>
                  <div>Portrait Video/Photo</div>
                  <div style={{ fontSize: '16px', marginTop: '8px', opacity: 0.8 }}>
                    Recommended: 1080x1920px
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-8">
            <div className="tp-about-3-content">
              <p className="mb-30 tp_fade_bottom">
                Hi! I&apos;m Yehezkiel Kristama, a Digital Marketing Specialist focused on Full Funnel Marketing. 
                I believe every business has a unique story that needs to be told in the right way to the right audience.
              </p>
              <p className="mb-45 tp_fade_bottom">
                With experience handling various projects from website development, SEO optimization, 
                to ads management - I don&apos;t just create campaigns, but build sustainable and profitable 
                marketing systems for your business.
              </p>
              <Link className="tp-btn-black-2 tp_fade_bottom" href="/about-us">
                Get to Know Me Better
                <span className="p-relative">
                  <RightArrowTwo />
                  <ArrowBg />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
