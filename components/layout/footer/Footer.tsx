"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/images/logo.png";
import ThumbOne from "public/images/footer/footer-thumb-one.png";
import ThumbTwo from "public/images/footer/footer-thumb-two.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const deviceWidth = window.innerWidth;

    if (document.querySelector(".footer") && deviceWidth >= 768) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".footer",
          start: "top center",
          end: "+=40%",
          scrub: 0.5,
          pin: false,
        },
      });

      tl.to(".footer__content .light-title span", {
        "--opacity": 1,
        "--transformY": 0,
        duration: 3,
        ease: "power1.inOut",
      });

      tl.to(".footer-thumb-one img", {
        transform: "rotate(-24deg)",
        x: "0px",
        opacity: 1,
        duration: 3,
        ease: "power1.inOut",
      });

      tl.to(".footer-thumb-two img", {
        y: "0px",
        opacity: 1,
        duration: 3,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-center section">
          <div className="col-12 col-md-9 col-lg-9 col-xl-10 col-xxl-9">
            <div className="footer__content text-center">
              <h2 className="light-title fw-7 title-animation">
                Get started The Future of <span>AI HANAKO</span>
              </h2>
              <div className="footer__content-cta">
                <Link href="shop" className="btn btn--primary">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer__nav">
              <div className="row gaper">
                <div className="col-12 col-lg-4">
                  <div className="footer__nav-logo text-center text-lg-start">
                    <Link href="/" aria-label="home page" title="logo">
                      <Image src={Logo} alt="Image" priority />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer__copyright">
              <div className="row gaper">
                <div className="col-12 col-lg-6">
                  <div className="footer__copyright-content text-center text-lg-start">
                    <p>
                      Copyright &copy;{" "}
                      <span id="copyrightYear">{currentYear}</span>{" "}
                      <Link href="/">AI HANAKO</Link>. All Rights Reserved
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="footer__copyright-social justify-content-center justify-content-lg-end">
                    <p className="tertiary-text d-none d-lg-block">
                      Follow Us :
                    </p>
                    <div className="social">
                      <Link
                        href="https://www.twitter.com/"
                        target="_blank"
                        aria-label="share us on twitter"
                        title="twitter"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07l-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/></svg>
                        {/* <i className="bi bi-twitter"></i> */}
                      </Link>
                      <Link
                        href="https://www.instagram.com/"
                        target="_blank"
                        aria-label="share us on line"
                        title="line"
                      >
                        <i className="bi bi-line"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-thumb-one">
        <Image src={ThumbTwo} alt="Image" priority />
      </div>
      <div className="footer-thumb-two">
        <Image src={ThumbOne} alt="Image" priority />
      </div>
    </footer>
  );
};

export default Footer;
