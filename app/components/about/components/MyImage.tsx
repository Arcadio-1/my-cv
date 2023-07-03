"use client";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";
interface Props {
  imageUrl: string;
  alt: string;
}
const MyImage = (props: Props) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`main-about-image  ${
        inView ? "main-about-image-animator" : ""
      }`}
    >
      <Image
        className="object-cover"
        src={props.imageUrl}
        width={500}
        height={500}
        alt={props.alt}
      />
    </div>
  );
};

export default MyImage;
