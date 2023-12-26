"use client";
import { useState } from "react";
import Link from "next/link";

const PricingPlanSeven = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="section pricing pri-alt fade-wrapper hg-i">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-7 col-xxl-6">
            <div className="section__header text-center">
              <h2 className="title mt-12 title-animation">
                ご希望のプランをお選びください
              </h2>
              <p>
                {" "}
                AI 生成代行作業は、ジャンル問わずどんな内容でも対応しており、貴社の強力なリソースとして活躍致します。
              </p>
              <div className="section__content-cta">
                <button
                  aria-label="get monthly price"
                  className={
                    "price-btn monthly-price " +
                    (isYearly ? " " : " price-btn-active")
                  }
                  onClick={() => setIsYearly(false)}
                >
                  Monthly
                </button>
                <button
                  aria-label="get annual price"
                  className={
                    "price-btn yearly-price " +
                    (isYearly ? " price-btn-active" : " ")
                  }
                  onClick={() => setIsYearly(true)}
                >
                  Annually
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-start gaper">
          <div className="col-12 col-md-6 col-xl-4">
            <div className="pricing__single topy-tilt fade-top">
              <div className="pricing__intro">
                <span className="primary-text">トライアル</span>
                {isYearly ? (
                  <h2 className="light-title yearly">
                    ￥49,800
                    <span>/ yearly</span>
                  </h2>
                ) : (
                  <h2 className="light-title monthly">
                    ￥49,800
                    <span>/ 月</span>
                  </h2>
                )}
              </div>
              <hr />
              <div className="pricing__content">
                <ul>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    画像生成から資料作成等
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    基本的なカスタマーサポート
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    月/100件まで
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    お試し価格
                  </li>
                </ul>
              </div>
              <div className="pricing__cta section__cta">
                <Link href="shop" className="btn btn--secondary">
                  このプランを申込む
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="pricing__single pricing__single-active topy-tilt fade-top">
              <div className="pricing__intro">
                <span className="primary-text">スタンダード</span>
                {isYearly ? (
                  <h2 className="light-title yearly">
                    ￥99,800
                    <span>/ yearly</span>
                  </h2>
                ) : (
                  <h2 className="light-title monthly">
                    ￥99,800
                    <span>/ 月</span>
                  </h2>
                )}
              </div>
              <hr />
              <div className="pricing__content">
                <ul>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                      画像生成から資料作成まで
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                      基本的なカスタマーサポート。
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                      日/(最大50件)
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                      法人規模5人以下
                  </li>
                </ul>
              </div>
              <div className="pricing__cta section__cta">
                <Link href="shop" className="btn btn--primary">
                  このプランを申込む
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="pricing__single topy-tilt fade-top">
              <div className="pricing__intro">
                <span className="primary-text premium">プレミアム</span>
                {isYearly ? (
                  <h2 className="light-title yearly">
                    ￥149,800
                    <span>/ yearly</span>
                  </h2>
                ) : (
                  <h2 className="light-title monthly">
                    ￥149,800
                    <span>/ 月</span>
                  </h2>
                )}
              </div>
              <hr />
              <div className="pricing__content">
                <ul>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    画像生成から資料作成まで
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    基本的なカスタマーサポート。
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    日/(最大100件)
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    法人規模15人以下
                  </li>
                </ul>
              </div>
              <div className="pricing__cta section__cta">
                <Link href="shop" className="btn btn--secondary">
                  このプランを申込む
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlanSeven;
