'use client';
import React, { useState } from "react";

export default function SeoServiceContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="tp-seo-content-area dark-bg pt-60 pb-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="tp-seo-content-wrapper">
              <h3 className="tp-seo-content-title">Professional Digital Marketing Services</h3>
              
              <div className={`tp-seo-content-box ${isExpanded ? 'expanded' : 'collapsed'}`}>
                <div className="tp-seo-content-text">
                  <p>
                    Looking for comprehensive <strong>digital marketing services</strong> that deliver real results?
                  </p>
                  
                  <p>
                    I offer a full range of digital marketing solutions designed to help your business grow online. 
                    From website development to SEO optimization, paid advertising management, and content production — 
                    all backed by data-driven strategies and proven methodologies.
                  </p>

                  <h4>Website Development & Optimization Services</h4>
                  <p>
                    Your website is more than just an online presence — it's your 24/7 digital salesperson. 
                    I specialize in creating <strong>conversion-optimized websites</strong> that combine stunning design 
                    with exceptional user experience. Services include UI/UX design, responsive development, speed optimization, 
                    and conversion rate optimization (CRO) to ensure every visitor has the potential to become a customer.
                  </p>

                  {isExpanded && (
                    <>
                      <h4>SEO & Content Strategy Services</h4>
                      <p>
                        Organic traffic is one of the most valuable assets for long-term business growth. 
                        My <strong>SEO services</strong> cover the complete spectrum: technical SEO audits and fixes, 
                        comprehensive on-page optimization, strategic content marketing, and in-depth keyword research. 
                        I help your website rank on Google's first page for keywords that matter to your business.
                      </p>

                      <h4>Ads Management & Social Media Marketing</h4>
                      <p>
                        Profitable paid advertising requires continuous optimization and strategic thinking. 
                        I manage <strong>Google Ads, Meta Ads (Facebook & Instagram), and TikTok Ads campaigns</strong> with 
                        a singular focus: maximizing your return on investment. Beyond paid ads, I also develop engaging 
                        organic social media strategies that build community and drive conversions.
                      </p>

                      <h4>Content Production Services</h4>
                      <p>
                        Great content is the foundation of every successful digital marketing strategy. 
                        I produce high-quality <strong>visual and written content</strong> that captures attention and drives engagement. 
                        Services include product photography, video production for ads and social media, professional copywriting, 
                        social content creation, and brand storytelling that resonates with your target audience.
                      </p>

                      <h4>Why Choose My Digital Marketing Services?</h4>
                      <ul>
                        <li><strong>Data-Driven Approach:</strong> Every strategy is backed by analytics and real performance data</li>
                        <li><strong>ROI Focused:</strong> I measure success by your business outcomes, not vanity metrics</li>
                        <li><strong>Full Funnel Expertise:</strong> From awareness to conversion, I optimize every stage of the customer journey</li>
                        <li><strong>Proven Track Record:</strong> Successfully helped numerous brands increase their online presence and revenue</li>
                        <li><strong>Transparent Reporting:</strong> Regular updates and clear communication about campaign performance</li>
                      </ul>

                      <h4>Industries I Serve</h4>
                      <p>
                        I've worked with businesses across various industries including e-commerce, manufacturing, 
                        technology, professional services, and B2B companies. Whether you're a startup looking to establish 
                        your online presence or an established business seeking to scale, I can help develop and execute 
                        a digital marketing strategy tailored to your specific goals.
                      </p>

                      <h4>Get Started with a Free Consultation</h4>
                      <p>
                        Ready to take your digital marketing to the next level? I offer a free initial consultation 
                        where we can discuss your business goals, current challenges, and how my services can help you achieve 
                        measurable growth. Contact me today to schedule your consultation and start your journey toward 
                        digital marketing success.
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
                      Read More About Services <i className="fa-solid fa-chevron-down"></i>
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
