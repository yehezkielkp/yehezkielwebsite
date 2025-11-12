import React from "react";
import { Metadata } from "next";
import PortfolioStandardMain from "@/pages/portfolio/portfolio-standard-main";

export const metadata: Metadata = {
  title: "Digital Marketing Portfolio - Proven Results Across Industries",
  description: "Explore my digital marketing portfolio showcasing successful campaigns for 8+ businesses across industries: Industrial, E-Commerce, Fintech, Retail, and more. Real results, real growth.",
};

const PortfolioStandardPage = () => {
  return (
    <PortfolioStandardMain/>
  );
};

export default PortfolioStandardPage;
