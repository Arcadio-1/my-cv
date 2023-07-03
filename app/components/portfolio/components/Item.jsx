import { Portfolio } from "@/app/util/Types/types";
import Image from "next/image";
import React, { Fragment } from "react";
import Monitor from "./icons/Monitor";
import Github from "./icons/Github";
import Download from "./icons/Download";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

// import PhotoSwipeLightbox from "photoswipe/dist/types/lightbox/lightbox";
// import { PhotoSwipeLightbox } from "photoswipe/dist/types/core/eventable";

// import PhotoSwipeLightbox from "photoswipe/lightbox";
import PhotoSwipeLightbox from "photoswipe/lightbox";

// import { PhotoSwipeLightbox } from "photoswipe/dist/photoswipe-lightbox";
// import PhotoSwipeLightbox from "photoswipe/dist/photoswipe-lightbox.esm.js";
// import Lightbox from "./photoswipe-lightbox.esm.js";

// import PhotoSwipeLightbox from "photoswipe/dist/types/lightbox/lightbox";
// import { PhotoSwipeLightbox } from "photoswipe/dist/types/core/eventable";

// import { PhotoSwipe } from "photoswipe";
// import { PhotoSwipeUI_Default } from "photoswipe/dist/photoswipe-ui-default";

import "photoswipe/style.css";
import { useEffect } from "react";
import Link from "next/link";
// interface Props {
//   portfolio: Portfolio;
// }
const Item = (props) => {
  const { portfolio } = props;

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#my-test-gallery",
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
      <div className="prevImage">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={"auto"}
          id="my-test-gallery"
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
                  key={"my-test-gallery" + "-" + index}
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                  data-pswp-width={image.width}
                  data-pswp-height={image.height}
                >
                  <div className="slide">
                    <p className="slide-tittle">{portfolio.tittle}</p>

                    <div className="slide-imageContainer">
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
        {portfolio.deployed_link && (
          <div className="actions-btn actions-deploy" title="مشاهده دمو">
            <Link target="_blank" href={portfolio.deployed_link}>
              <Monitor />
            </Link>
          </div>
        )}
        {portfolio.repo_link && (
          <div className="actions-btn actions-repo" title="مشاهده کد">
            <Link target="_blank" href={portfolio.repo_link}>
              <Github />
            </Link>
          </div>
        )}
        {portfolio.download_link && (
          <div className="actions-btn actions-pdf" title="دانلود">
            <Link target="_self" href={portfolio.download_link}>
              <Download />
            </Link>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Item;
