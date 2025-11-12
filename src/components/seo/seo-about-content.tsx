'use client';
import React, { useState } from 'react';

export default function SeoAboutContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="tp-seo-content-area dark-bg pt-60 pb-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="tp-seo-content-wrapper">
              <h3 className="tp-seo-content-title">About Me - Digital Marketing Expert & Full Funnel Marketing Specialist</h3>
              
              <div className={`tp-seo-content-box ${isExpanded ? 'expanded' : 'collapsed'}`}>
                <div className="tp-seo-content-text">
                  <p>
                    Hi, I&apos;m <strong>Yehezkiel Kristama</strong>, a Digital Marketing Specialist who focuses on 
                    Full Funnel Marketing strategy. I believe every business deserves a marketing system that works — 
                    not just campaigns that come and go, but sustainable strategies that drive real growth.
                  </p>
                  
                  <p>
                    With over <strong>7 years of experience</strong> in digital marketing, I&apos;ve helped 
                    <strong>42+ businesses</strong> across various industries transform their online presence 
                    and achieve measurable business outcomes. My approach is simple: data-driven strategies, 
                    transparent communication, and a relentless focus on ROI.
                  </p>

                  {isExpanded && (
                    <>
                      <h4 className="tp-seo-content-subtitle">My Journey in Digital Marketing</h4>
                      
                      <p>
                        I started my career in digital marketing with a passion for understanding how businesses can 
                        leverage the power of the internet to grow. Over the years, I&apos;ve worked with diverse clients — 
                        from industrial equipment suppliers to e-commerce platforms, fintech companies to retail businesses.
                      </p>

                      <p>
                        What sets me apart is my <strong>full-funnel approach</strong>. I don&apos;t just focus on one aspect 
                        of digital marketing. Instead, I look at the entire customer journey — from awareness to conversion 
                        to retention — and create integrated strategies that work together seamlessly.
                      </p>

                      <h4 className="tp-seo-content-subtitle">My Expertise & Services</h4>
                      
                      <p>
                        <strong>Website Development & Optimization:</strong> I build websites that convert. Not just pretty 
                        designs, but strategically crafted digital experiences optimized for user experience, loading speed, 
                        and conversion rates. Your website is your 24/7 salesperson — I make sure it performs.
                      </p>

                      <p>
                        <strong>SEO & Content Strategy:</strong> Organic traffic is one of the most valuable assets for 
                        long-term business growth. I implement comprehensive SEO strategies — from technical SEO fixes 
                        to content marketing that ranks on Google&apos;s first page for keywords that matter to your business.
                      </p>

                      <p>
                        <strong>Google Ads & Meta Ads Management:</strong> Profitable paid advertising requires continuous 
                        optimization and strategic thinking. I manage campaigns across Google Ads, Meta Ads (Facebook & Instagram), 
                        and other platforms with a singular focus: maximizing your return on investment.
                      </p>

                      <p>
                        <strong>Social Media Marketing:</strong> Building engaged communities and converting followers into 
                        customers. I create social media strategies that go beyond vanity metrics — focusing on engagement 
                        that drives business outcomes.
                      </p>

                      <p>
                        <strong>Content Production:</strong> High-quality visual and written content that captures attention 
                        and drives action. From product photography to video ads, from copywriting to brand storytelling — 
                        I produce content that converts.
                      </p>

                      <h4 className="tp-seo-content-subtitle">Why Work With Me?</h4>
                      
                      <p>
                        <strong>Personal Attention:</strong> As a solo digital marketing specialist, you work directly with me. 
                        No account managers, no junior staff handling your campaigns. You get my expertise, experience, and 
                        full attention on your project.
                      </p>

                      <p>
                        <strong>Data-Driven Approach:</strong> Every strategy, every optimization, every recommendation is 
                        backed by data and analytics. I don&apos;t rely on assumptions — only proven methodologies and 
                        continuous testing.
                      </p>

                      <p>
                        <strong>ROI-Focused:</strong> Marketing is an investment, not an expense. I focus on metrics that 
                        matter to your bottom line — leads, conversions, revenue growth. Not just traffic or impressions.
                      </p>

                      <p>
                        <strong>Transparent Communication:</strong> You always know what&apos;s happening with your campaigns. 
                        Regular updates, clear reporting, honest feedback about what&apos;s working and what needs improvement.
                      </p>

                      <p>
                        <strong>Proven Results:</strong> With <strong>150+ completed projects</strong> and an average 
                        <strong>300% ROI increase</strong>, I have a track record of delivering measurable results across 
                        various industries and business models.
                      </p>

                      <h4 className="tp-seo-content-subtitle">My Certifications & Professional Development</h4>
                      
                      <p>
                        I&apos;m committed to continuous learning and staying updated with the latest digital marketing trends 
                        and best practices. My certifications include:
                      </p>

                      <ul>
                        <li><strong>Foundations of Project Management</strong> - Google (2023)</li>
                        <li><strong>GST - Genesis and imposition!</strong> - PwC (2023)</li>
                        <li><strong>Project Management Professional (PMP)</strong> - IBM (2023)</li>
                        <li><strong>High-Impact Business Writing</strong> - UC Irvine (2022)</li>
                        <li><strong>Meta Business Social Media Marketing</strong> - Meta (2023)</li>
                      </ul>

                      <h4 className="tp-seo-content-subtitle">Industries I&apos;ve Worked With</h4>
                      
                      <p>
                        My experience spans across diverse industries, giving me unique insights into different business 
                        models and marketing challenges:
                      </p>

                      <ul>
                        <li><strong>Industrial Equipment & Manufacturing:</strong> B2B marketing, technical content, lead generation</li>
                        <li><strong>E-Commerce & Retail:</strong> Conversion optimization, shopping campaigns, customer retention</li>
                        <li><strong>Fintech & Technology:</strong> Trust-building, security messaging, user education</li>
                        <li><strong>Home & Lifestyle:</strong> Visual storytelling, lifestyle branding, social commerce</li>
                        <li><strong>Professional Services:</strong> Authority positioning, local SEO, service area marketing</li>
                        <li><strong>Building Materials & Construction:</strong> Technical SEO, contractor marketing, B2B strategies</li>
                      </ul>

                      <h4 className="tp-seo-content-subtitle">My Work Process</h4>
                      
                      <p>
                        <strong>Discovery & Strategy (Week 1-2):</strong> Deep dive into your business, goals, target audience, 
                        and current digital presence. Comprehensive audit, competitor analysis, and opportunity identification. 
                        Development of customized marketing strategy with clear KPIs and roadmap.
                      </p>

                      <p>
                        <strong>Implementation (Week 3-6):</strong> Technical setup, asset creation, campaign configuration, 
                        and launch. Quality assurance at every step. Initial optimization based on early performance data.
                      </p>

                      <p>
                        <strong>Optimization & Growth (Ongoing):</strong> Daily monitoring, weekly reporting, monthly strategy 
                        sessions. Continuous A/B testing and refinement. Scaling what works, fixing what doesn&apos;t.
                      </p>

                      <h4 className="tp-seo-content-subtitle">Let&apos;s Work Together</h4>
                      
                      <p>
                        If you&apos;re looking for a <strong>digital marketing expert</strong> who can deliver measurable results, 
                        I&apos;d love to hear about your business. I offer a <strong>free 30-minute consultation</strong> where 
                        we can discuss your challenges, opportunities, and how I can help you achieve your goals.
                      </p>

                      <p>
                        Whether you need help with website development, SEO optimization, paid advertising, or comprehensive 
                        digital marketing strategy — I&apos;m here to help your business grow online.
                      </p>

                      <p>
                        Contact me at <strong>+6285175251338</strong> or email 
                        <strong> yehezkielkristamaputra@gmail.com</strong> to schedule your free consultation.
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
                      Read More About Me <i className="fa-solid fa-chevron-down"></i>
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
