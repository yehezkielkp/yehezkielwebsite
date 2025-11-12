import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// images
import b_1 from "@/assets/img/home-04/brand/1.png";
import b_2 from "@/assets/img/home-04/brand/2.png";
import b_3 from "@/assets/img/home-04/brand/3.png";
import b_4 from "@/assets/img/home-04/brand/4.png";
import b_5 from "@/assets/img/home-04/brand/5.png";
import b_6 from "@/assets/img/home-04/brand/6.png";
import b_7 from "@/assets/img/home-04/brand/7.png";
import b_8 from "@/assets/img/home-04/brand/8.png";

// brand images
const brand_images = [b_1, b_2, b_3, b_4, b_5, b_6, b_7, b_8];

export default function BrandFive() {
  return (
    <div
      className="ab-brand-area pt-120 pb-120 black-bg-2"
      style={{
        backgroundImage:
          "url(/assets/img/inner-about/brand/brand-bg-shape.png)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="ab-brand-title-box mb-100">
              <h4 className="ab-brand-title">Our clients</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="ab-brand-wrapper mb-80">
              <div className="swiper-container ab-brand-slide-active">
                <Marquee speed={100} loop={0} className="ab-brand-slide-wrap">
                  {brand_images.map((b, i) => (
                    <div
                      key={i}
                      className="ab-brand-item"
                      style={{ 
                        margin: '0 30px',
                        background: 'white',
                        padding: '10px 15px',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Image 
                        src={b} 
                        alt="brand"
                        width={225}
                        height={120}
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-7 col-lg-9">
            <div className="ab-brand-content tp_title_anim">
              <p>
                I've helped businesses across various industries achieve their digital marketing goals
                through data-driven strategies and proven methodologies. See my work and results.
              </p>
              <a href="/portfolio-standard" style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>
                <span>Portfolio</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
