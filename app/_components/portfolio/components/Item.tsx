import Image from "next/image";
import React, { Fragment } from "react";
// import MonitorIcon from "./icons/MonitorIcon";
import GithubIcon from "./icons/GithubIcon";
import DownloadIcon from "./icons/DownloadIcon";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { useEffect } from "react";
import Link from "next/link";
import { Portfolio, Portfolio_base_buttons_titles } from "@/util/Types/types";
interface Props {
  portfolio: Portfolio;
  buttons_titles: Portfolio_base_buttons_titles;
}

const Item = ({ buttons_titles, portfolio }: Props) => {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#my_test_gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      // lightbox = null;
    };
  }, []);
  const images = portfolio.images.map((image) => {
    return {
      largeURL: image,
      thumbnailURL: image,
      width: 800,
      height: 800,
    };
  });
  // useEffect(() => {
  //   console.log(images);
  // }, [images]);

  return (
    <Fragment>
      <div className="content">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={"auto"}
          id="my_test_gallery"
          className=""
          navigation
          pagination={{
            dynamicBullets: true,
          }}
        >
          {images.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <a
                  href={image.largeURL}
                  key={"my_test_gallery" + "-" + index}
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                  data-pswp-width={image.width}
                  data-pswp-height={image.height}
                >
                  <div className="slide">
                    <p className="slide_tittle text-gray-900 dark:text-slate-200">
                      {portfolio.tittle}
                    </p>

                    <div className="slide_imageContainer">
                      <Image
                        src={image.largeURL}
                        width={300}
                        height={300}
                        alt={portfolio.tittle}
                      />
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="actions">
        {portfolio.deployed_link_1 && portfolio.deployed_link_2 && (
          <div className="actions_btn actions_deploy_container">
            <div
              className="actions_btn actions_deploy"
              title={buttons_titles.show_demo}
            >
              <Link target="_blank" href={portfolio.deployed_link_2}>
                <Image
                  src={"/portfolio/development/netlify.png"}
                  height={30}
                  width={80}
                  alt="netlify"
                />
                {/* <MonitorIcon /> */}
              </Link>
            </div>
            <div
              className="actions_btn actions_deploy"
              title={buttons_titles.show_demo}
            >
              <Link target="_blank" href={portfolio.deployed_link_1}>
                <Image
                  src={"/portfolio/development/vercel.png"}
                  height={30}
                  width={80}
                  alt="vercel"
                />
                {/* <MonitorIcon /> */}
              </Link>
            </div>
          </div>
        )}
        {portfolio.repo_link && (
          <div
            className="actions_btn actions_repo"
            title={buttons_titles.show_codes}
          >
            <Link target="_blank" href={portfolio.repo_link}>
              <GithubIcon />
            </Link>
          </div>
        )}
        {portfolio.download_link && (
          <div
            className="actions_btn actions_pdf"
            title={buttons_titles.download_pdf}
          >
            <a target="_blank" href={portfolio.download_link}>
              <DownloadIcon />
            </a>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Item;
