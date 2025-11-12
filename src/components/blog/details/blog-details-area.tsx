import React from "react";
import Image from "next/image";
import BlogSidebar from "../blog-sidebar";
import { QuoteThree, Share, Tag } from "@/components/svg";
import BlogDetailsAuthor from "./blog-details-author";
import BlogDetailsNavigation from "./blog-details-navigation";
import BlogDetailsComments from "./blog-details-comments";
import BlogReplyForm from "@/components/form/blog-reply-form";
import details_thumb_1 from "@/assets/img/inner-blog/blog-details/blog-details-2.jpg";
import details_thumb_2 from "@/assets/img/inner-blog/blog-details/blog-details-3.jpg";
import details_thumb_3 from "@/assets/img/inner-blog/blog-details/blog-details-4.jpg";
import { IBlogDT } from "@/types/blog-d-t";

type IProps = {
  blog: IBlogDT;
};

export default function BlogDetailsArea({ blog }: IProps) {
  return (
    <section className="postbox__area tp-blog-sidebar-sticky-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="postbox__wrapper">
              <div className="blog-details-top-text">
                <p>
                  The metaverse can be viewed as an evolution of today’s
                  internet, which in turn evolved from passive media that we
                  simply consumed. In the age of radio and television, the
                  consumer’s only job was to listen and decide if they wanted to
                  buy.{" "}
                </p>
              </div>
              <div className="blog-details-left-content">
                <h4 className="blog-details-left-title">
                  What is Technical SEO?
                </h4>
                <p className="mb-20">
                  <span>Technical SEO</span> refers to the process of optimizing your website for the crawling and indexing phase. 
                  It helps search engines access, crawl, interpret, and index your website without any problems. The goal is to ensure 
                  search engines can efficiently discover and understand your content, while providing an excellent experience for users.
                </p>
                <p>
                  Unlike on-page SEO which focuses on content optimization, technical SEO deals with website architecture, server configuration, 
                  site speed, mobile-friendliness, and other backend elements that affect search engine visibility. Getting these fundamentals 
                  right is crucial before investing heavily in content creation or link building.
                </p>
              </div>
              <div className="blog-details-thumb-box">
                <div className="row">
                  <div className="col-md-6">
                    <div className="blog-details-thumb">
                      <Image
                        className="w-100 mb-20"
                        src={details_thumb_1}
                        alt="details-thumb"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="blog-details-thumb">
                      <Image
                        className="w-100 mb-20"
                        src={details_thumb_2}
                        alt="details-thumb"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-details-left-content">
                <h4 className="blog-details-left-title">
                  Core Technical SEO Elements
                </h4>
                <p>
                  But, like most politicians, he promised more than he could
                  deliver. Why not indeed! Daylight and everything. And then the
                  battle’s not so bad? Hello, little man. I will destroy you!
                  No, I’m Santa Claus! Kif might! Man, I’m sore all over. I feel
                  like I just went ten rounds with mighty Thor. I found what I
                  need. And it’s not friends, it’s things. Then we’ll go with
                  that data file!
                </p>
              </div>
              <div className="blog-details-blockquote">
                <blockquote>
                  <span className="quote-icon">
                    <QuoteThree />
                  </span>
                  <p>Technical SEO is not about tricks or shortcuts. It's about building a solid foundation that allows your great content to shine in search results.</p>
                  <span className="blockquote-info">Yehezkiel Kristama, Digital Marketing Expert</span>
                </blockquote>
              </div>
              <div className="blog-details-left-content">
                <p>
                  <strong>4. HTTPS and Security:</strong> HTTPS is a confirmed ranking signal. Ensure your entire website uses SSL certificates 
                  for secure connections. This not only helps with SEO but also builds trust with users. Modern browsers flag non-HTTPS sites 
                  as "Not Secure," which can significantly hurt conversion rates.
                </p>
                <p>
                  <strong>5. Structured Data (Schema Markup):</strong> Schema markup helps search engines understand your content better and 
                  can lead to rich snippets in search results. Implement appropriate schema types for your content - Article schema for blog posts, 
                  Product schema for e-commerce, LocalBusiness schema for local businesses, and FAQ schema for frequently asked questions.
                </p>
              </div>
              <div className="blog-details-thumb-box">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="blog-details-thumb">
                      <Image
                        src={details_thumb_3}
                        alt="details-thumb"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-details-left-content">
                <h4 className="blog-details-left-title">
                  Technical SEO Best Practices for 2025
                </h4>
                <p>
                  <strong>URL Structure:</strong> Keep URLs short, descriptive, and keyword-rich. Use hyphens to separate words and avoid 
                  unnecessary parameters. A clear URL structure helps both users and search engines understand your site hierarchy.
                </p>
                <p>
                  <strong>Canonical Tags:</strong> Prevent duplicate content issues by implementing canonical tags. This tells search engines 
                  which version of a page is the primary one to index when you have similar or identical content on multiple URLs.
                </p>
                <p>
                  <strong>XML Sitemaps:</strong> Submit updated XML sitemaps to Google Search Console and Bing Webmaster Tools. Your sitemap 
                  should include all important pages and be updated regularly when you add new content. Use sitemap index files for large sites.
                </p>
                <p>
                  <strong>404 Error Management:</strong> Regularly audit your site for broken links and 404 errors. Either fix the links, 
                  implement proper 301 redirects, or create custom 404 pages that help users find what they're looking for.
                </p>
              </div>
              <div className="blog-details-share-wrap mb-40">
                <div className="row">
                  <div className="col-xl-8 col-lg-8">
                    <div className="blog-details-tag">
                      <span>
                        <Tag />
                      </span>
                      <a href="#">SEO</a>
                      <a href="#">Technical SEO</a>
                      <a href="#">Google</a>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4">
                    <div className="blog-details-share text-start text-md-end">
                      <span>
                        <Share />
                      </span>
                      <a href="#">Share Post</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* blog details author */}
              <BlogDetailsAuthor />
              {/* blog details author */}

              {/* blog details navigation */}
              <BlogDetailsNavigation />
              {/* blog details navigation */}

              <div className="postbox__comment mb-100">
                <h3 className="postbox__comment-title">3 Comments</h3>
                {/* blog details comments */}
                <BlogDetailsComments />
                {/* blog details comments */}
              </div>

              <div className="tp-postbox-details-form">
                <h3 className="tp-postbox-details-form-title">Leave a Reply</h3>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>

                {/* blog reply form */}
                <BlogReplyForm />
                {/* blog reply form */}
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}



