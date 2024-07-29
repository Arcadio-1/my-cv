import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  profile_image: string;
}

const ProfileImage = (props: Props) => {
  return (
    <div className="aside_header_image">
      <Link href={"/"}>
        <Image
          src={props.profile_image}
          width={140}
          height={140}
          title="hossein skandari front-end"
          alt="hossein skandari"
        />
      </Link>
    </div>
  );
};

export default ProfileImage;
