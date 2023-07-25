import Image from "next/image";
import React from "react";

interface Props {
  profile_image: string;
}

const ProfileImage = (props: Props) => {
  return (
    <div className="aside-header-image">
      <Image
        src={props.profile_image}
        width={140}
        height={140}
        alt="skandari"
      />
    </div>
  );
};

export default ProfileImage;
