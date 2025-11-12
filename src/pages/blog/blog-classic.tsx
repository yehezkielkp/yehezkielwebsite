"use client";
import React, { useState } from "react";
import Wrapper from "@/layouts/wrapper";
import HeaderAbout from "@/layouts/headers/header-about";
import BlogClassicArea from "@/components/blog/blog-classic-area";
import SeoBlContent from "@/components/seo/seo-blog-content";
import FooterFour from "@/layouts/footers/footer-four";
import VideoPopup from "@/components/modal/video-popup";

export default function BlogClassicMain() {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  const [videoId, setVideoId] = useState<string>("");

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderAbout />
      {/* header area end */}

      <main>
        {/* blog classic area start */}
        <BlogClassicArea 
          setIsVideoOpen={setIsVideoOpen}
          setVideoId={setVideoId}
        />
        {/* blog classic area end */}
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
