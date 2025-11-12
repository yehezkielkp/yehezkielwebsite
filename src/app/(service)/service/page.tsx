import React from "react";
import { Metadata } from "next";
import ServiceMain from "@/pages/service/service";

export const metadata: Metadata = {
  title: "Digital Marketing Services - Website Development, SEO, Ads Management",
  description: "Professional digital marketing services: Website Development & Optimization, SEO & Content Strategy, Ads Management, and Content Production. Data-driven strategies focused on ROI.",
};

const ServicePage = () => {
  return (
    <ServiceMain/>
  );
};

export default ServicePage;
