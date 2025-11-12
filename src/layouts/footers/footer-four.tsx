import React from 'react';
import Image from 'next/image';
import logo from '@/assets/img/logo/LogoWhiteBGTransparant.png';
import Link from 'next/link';

export default function FooterFour() {
  return (
    <footer>
      <div className="tp-footer-3-area dark-bg pt-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-1">
                <div className="tp-footer-3-widget mb-40">
                  <h4 className="tp-footer-3-title">Quick Links</h4>
                  <div className="tp-footer-3-menu">
                    <ul>
                      <li><Link href="/">Home</Link></li>
                      <li><Link href="/about-us">About</Link></li>
                      <li><Link href="/service">Services</Link></li>
                      <li><Link href="/portfolio-standard">Portfolio</Link></li>
                      <li><Link href="/blog-classic">Blog</Link></li>
                      <li><Link href="/contact">Contact</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="tp-footer-3-widget">
                  <h4 className="tp-footer-3-title">Services</h4>
                  <div className="tp-footer-3-menu">
                    <ul style={{display: 'flex', flexWrap: 'wrap', gap: '0 20px'}}>
                      <li style={{width: 'calc(50% - 10px)'}}><Link href="/service">Website Development</Link></li>
                      <li style={{width: 'calc(50% - 10px)'}}><Link href="/service">SEO Optimization</Link></li>
                      <li style={{width: 'calc(50% - 10px)'}}><Link href="/service">Google Ads Management</Link></li>
                      <li style={{width: 'calc(50% - 10px)'}}><Link href="/service">Social Media Marketing</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget text-md-center footer-col-3-2">
                <div className="tp-footer-3-logo-box">
                  <p style={{marginBottom: '40px'}}>
                    Ready to take your business <br />
                    to the next level? Let&apos;s talk.
                  </p>
                  <Link className="tp-footer-3-logo p-relative" href="/" style={{display: 'inline-block', marginBottom: '30px'}}>
                    <Image src={logo} alt="logo" />
                  </Link>
                  <p className="tp-footer-3-copyright" style={{marginTop: '0'}}>
                    {new Date().getFullYear()} Yehezkiel Kristama <br /> © All rights reserved
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-3">
                <div className="tp-footer-3-widget mb-30">
                  <h4 className="tp-footer-3-title">Contact</h4>
                  <div className="tp-footer-2-contact-item">
                    <span>
                      <a href="https://www.google.com/maps/place/Jl.+Arteri+Permata+Hijau+No.11,+RT.11%2FRW.10,+Grogol+Utara,+Kec.+Kebayoran+Lama,+Kota+Jakarta+Selatan,+Daerah+Khusus+Ibukota+Jakarta+12210"
                      target="_blank">Jl. Arteri Permata Hijau No.11, RT.11/RW.10, Grogol Utara, Kec. Kebayoran Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12210</a>
                      </span>
                  </div>
                  <div className="tp-footer-2-contact-item">
                    <span><i className="fa-solid fa-phone"></i> <a href="tel:+6285175251338">+6285175251338</a></span>
                    <span><a href="mailto:yehezkielkristamaputra@gmail.com">yehezkielkristamaputra@gmail.com</a></span>
                  </div>
                </div>
                <div className="tp-footer-3-widget">
                  <h4 className="tp-footer-3-title">Follow Me</h4>
                  <div className="tp-footer-3-social">
                    <a href="https://www.linkedin.com/in/yehezkielkristama/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="https://www.instagram.com/yehezkielkp/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://wa.me/6285175251338" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
                    <a href="mailto:yehezkielkristamaputra@gmail.com"><i className="fa-solid fa-envelope"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
