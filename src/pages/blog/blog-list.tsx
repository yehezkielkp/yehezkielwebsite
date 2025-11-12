"use client";
import React, { useState } from "react";
import Wrapper from "@/layouts/wrapper";
import HeaderAbout from "@/layouts/headers/header-about";
import BlogListBanner from "@/components/blog/blog-list-banner";
import BlogListArea from "@/components/blog/blog-list-area";
import SeoBlContent from "@/components/seo/seo-blog-content";
import FooterFour from "@/layouts/footers/footer-four";
import VideoPopup from "@/components/modal/video-popup";

export default function BlogListMain() {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  const [videoId, setVideoId] = useState<string>("");

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderAbout />
      {/* header area end */}

      <main>
        {/* blog list banner start */}
        <BlogListBanner />
        {/* blog list banner end */}

        {/* blog list area start */}
        <BlogListArea />
        {/* blog list area end */}
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
