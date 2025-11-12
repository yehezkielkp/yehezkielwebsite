import { Metadata } from "next";
import { blog_data } from "@/data/blog-data";
import BlogDetailsMain from "@/components/blog/blog-details-main";

export const metadata: Metadata = {
  title: "Oura - Blog Details page",
};

export default function BlogDetailsPage({params}:{params:{id:string}}) {
  const blog = [...blog_data].find((blog) => blog.id === Number(params.id));
  return blog ? (
    <BlogDetailsMain blog={blog} />
  ) : (
    <div className="text-center pt-100">
      Blog not found with id: {params.id}
    </div>
  );
}
