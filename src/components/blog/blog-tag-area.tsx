import React from "react";
import Link from "next/link";
import Image from "next/image";
import BlogSidebar from "./blog-sidebar";
import { blog_classic } from "@/data/blog-data";
import usePagination from "@/hooks/use-pagination";
import { IBlogDT } from "@/types/blog-d-t";
import PaginationCom from "../ui/pagination";

// prop type
type IProps = {
  slug: string;
  setIsVideoOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setVideoId: React.Dispatch<React.SetStateAction<string>>;
};

export default function BlogTagArea({ slug, setIsVideoOpen, setVideoId }: IProps) {
  // Convert slug to tag format (e.g., "ui-ux" -> "UI/UX")
  const tag = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Filter blogs by tag (you can add tags array to blog data if needed)
  // For now, filtering by title or desc containing the tag
  const blog_items = [...blog_classic.filter((b) => 
    !b.blogHeroSlider && 
    (b.title?.toLowerCase().includes(slug.toLowerCase()) || 
     b.desc?.toLowerCase().includes(slug.toLowerCase()) ||
     b.category?.toLowerCase().includes(slug.toLowerCase()))
  )];
  
  const { currentItems, handlePageClick, pageCount } = usePagination<IBlogDT>(blog_items, 4);

  function handleVideoModal(id: string) {
    setIsVideoOpen(true);
    setVideoId(id);
  }

  return (
    <section
      id="postbox"
      className="postbox__area tp-blog-sidebar-sticky-area pt-120 pb-80"
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="postbox__wrapper">
              {currentItems.length === 0 && (
                <div className="text-center py-5">
                  <h3>No posts found with this tag</h3>
                  <Link href="/blog-classic" className="tp-btn-border-lg mt-3">
                    Back to Blog
                  </Link>
                </div>
              )}
              {currentItems.map((item) => (
                <article key={item.id} className="postbox__item mb-80">
                  {!item.blogQuote && !item.blogQuoteTwo && !item.imgSlider && (
                    <div className="postbox__thumb">
                      <Link href={`/blog-details/${item.id}`}>
                        <Image src={item.img!} alt="blog-img" />
                      </Link>
                      {item.video && (
                        <div className="postbox__play-btn">
                          <a
                            className="popup-video pointer"
                            onClick={() => handleVideoModal(item.videoId!)}
                          >
                            <i className="fa-sharp fa-solid fa-play"></i>
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                  {!item.blogQuote && !item.blogQuoteTwo && (
                    <div className="postbox__content">
                      <div className="postbox__meta">
                        <span>
                          {item.category} . {item.date}
                        </span>
                      </div>
                      <h3 className="postbox__title">
                        <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
                      </h3>
                      <div className="postbox__text">
                        <p>{item.desc}</p>
                      </div>
                      <div className="postbox__read-more">
                        <Link href={`/blog-details/${item.id}`} className="tp-btn-border-lg">
                          read more
                        </Link>
                      </div>
                    </div>
                  )}
                </article>
              ))}

              {currentItems.length > 0 && (
                <div className="basic-pagination">
                  <nav>
                    <PaginationCom handlePageClick={handlePageClick} pageCount={pageCount} />
                  </nav>
                </div>
              )}
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
