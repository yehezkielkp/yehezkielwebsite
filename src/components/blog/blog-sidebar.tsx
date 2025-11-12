import React from "react";
import Image from "next/image";
import avatar from "@/assets/img/inner-blog/blog-sidebar/avatar/avata-2.jpg";
import banner from "@/assets/img/inner-blog/blog-sidebar/banner/banner.jpg";
import { Search } from "../svg";
import { blog_classic } from "@/data/blog-data";
import Link from "next/link";

export default function BlogSidebar() {
  const rc_posts = [...blog_classic.filter((b) => b.img)].slice(0, 3);
  return (
    <div className="sidebar__wrapper">
      <div className="sidebar__widget mb-45">
        <div className="sidebar__author text-center">
          <div className="sidebar__author-thumb">
            <Image src={avatar} alt="avatar" style={{ height: "auto" }} />
          </div>
          <div className="sidebar__author-content">
            <h4 className="sidebar__author-title">Yehezkiel Kristama</h4>
            <p>Digital Marketing Expert specializing in SEO, Content Strategy, and Full Funnel Marketing.</p>
          </div>
        </div>
      </div>
      <div className="sidebar__widget mb-65">
        <div className="sidebar__widget-content">
          <div className="sidebar__search">
            <form action="#">
              <div className="sidebar__search-input-2">
                <input type="text" placeholder="Search product" />
                <button type="submit">
                  <Search />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="sidebar__widget mb-65">
        <h3 className="sidebar__widget-title">Category</h3>
        <div className="sidebar__widget-content">
          <ul>
            <li>
              <Link href="/blog-category/seo">SEO</Link>
            </li>
            <li>
              <Link href="/blog-category/content-marketing">Content Marketing</Link>
            </li>
            <li>
              <Link href="/blog-category/digital-strategy">Digital Strategy</Link>
            </li>
            <li>
              <Link href="/blog-category/analytics">Analytics</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar__widget mb-65">
        <h3 className="sidebar__widget-title">Recent Post</h3>
        <div className="sidebar__widget-content">
          <div className="sidebar__post rc__post">
            {rc_posts.map((item) => (
              <div
                key={item.id}
                className="rc__post mb-30 d-flex align-items-center"
              >
                <div className="rc__post-thumb mr-20">
                  <Link href={`/blog-details/${item.id}`}>
                    <Image
                      src={item.img!}
                      alt="blog-img"
                      width={100}
                      height={100}
                      style={{ objectFit: "cover" }}
                    />
                  </Link>
                </div>
                <div className="rc__post-content">
                  <div className="rc__meta d-flex align-items-center">
                    <span>{item.date}</span>
                  </div>
                  <h3 className="rc__post-title">
                    <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sidebar__widget mb-65">
        <h3 className="sidebar__widget-title">Tags</h3>
        <div className="sidebar__widget-content">
          <div className="tagcloud">
            <Link href="/blog-tag/seo">SEO</Link>
            <Link href="/blog-tag/google">Google</Link>
            <Link href="/blog-tag/keywords">Keywords</Link>
            <Link href="/blog-tag/content">Content</Link>
            <Link href="/blog-tag/analytics">Analytics</Link>
          </div>
        </div>
      </div>
      <div className="sidebar__widget mb-65">
        <div className="sidebar__widget-content">
          <div className="sidebar__banner-img">
            <Image src={banner} alt="banner" style={{ height: "auto" }} />
          </div>
        </div>
      </div>
      <div className="sidebar__widget mb-65">
        <h3 className="sidebar__widget-title">Follow Us</h3>
        <div className="sidebar__widget-content">
          <div className="sidebar__social">
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
