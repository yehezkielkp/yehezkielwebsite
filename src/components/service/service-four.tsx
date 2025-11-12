import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FirstBracket, FirstBracketTwo, RightArrow, SvgBg } from "../svg";
import icon from '@/assets/img/home-03/service/sv-icon-1.png';

const service_data = [
  {
    id: 1,
    title: "Website Development & Optimization",
    desc: "A website isn't just about beautiful looks. I develop websites that are not only visually stunning, but also optimized for conversions, loading speed, and seamless user experience. <br> Your website is your 24/7 salesperson.",
    category: ["UI/UX Design", "Responsive Development", "Speed Optimization", "Conversion Rate Optimization"],
  },
  {
    id: 2,
    title: "SEO & Content Strategy",
    desc: "Organic traffic is a valuable asset for long-term business. I implement comprehensive SEO strategy - from technical SEO, on-page optimization, to content strategy that makes your website rank on <br> Google's first page for relevant keywords.",
    category: ["Technical SEO", "On-Page SEO", "Content Marketing", "Keyword Research"],
  },
  {
    id: 3,
    title: "Ads Management & Social Media Marketing",
    desc: "Profitable paid ads require strategy and continuous optimization. I manage campaigns across various platforms (Google Ads, Meta Ads, TikTok Ads) with a focus on maximum ROI. <br> Plus, engaging organic social media strategy that converts.",
    category: ["Google Ads", "Meta Ads", "Social Media Strategy", "Performance Marketing"],
  },
  {
    id: 4,
    title: "Content Production",
    desc: "Creating content that connects is the heart of every digital strategy. I produce high-quality visual and written content that captures attention, builds brand identity, and drives engagement — from product photography and video ads to storytelling that sells. <br> Your brand deserves content that converts, not just entertains.",
    category: ["Photo & Video Production", "Copywriting", "Social Content Creation", "Brand Storytelling"],
  },
];
export default function ServiceFour() {
  
  return (
    <div className="tp-service-3-area pt-70 pb-130" style={{paddingTop: '50px'}}>
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <div className="tp-service-3-title-box mb-60 p-relative">
              <div className="tp-service-3-icon">
                <Image src={icon} alt="icon" />
              </div>
              <span className="tp-section-subtitle-2 tp_fade_bottom">
                <span>
                  <FirstBracket />
                </span>
                <span className="tp-subtitle-text tp_text_invert">
                  Digital Marketing Services
                </span>
                <span>
                  <FirstBracketTwo />
                </span>
              </span>
              <h4 className="tp-section-title-90 tp_text_invert tp_fade_bottom">
                Digital Marketing Solutions <br /> I Offer
              </h4>
            </div>
          </div>
        </div>

        {service_data.map((item) => (
          <div key={item.id} className="tp-service-3-wrap tp_fade_bottom">
            <div className="row align-items-start">
              <div className="col-xl-3 col-lg-3">
                <div className="tp-service-3-title-box">
                  <h4 className="tp-service-3-title">
                    <Link href="/service">{item.title}</Link>
                  </h4>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7">
                <div className="tp-service-3-content">
                  <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                  <div className="tp-service-3-category">
                    {item.category.map((c, i) => (
                      <span key={i}>{c}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2">
                <div className="tp-service-3-btn-box text-start text-md-end">
                  <Link
                    className="tp-btn-zikzak-sm p-relative"
                    href="/service"
                  >
                    <span className="zikzak-content">
                      Free <br /> Consultation
                      <RightArrow clr="currentColor" />
                    </span>
                    <span>
                      <SvgBg />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
