"use client";
import React, { useState } from "react";
import Wrapper from "@/layouts/wrapper";
import HeaderAbout from "@/layouts/headers/header-about";
import BlogTagArea from "@/components/blog/blog-tag-area";
import SeoBlContent from "@/components/seo/seo-blog-content";
import FooterFour from "@/layouts/footers/footer-four";
import VideoPopup from "@/components/modal/video-popup";

type IProps = {
  slug?: string;
};

export default function BlogTagMain({ slug = "seo" }: IProps) {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  const [videoId, setVideoId] = useState<string>("");

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderAbout />
      {/* header area end */}

      <main>
        {/* blog tag area start */}
        <BlogTagArea 
          slug={slug}
          setIsVideoOpen={setIsVideoOpen}
          setVideoId={setVideoId}
        />
        {/* blog tag area end */}
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
