'use client';
import React, { useState } from "react";

export default function SeoPortfolioContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="tp-seo-content-area dark-bg pt-60 pb-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="tp-seo-content-wrapper">
              <h3 className="tp-seo-content-title">Digital Marketing Portfolio - Real Results for Real Businesses</h3>
              
              <div className={`tp-seo-content-box ${isExpanded ? 'expanded' : 'collapsed'}`}>
                <div className="tp-seo-content-text">
                  <p>
                    Explore my <strong>digital marketing portfolio</strong> showcasing successful campaigns and strategies 
                    across diverse industries in Indonesia.
                  </p>
                  
                  <p>
                    From industrial equipment suppliers to e-commerce platforms, fintech solutions to retail services — 
                    I've helped businesses of all sizes achieve their digital marketing goals through data-driven strategies 
                    and measurable results.
                  </p>

                  <h4>Portfolio Highlights by Industry</h4>
                  <p>
                    <strong>Industrial & Manufacturing:</strong> Megajaya (lifting equipment), Roda Bangun Mandiri (building materials), 
                    and Cipta Semula (interior design) represent my work in B2B sectors, where I focus on lead generation, 
                    technical SEO, and professional brand positioning.
                  </p>

                  {isExpanded && (
                    <>
                      <p>
                        <strong>E-Commerce & Retail:</strong> Bumilindo (Samsung mobile electronics) and SleepNco (premium mattresses) 
                        showcase my expertise in conversion rate optimization, product page SEO, and performance marketing campaigns 
                        that drive online sales.
                      </p>

                      <p>
                        <strong>Services & Technology:</strong> Ezeelink (digital payment solutions), StopnGo (repair services), 
                        and Kitalabel (printing & packaging) demonstrate my ability to market service-based businesses and tech platforms 
                        through targeted content strategies and local SEO.
                      </p>

                      <h4>My Digital Marketing Approach</h4>
                      <p>
                        Each project in my portfolio follows a proven <strong>full-funnel marketing methodology</strong>:
                      </p>

                      <ul>
                        <li><strong>Discovery & Strategy:</strong> Deep analysis of business goals, target audience, competitors, and market opportunities</li>
                        <li><strong>Website Optimization:</strong> Creating conversion-focused websites with exceptional user experience and technical SEO</li>
                        <li><strong>Content Development:</strong> Producing SEO-optimized content that ranks well and resonates with target audiences</li>
                        <li><strong>Paid Advertising:</strong> Managing Google Ads, Meta Ads, and other platforms with ROI-focused optimization</li>
                        <li><strong>Performance Tracking:</strong> Continuous monitoring, testing, and refinement based on real data and KPIs</li>
                      </ul>

                      <h4>Industries I've Worked With</h4>
                      <p>
                        My portfolio spans multiple sectors, demonstrating versatility and deep understanding of different business models:
                      </p>

                      <ul>
                        <li><strong>Industrial Equipment & B2B:</strong> Complex sales cycles, technical content, lead nurturing campaigns</li>
                        <li><strong>E-Commerce & Retail:</strong> Product catalog optimization, shopping campaigns, conversion rate optimization</li>
                        <li><strong>Fintech & Technology:</strong> Trust-building content, security messaging, user education campaigns</li>
                        <li><strong>Home & Lifestyle:</strong> Visual content marketing, lifestyle branding, social media engagement</li>
                        <li><strong>Professional Services:</strong> Authority positioning, local SEO, service area marketing</li>
                        <li><strong>Manufacturing & Production:</strong> B2B lead generation, technical specifications, industry partnerships</li>
                      </ul>

                      <h4>Measurable Results Across All Projects</h4>
                      <p>
                        Every project in my portfolio has delivered tangible business outcomes:
                      </p>

                      <ul>
                        <li>Increased organic traffic by 200-500% through strategic SEO implementation</li>
                        <li>Improved conversion rates by 30-150% through website optimization and A/B testing</li>
                        <li>Achieved 300-600% ROAS on paid advertising campaigns</li>
                        <li>First-page Google rankings for high-value commercial keywords</li>
                        <li>Significant growth in qualified leads and online inquiries</li>
                        <li>Enhanced brand visibility and market positioning</li>
                      </ul>

                      <h4>Why Businesses Choose to Work With Me</h4>
                      <p>
                        My portfolio demonstrates consistent success across industries because I focus on what matters most:
                      </p>

                      <ul>
                        <li><strong>Results-Oriented:</strong> Every strategy is designed to achieve specific business outcomes, not just vanity metrics</li>
                        <li><strong>Industry Expertise:</strong> Deep understanding of different business models and market dynamics</li>
                        <li><strong>Data-Driven Decisions:</strong> All strategies backed by analytics, testing, and continuous optimization</li>
                        <li><strong>Full-Service Approach:</strong> From strategy to execution, I handle all aspects of digital marketing</li>
                        <li><strong>Transparent Communication:</strong> Regular reporting and clear explanation of results and recommendations</li>
                      </ul>

                      <h4>Ready to Add Your Success Story to My Portfolio?</h4>
                      <p>
                        If you're looking for a <strong>digital marketing expert</strong> who can deliver measurable results like the businesses 
                        in my portfolio, let's discuss your goals. I offer a free consultation to explore how my proven strategies 
                        can help your business grow online.
                      </p>

                      <p>
                        Whether you're in B2B, e-commerce, services, or any other industry, I can develop a customized digital marketing 
                        strategy that drives real business growth. Contact me today to schedule your free consultation and start your 
                        journey toward digital marketing success.
                      </p>
                    </>
                  )}
                </div>
                
                {!isExpanded && (
                  <div className="tp-seo-content-gradient"></div>
                )}
              </div>

              <div className="tp-seo-content-btn-box text-center">
                <button 
                  className="tp-seo-content-toggle-btn"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? (
                    <>
                      Show Less <i className="fa-solid fa-chevron-up"></i>
                    </>
                  ) : (
                    <>
                      Read More About Portfolio <i className="fa-solid fa-chevron-down"></i>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
