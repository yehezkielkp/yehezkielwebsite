"use client";
import React, { useState } from "react";
import Wrapper from "@/layouts/wrapper";
import HeaderAbout from "@/layouts/headers/header-about";
import BlogCategoryArea from "@/components/blog/blog-category-area";
import SeoBlContent from "@/components/seo/seo-blog-content";
import FooterFour from "@/layouts/footers/footer-four";
import VideoPopup from "@/components/modal/video-popup";

type IProps = {
  slug?: string;
};

export default function BlogCategoryMain({ slug = "ui-ux-design" }: IProps) {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  const [videoId, setVideoId] = useState<string>("");

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderAbout />
      {/* header area end */}

      <main>
        {/* blog category area start */}
        <BlogCategoryArea 
          slug={slug}
          setIsVideoOpen={setIsVideoOpen}
          setVideoId={setVideoId}
        />
        {/* blog category area end */}
      </main>

      {/* seo content area */}
      <SeoBlContent />
      {/* seo content area */}

      {/* footer area */}
      <FooterFour />
      {/* footer area */}

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={videoId}
      />
      {/* video modal end */}
    </Wrapper>
  );
}
