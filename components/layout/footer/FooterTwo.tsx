"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import JoinUs from "@/components/containers/JoinUs";
import Logo from "public/images/logo.png";

const FooterTwo = () => {
  const pathname = usePathname();
  const isAboutUsOrServicesRoute =
    pathname === "/about-us" || pathname === "/services";

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`footer-cmn ${isAboutUsOrServicesRoute ? " lilu-foot" : ""}`}
    >
      <div className="container">
        <JoinUs />
        <div className="row">
          <div className="col-12">
            <div className="footer-cmn__inner section ">
              <div className="row  gaper">
                <div className="col-12 col-lg-7 col-xl-8">
                  <div className="footer-cmn__left text-center text-lg-start">
                    <Link href="/" className="logo">
                      <Image src={Logo} alt="Image" priority />
                    </Link>
                    <div className="footer__nav-list">
                      <ul className="justify-content-center justify-content-lg-start">
                        <li>
                          <Link href="/">Plan</Link>
                        </li>
                        <li>
                          <Link href="about-us">Contact Us</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-5 col-xl-4">
                  <div className="offcanvas-info__form">
                    <h5 className="text-white text-center text-lg-start">
                      Subscribe to newsletter
                    </h5>
                    <form action="#" method="post" autoComplete="off">
                      <div className="subscribe-form">
                        <input
                          type="email"
                          name="subscribe-newsletter"
                          id="subscribeNewsletterTwo"
                          placeholder="Email"
                          required
                        />
                        <button
                          type="submit"
                          aria-label="subscribe newsletter"
                          title="subscribe newsletter"
                        >
                          <i className="material-symbols-outlined">send</i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="container">
          <div className="row gaper">
            <div className="col-12 col-lg-6">
              <div className="footer__copyright-content text-center text-lg-start">
                <p>
                  Copyright &copy; <span id="copyrightYear">{currentYear}</span>{" "}
                  <Link href="/">Aikeu</Link>. All Rights Reserved
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="footer__copyright-social justify-content-center justify-content-lg-end">
                <p className="tertiary-text d-none d-lg-block">Follow Us :</p>
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
                    href="https://www.linkedin.com/"
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
    </footer>
  );
};

export default FooterTwo;
