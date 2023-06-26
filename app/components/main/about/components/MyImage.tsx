import Image from "next/image";
import React from "react";
interface Props {
  imageUrl: string;
  alt: string;
}
const MyImage = (props: Props) => {
  return (
    <div className="main-about-image">
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
