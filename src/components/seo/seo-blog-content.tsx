'use client';
import React, { useState } from "react";

export default function SeoBlogContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="tp-seo-content-area dark-bg pt-60 pb-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="tp-seo-content-wrapper">
              <h3 className="tp-seo-content-title">SEO & Digital Marketing Insights</h3>
              
              <div className={`tp-seo-content-box ${isExpanded ? 'expanded' : 'collapsed'}`}>
                <div className="tp-seo-content-text">
                  <p>
                    Welcome to my <strong>SEO and digital marketing blog</strong>, where I share practical insights, 
                    strategies, and proven techniques that drive real results.
                  </p>
                  
                  <p>
                    As a digital marketing expert specializing in SEO, I write about topics that matter to businesses 
                    looking to grow their online presence. From technical SEO fundamentals to advanced content strategies, 
                    you'll find actionable advice backed by real-world experience and data-driven results.
                  </p>

                  <h4>What You'll Learn From This Blog</h4>
                  <p>
                    My blog covers the full spectrum of <strong>search engine optimization and digital marketing</strong>, 
                    with a focus on strategies that work specifically for the Indonesian market:
                  </p>

                  {isExpanded && (
                    <>
                      <ul>
                        <li><strong>Technical SEO:</strong> Site speed optimization, Core Web Vitals, crawlability, indexing, and structured data</li>
                        <li><strong>On-Page SEO:</strong> Content optimization, keyword placement, internal linking, and meta tags best practices</li>
                        <li><strong>Content Strategy:</strong> Creating content that ranks and converts, understanding search intent, and topic clustering</li>
                        <li><strong>Keyword Research:</strong> Finding high-value keywords for the Indonesian market, competitor analysis, and search volume insights</li>
                        <li><strong>Local SEO:</strong> Google Business Profile optimization, local citations, and location-based content strategies</li>
                        <li><strong>Link Building:</strong> White-hat link acquisition strategies, relationship building, and authority development</li>
                        <li><strong>Analytics & Measurement:</strong> Tracking what matters, setting up proper analytics, and making data-driven decisions</li>
                        <li><strong>Mobile SEO:</strong> Mobile-first indexing, responsive design, and mobile user experience optimization</li>
                      </ul>

                      <h4>Why Read My SEO Blog?</h4>
                      <p>
                        Unlike theoretical SEO blogs, every article here is based on <strong>real campaigns and actual results</strong>. 
                        I share what works in practice, not just what sounds good in theory.
                      </p>

                      <ul>
                        <li><strong>Practical & Actionable:</strong> Every article includes specific steps you can implement immediately</li>
                        <li><strong>Indonesian Market Focus:</strong> Strategies tailored for Indonesian businesses and search behavior</li>
                        <li><strong>Data-Driven Insights:</strong> Backed by analytics, testing, and real campaign performance</li>
                        <li><strong>Up-to-Date Information:</strong> Covering the latest algorithm updates and SEO best practices for 2025</li>
                        <li><strong>No Fluff:</strong> Straight to the point with actionable insights you can use today</li>
                      </ul>

                      <h4>Who Is This Blog For?</h4>
                      <p>
                        My SEO blog is designed for:
                      </p>

                      <ul>
                        <li><strong>Business Owners:</strong> Understanding SEO fundamentals to make informed decisions about digital marketing</li>
                        <li><strong>Marketing Managers:</strong> Implementing effective SEO strategies within their organizations</li>
                        <li><strong>Content Creators:</strong> Learning how to create content that ranks well and drives traffic</li>
                        <li><strong>Entrepreneurs:</strong> Growing their online presence on a budget through organic search</li>
                        <li><strong>Digital Marketers:</strong> Expanding their SEO knowledge and staying current with best practices</li>
                      </ul>

                      <h4>Topics I Cover Regularly</h4>
                      <p>
                        My blog posts cover both evergreen SEO fundamentals and timely updates about the changing digital landscape:
                      </p>

                      <ul>
                        <li><strong>Algorithm Updates:</strong> How Google's latest changes affect your rankings and what to do about it</li>
                        <li><strong>Case Studies:</strong> Real examples from my client work showing what works and what doesn't</li>
                        <li><strong>Tool Reviews:</strong> Honest assessments of SEO tools and which ones are worth the investment</li>
                        <li><strong>Strategy Guides:</strong> Comprehensive guides to implementing complete SEO strategies</li>
                        <li><strong>Quick Tips:</strong> Bite-sized optimizations you can implement in minutes for quick wins</li>
                        <li><strong>Industry Trends:</strong> Where SEO is headed and how to prepare for future changes</li>
                      </ul>

                      <h4>My Approach to SEO Content</h4>
                      <p>
                        Every article I write follows a simple philosophy: <strong>SEO is about creating value for users first, 
                        and optimizing for search engines second</strong>. This approach has consistently delivered better long-term 
                        results than chasing quick ranking tricks.
                      </p>

                      <p>
                        I believe in white-hat SEO techniques that build sustainable organic visibility. No shortcuts, no black-hat 
                        tactics, just proven strategies that stand the test of time and algorithm updates.
                      </p>

                      <h4>Stay Updated</h4>
                      <p>
                        I publish new SEO articles regularly, covering the latest developments in search engine optimization 
                        and digital marketing. Whether you're just starting with SEO or looking to refine your existing strategy, 
                        you'll find valuable insights to help you grow your organic search presence.
                      </p>

                      <p>
                        Have questions about SEO or digital marketing? Need help implementing these strategies for your business? 
                        <strong>Contact me for a free consultation</strong> to discuss how I can help you achieve your digital marketing goals.
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
                      Read More About This Blog <i className="fa-solid fa-chevron-down"></i>
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
