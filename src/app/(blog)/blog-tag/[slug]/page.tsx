import React from "react";
import { Metadata } from "next";
import BlogTagMain from "@/pages/blog/blog-tag";

export const metadata: Metadata = {
  title: "Oura - Blog Tag",
};

const BlogTagPage = ({ params }: { params: { slug: string } }) => {
  return <BlogTagMain slug={params.slug} />;
};

export default BlogTagPage;
