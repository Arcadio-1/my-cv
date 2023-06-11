import Image from "next/image";
import React from "react";

interface Props {
  profile_image: string;
}

const ProfileImage = (props: Props) => {
  return (
    <div>
      <Image
        src={props.profile_image}
        width={100}
        height={100}
        alt="skandari"
      />
    </div>
  );
};

export default ProfileImage;
