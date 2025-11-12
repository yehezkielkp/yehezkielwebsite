import React from "react";
import Image from "next/image";

// images
import ser_img_1 from "@/assets/img/inner-service/service/service-1.jpg";
import ser_img_2 from "@/assets/img/inner-service/service/service-2.jpg";
import ser_img_3 from "@/assets/img/inner-service/service/service-3.jpg";
import ser_img_4 from "@/assets/img/inner-service/service/service-4.jpg";
import { RightArrow, ShapeTwo } from "../svg";
import Link from "next/link";

const service_data = [
  {
    id: 1,
    img: ser_img_1,
    subtitle: "Digital Marketing",
    title: "Website Development & Optimization",
    text: "A website isn't just about beautiful looks. I develop websites that are not only visually stunning, but also optimized for conversions, loading speed, and seamless user experience. Your website is your 24/7 salesperson.",
    lists: [
      "UI/UX Design",
      "Responsive Development",
      "Speed Optimization",
      "Conversion Rate Optimization",
    ],
  },
  {
    id: 2,
    img: ser_img_2,
    subtitle: "Digital Marketing",
    title: "SEO & Content Strategy",
    text: "Organic traffic is a valuable asset for long-term business. I implement comprehensive SEO strategy - from technical SEO, on-page optimization, to content strategy that makes your website rank on Google's first page for relevant keywords.",
    lists: [
      "Technical SEO",
      "On-Page SEO",
      "Content Marketing",
      "Keyword Research",
    ],
  },
  {
    id: 3,
    img: ser_img_3,
    subtitle: "Digital Marketing",
    title: "Ads Management & Social Media Marketing",
    text: "Profitable paid ads require strategy and continuous optimization. I manage campaigns across various platforms (Google Ads, Meta Ads, TikTok Ads) with a focus on maximum ROI. Plus, engaging organic social media strategy that converts.",
    lists: [
      "Google Ads",
      "Meta Ads",
      "Social Media Strategy",
      "Performance Marketing",
    ],
  },
  {
    id: 4,
    img: ser_img_4,
    subtitle: "Digital Marketing",
    title: "Content Production",
    text: "Creating content that connects is the heart of every digital strategy. I produce high-quality visual and written content that captures attention, builds brand identity, and drives engagement — from product photography and video ads to storytelling that sells.",
    lists: [
      "Photo & Video Production",
      "Copywriting",
      "Social Content Creation",
      "Brand Storytelling",
    ],
  },
];

export default function ServiceSix() {
  return (
    <div className="sv-service-area project-panel-area-2">
      <div className="container-fluid p-0">
        {service_data.map((item) => (
          <div key={item.id} className="sv-service-item project-panel-2">
            <div className="row g-0">
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-thumb">
                  <Image
                    src={item.img}
                    alt="service-img"
                    style={{ height: "auto" }}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-content-wrap d-flex align-items-center">
                  <div className="sv-service-content">
                    <div className="sv-service-title-box">
                      <span className="sv-service-subtitle">
                        <i>{item.id < 9 ? "0" + item.id : item.id}</i>
                        {item.subtitle}
                      </span>
                      <h4 className="sv-service-title">{item.title}</h4>
                    </div>
                    <div className="sv-service-space-wrap">
                      <div className="sv-service-text">
                        <p>{item.text}</p>
                      </div>
                      <div className="sv-service-list">
                        <ul>
                          {item.lists.map((list, i) => (
                            <li key={i}>{list}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="sv-service-btn">
                        <Link
                          className="tp-btn-zikzak zikzak-inner p-relative"
                          href="/service-details"
                        >
                          <span className="zikzak-content">
                            See <br /> Details
                            <RightArrow clr="currentColor" />
                          </span>
                          <ShapeTwo />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
