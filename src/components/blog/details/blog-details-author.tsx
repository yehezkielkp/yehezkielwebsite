import React from "react";
import Image from "next/image";
import avatar from '@/assets/img/inner-blog/blog-details/avatar/avatar-1.jpg'

export default function BlogDetailsAuthor() {
  return (
    <div className="blog-details-author d-flex mb-60">
      <div className="blog-details-author-img">
        <Image
          src={avatar}
          alt=""
        />
      </div>
      <div className="blog-details-author-content-wrap">
        <div className="blog-details-author-social text-end">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div className="blog-details-author-content">
          <h4 className="blog-details-author-title">Yehezkiel Kristama</h4>
          <p>
            Digital Marketing Expert with 5+ years of experience helping businesses grow through SEO, content strategy, and data-driven digital marketing campaigns.
          </p>
        </div>
      </div>
    </div>
  );
}
