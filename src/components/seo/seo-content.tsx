'use client';
import React, { useState } from 'react';

export default function SeoContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="tp-seo-content-area dark-bg pt-60 pb-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="tp-seo-content-wrapper">
              <h3 className="tp-seo-content-title">Digital Marketing Expert & Full Funnel Marketing Specialist</h3>
              
              <div className={`tp-seo-content-box ${isExpanded ? 'expanded' : 'collapsed'}`}>
                <div className="tp-seo-content-text">
                  <p>
                    Looking for a <strong>Digital Marketing Expert</strong> who can help grow your business online?
                  </p>
                  
                  <p>
                    I&apos;m <strong>Yehezkiel Kristama</strong>, specializing in Full Funnel Marketing with expertise in Website Development, 
                    SEO Optimization, Ads Management (Google Ads & Meta Ads), and Social Media Marketing Strategy.
                  </p>

                  <p>
                    With a data-driven approach and focus on ROI, I&apos;ve helped dozens of brands increase their 
                    online presence and achieve measurable business targets.
                  </p>

                  {isExpanded && (
                    <>
                      <h4 className="tp-seo-content-subtitle">Services I Offer</h4>
                      
                      <p>
                        <strong>Website Development & Optimization:</strong> Websites that convert visitors into customers. 
                        I develop fast-loading, mobile-responsive websites optimized for maximum conversions. Your website is 
                        your 24/7 salesperson, and I make sure it performs.
                      </p>

                      <p>
                        <strong>SEO & Content Strategy:</strong> Ranking #1 on Google for your business keywords. 
                        I implement comprehensive SEO strategy from technical SEO, on-page optimization, to content strategy 
                        that makes your website dominate search results for relevant keywords.
                      </p>

                      <p>
                        <strong>Ads Management:</strong> Profitable campaigns with maximum ROI. I manage campaigns on Google Ads, 
                        Meta Ads, and other platforms with continuous data-driven optimization. Every dollar of your ad budget 
                        must be accountable.
                      </p>

                      <p>
                        <strong>Social Media Marketing:</strong> Building engaged and loyal audiences. I create organic social media 
                        strategies that engage your audience and convert them into customers.
                      </p>

                      <p>
                        <strong>Full Funnel Marketing Strategy:</strong> From awareness to retention. I develop comprehensive 
                        marketing strategies that integrate various channels, ensuring every touchpoint works together to move 
                        prospects from strangers to loyal customers.
                      </p>

                      <h4 className="tp-seo-content-subtitle">Why Work With Me?</h4>
                      
                      <p>
                        Unlike large agencies that handle hundreds of clients simultaneously, as a solo digital marketer 
                        I provide full attention to every project. You don&apos;t just get strategy, but also a partner who&apos;s 
                        invested in your business success.
                      </p>

                      <p>
                        <strong>Personal Attention:</strong> When you work with me, you work directly with me. No account managers, 
                        no junior staff. You get my expertise and experience directly on your project.
                      </p>

                      <p>
                        <strong>Data-Driven Approach:</strong> Every decision, every optimization, every recommendation is backed 
                        by data and analytics. I don&apos;t rely on gut feelings or assumptions - only solid data.
                      </p>

                      <p>
                        <strong>ROI-Focused:</strong> Marketing spend is an investment. I focus on metrics that matter - results 
                        that impact your bottom line. No vanity metrics, just real business outcomes.
                      </p>

                      <p>
                        <strong>Transparent Communication:</strong> Regular updates, clear reporting, and honest feedback. 
                        You always know what&apos;s happening with your campaigns and your budget.
                      </p>

                      <h4 className="tp-seo-content-subtitle">My Work Process</h4>
                      
                      <p>
                        <strong>Discovery & Strategy (Week 1-2):</strong> Deep dive understanding your business, goals, and target 
                        audience. I audit your current digital presence, analyze competitors, and identify opportunities. Then I 
                        develop a comprehensive marketing strategy with clear KPIs and roadmap.
                      </p>

                      <p>
                        <strong>Implementation (Week 3-6):</strong> Technical setup, asset creation, campaign configuration, and launch. 
                        I handle everything from tracking setup to campaign optimization, ensuring quality at every step.
                      </p>

                      <p>
                        <strong>Optimization & Scaling (Ongoing):</strong> Continuous improvement through daily monitoring, regular 
                        A/B testing, and data-driven optimization. I provide weekly updates and monthly strategy calls to discuss 
                        results and next steps.
                      </p>

                      <h4 className="tp-seo-content-subtitle">Proven Results</h4>
                      
                      <p>
                        I&apos;ve completed <strong>150+ successful projects</strong> with an average <strong>ROI increase of 300%</strong>. 
                        My clients have seen significant improvements in:
                      </p>

                      <ul>
                        <li>Website traffic and search rankings</li>
                        <li>Conversion rates and lead generation</li>
                        <li>ROAS (Return on Ad Spend) from paid campaigns</li>
                        <li>Social media engagement and brand awareness</li>
                        <li>Overall revenue growth from digital channels</li>
                      </ul>

                      <h4 className="tp-seo-content-subtitle">Ready for Digital Transformation?</h4>
                      
                      <p>
                        If you&apos;re serious about growing your business online, let&apos;s talk. I offer a <strong>FREE 30-minute 
                        consultation</strong> to discuss your challenges, opportunities, and how I can help achieve your goals.
                      </p>

                      <p>
                        Contact me at <strong>+6285175251338</strong> or email <strong>yehezkielkristamaputra@gmail.com</strong> 
                        to schedule your free consultation. Let&apos;s discuss how we can take your digital marketing to the next level.
                      </p>

                      <p>
                        As a <strong>Digital Marketing Specialist</strong> focused on delivering measurable results, I&apos;m committed 
                        to helping your business succeed online. Whether you need help with website development, SEO optimization, 
                        paid advertising, or comprehensive digital marketing strategy - I&apos;m here to help.
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
