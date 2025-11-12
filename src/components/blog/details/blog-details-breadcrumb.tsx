import React from "react";
import Image from "next/image";
import overlay from "@/assets/img/inner-blog/blog-details/bg-shape/overly.png";
import avatar from "@/assets/img/inner-blog/blog-details/avatar/avatar-2.jpg";
import { IBlogDT } from "@/types/blog-d-t";

type IProps = {
  blog: IBlogDT;
};

export default function BlogDetailsBreadcrumb({ blog }: IProps) {
  const blogImage = blog.img 
    ? (typeof blog.img === 'string' ? blog.img : blog.img.src)
    : '/assets/img/inner-blog/blog-details/blog-details-1.jpg';
  
  return (
    <div className="blog-details-area">
      <div
        className="blog-details-bg blog-details-bg-height blog-details-overlay p-relative d-flex align-items-end pt-170 pb-170"
        style={{
          backgroundImage: `url(${blogImage})`,
        }}
      >
        <div className="blog-details-overlay-shape">
          <Image src={overlay} alt="overlay" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-11">
              <div className="blog-details-content z-index-5">
                <span className="blog-details-meta">
                  {blog.category} <i>. {blog.date}</i>
                </span>
                <h4 className="blog-details-title tp-char-animation">
                  {blog.title}
                </h4>
                <div className="blog-details-top-author d-flex align-items-center">
                  <Image src={avatar} alt="avatar" />
                  <span>
                    {blog.author} / <i>5 min</i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
