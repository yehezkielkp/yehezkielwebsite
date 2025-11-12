import React from "react";
import { Metadata } from "next";
import BlogClassicMain from "@/pages/blog/blog-classic";

export const metadata: Metadata = {
  title: "SEO & Digital Marketing Blog - Tips, Strategies & Insights",
  description: "Expert SEO and digital marketing insights from Yehezkiel Kristama. Learn proven strategies for technical SEO, content marketing, keyword research, and more.",
};

const BlogClassicPage = () => {
  return (
    <BlogClassicMain/>
  );
};

export default BlogClassicPage;
