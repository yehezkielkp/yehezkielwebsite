import { Metadata } from "next";
import HomeFourMain from "@/pages/homes/home-4";

export const metadata: Metadata = {
  title: "Home",
  description: "Oura Studios adalah creative digital agency yang berbasis di Jakarta Selatan, Indonesia. Kami mengkhususkan diri dalam UI/UX Design, Web Development, Branding, dan Motion Design untuk membantu bisnis Anda berkembang di era digital.",
  keywords: ["Oura Studios", "creative agency Jakarta", "digital agency Indonesia", "UI UX design", "web development", "branding agency", "motion design", "Jakarta creative agency", "website design Jakarta", "digital marketing"],
};

export default function Home() {
  return (
    <HomeFourMain />
  );
}
