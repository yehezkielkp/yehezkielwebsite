import React from "react";
import { Metadata } from "next";
import BlogCategoryMain from "@/pages/blog/blog-category";

export const metadata: Metadata = {
  title: "Oura - Blog Category",
};

const BlogCategoryPage = ({ params }: { params: { slug: string } }) => {
  return <BlogCategoryMain slug={params.slug} />;
};

export default BlogCategoryPage;
