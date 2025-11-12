import React from "react";
import Image from "next/image";
import Link from "next/link";
// images
import s_1 from "@/assets/img/inner-service/icons/service-icon-1.png";
import s_2 from "@/assets/img/inner-service/icons/service-icon-2.png";
import s_3 from "@/assets/img/inner-service/icons/service-icon-3.png";

const service_data = [
  {
    id: 1,
    title: "Website Development & Optimization",
    desc: "I develop websites that are not only visually stunning, but also optimized for conversions, loading speed, and seamless user experience.",
    icon: s_1,
  },
  {
    id: 2,
    title: "SEO & Content Strategy",
    desc: "I implement comprehensive SEO strategy - from technical SEO, on-page optimization, to content strategy that makes your website rank on Google's first page.",
    icon: s_2,
  },
  {
    id: 3,
    title: "Ads Management & Social Media Marketing",
    desc: "I manage campaigns across various platforms (Google Ads, Meta Ads, TikTok Ads) with a focus on maximum ROI and engaging social media strategy.",
    icon: s_3,
  },
  {
    id: 4,
    title: "Content Production",
    desc: "I produce high-quality visual and written content that captures attention, builds brand identity, and drives engagement — from product photography to storytelling that sells.",
    icon: s_2,
  },
];

// service items
export function ServiceItems() {
  return (
    <div className="row justify-content-center">
      {service_data.map((item) => (
        <div key={item.id} className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
          <div className="tp-service-5-item tp_fade_bottom space-1">
            <div className="tp-service-4-icon">
              <Image src={item.icon} alt="icon" />
            </div>
            <div className="tp-service-4-content">
              <h4 className="tp-service-4-title-sm tp-text-black">
                <Link href="/service">{item.title}</Link>
              </h4>
              <p>{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// service five area
export default function ServiceFive() {
  return (
    <div className="tp-service-5-area pt-120 pb-70">
      <div className="container container-1775">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-service-5-title-box mb-90">
              <h4 className="tp-service-5-title p-relative tp_fade_right">
                <span className="tp-service-5-subtitle tp_fade_left">
                  SERVICES
                </span>
                <span className="text-space"></span>
                Nullam posuere rhoncus elementum. Nullam lacinia <br />
                urna blandit iaculis sagittis
              </h4>
            </div>
          </div>
        </div>
        <div className="tp-service-5-wrap">
          <ServiceItems/>
        </div>
      </div>
    </div>
  );
}
