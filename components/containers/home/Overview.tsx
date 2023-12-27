"use client";
import { useState } from "react";
import Image from "next/image";
import one from "@/public/images/overview/one.png";
import two from "@/public/images/overview/two.png";
import three from "@/public/images/overview/three.png";
import four from "@/public/images/overview/four.png";

const Overview = () => {
  const [isOverviewOpen, setOverviewOpen] = useState(0);

  return (
    <section className="section overview pb-0 ">
      <div className="container">
        <div className="row gaper fade-wrapper">
          <div className="col-12 col-md-6 col-xl-3 fade-top">
            <div
              className={
                "overview__single " +
                (isOverviewOpen === 0 ? " overview__single-active" : " ")
              }
              onMouseEnter={() => setOverviewOpen(0)}
            >
              <div className="overview__thumb">
                <Image src={one} alt="Image" priority />
              </div>
              <div className="overview__content">
                <h4>スムーズな AI ツール</h4>
                <p className="tertiary-text">
                  AI HANAKO は、AI ツールにてあらゆる要望を対応致します。
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3 fade-top">
            <div
              className={
                "overview__single " +
                (isOverviewOpen === 1 ? " overview__single-active" : " ")
              }
              onMouseEnter={() => setOverviewOpen(1)}
            >
              <div className="overview__thumb">
                <Image src={two} alt="Image" priority />
              </div>
              <div className="overview__content">
                <h4>AIで画像の生成</h4>
                <p className="tertiary-text">
                AI HANAKO は、AIにて理想の 画像を生成致します。
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3 fade-top">
            <div
              className={
                "overview__single " +
                (isOverviewOpen === 2 ? " overview__single-active" : " ")
              }
              onMouseEnter={() => setOverviewOpen(2)}
            >
              <div className="overview__thumb">
                <Image src={three} alt="Image" priority />
              </div>
              <div className="overview__content">
                <h4>オンラインでの依頼</h4>
                <p className="tertiary-text">
                  AI HANAKO  は、全てオンラインにて依頼が可能です。
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3 fade-top">
            <div
              className={
                "overview__single " +
                (isOverviewOpen === 3 ? " overview__single-active" : " ")
              }
              onMouseEnter={() => setOverviewOpen(3)}
            >
              <div className="overview__thumb">
                <Image src={four} alt="Image" priority />
              </div>
              <div className="overview__content">
                <h4>すべての業種・用途に</h4>
                <p className="tertiary-text">
                  AI HANAKO  は、全ての全ジャンルの業種に対応しております。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
