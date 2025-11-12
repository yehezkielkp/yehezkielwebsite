import React from "react";
import Image from "next/image";
import { UpArrow } from "../svg";
import Link from "next/link";
// images
import p_img_1 from "@/assets/img/home-05/project/project-4.jpg";
import p_img_2 from "@/assets/img/home-05/project/project-5.jpg";
import p_img_3 from "@/assets/img/home-05/project/project-6.jpg";
import p_img_4 from "@/assets/img/home-05/project/project-7.jpg";
import p_img_5 from "@/assets/img/home-05/project/project-8.jpg";
import p_img_6 from "@/assets/img/home-05/project/project-9.jpg";

const project_data = [
  {
    id: 1,
    title: "Megajaya",
    category: "Industrial Equipment",
    img: p_img_1,
    year: "Digital Marketing Funnel",
  },
  {
    id: 2,
    title: "Bumilindo",
    category: "Mobile Electronics",
    img: p_img_2,
    year: "Digital Marketing Funnel",
  },
  {
    id: 3,
    title: "Roda Bangun Mandiri",
    category: "Building Materials",
    img: p_img_3,
    year: "Digital Marketing Funnel",
  },
  {
    id: 4,
    title: "Ezeelink",
    category: "Digital Payment",
    img: p_img_4,
    year: "Digital Marketing Funnel",
  },
  {
    id: 5,
    title: "Cipta Semula",
    category: "Interior Design",
    img: p_img_5,
    year: "Digital Marketing Funnel",
  },
  {
    id: 6,
    title: "StopnGo",
    category: "Repair Services",
    img: p_img_6,
    year: "Digital Marketing Funnel",
  },
  {
    id: 7,
    title: "SleepNco",
    category: "Home Furniture",
    img: p_img_4,
    year: "Digital Marketing Funnel",
  },
  {
    id: 8,
    title: "Kitalabel",
    category: "Printing & Packaging",
    img: p_img_1,
    year: "Digital Marketing Funnel",
  },
];

// prop type
type IProps = {
  style_2?: boolean;
};
export default function ProjectFive({ style_2 = false }: IProps) {
  return (
    <div
      className={`tp-project-5-2-area pb-130 ${
        style_2 ? "" : "tp-project-5-2-pt black-bg"
      }`}
    >

      <div className="container">
        <div className="row gx-140">
          {project_data.map((item) => (
            <div key={item.id} className="col-xl-6 col-lg-6 col-md-6">
              <div
                className="tp-project-5-2-thumb fix mb-140 p-relative not-hide-cursor"
                data-cursor={item.title}
              >
                <Link className="cursor-hide" href="/portfolio-details-1">
                  <span className="tp_img_reveal">
                    <div className="tp_img_reveal">
                      <Image
                        src={item.img}
                        alt="project-img"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </span>
                  <div className="tp-project-5-2-category tp_fade_anim">
                    <span>{item.category}</span>
                  </div>
                  <div className="tp-project-5-2-content tp_fade_anim">
                    <span className="tp-project-5-2-meta">{item.year}</span>
                    <h4 className="tp-project-5-2-title-sm">{item.title}</h4>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
