'use client';
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuThree } from "@/components/svg";
import HeaderMenus from "./header-menus";
import useSticky from "@/hooks/use-sticky";
import logo from "../../../public/assets/img/logo/logo-black.png";
import logo_2 from "../../../public/assets/img/logo/logo-white.png";

import MobileOffcanvas from "@/components/offcanvas/mobile-offcanvas";

// prop type 
type IProps = {
  transparent?: boolean;
  cls?: string;
}
export default function HeaderEleven({transparent=false,cls=''}: IProps) {
  const { sticky, headerRef, headerFullWidth } = useSticky();

  const [openOffCanvas, setOpenOffCanvas] = React.useState(false);
  useEffect(() => {
    headerFullWidth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <header className="tp-header-height" ref={headerRef}>  
        <div
          id="header-sticky"
          className={`tp-header-area tp-header-mob-space ${transparent?'tp-transparent':'tp-header-style-11'} pl-60 pr-60 z-index-9 ${sticky ? "header-sticky" : ""} ${cls}`}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 col-6">
                <div className="tp-header-logo">
                  <Link className={`${transparent?'ab-logo-1':'logo-1'}`} href="/">
                    <Image src={transparent?logo_2:logo} alt="logo" />
                  </Link>
                  <Link className={`${transparent?'ab-logo-2':'logo-2'}`} href="/">
                    <Image src={transparent?logo:logo_2} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-8 col-lg-9 d-none d-xl-block">
                <div className="tp-header-menu header-main-menu text-center">
                  <div className="tp-header-menu">
                    <nav className="tp-main-menu-content">
                      {/* header menus */}
                      <HeaderMenus />
                      {/* header menus */}
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg col-6">
                <div className="tp-header-bar text-end">
                  <button className="tp-offcanvas-open-btn" onClick={() => setOpenOffCanvas(true)}>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* off canvas */}
      <MobileOffcanvas openOffcanvas={openOffCanvas} setOpenOffcanvas={setOpenOffCanvas} />
      {/* off canvas */}
    </>
  );
}
