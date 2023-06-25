import React from "react";
import ProfileImage from "./components/profileImage/ProfileImage";
import Fullname from "./components/fullname/Fullname";
import SocialLinks from "./components/socialLink/SocialLinks";
import { CV } from "@/app/util/types";
import { useAppSelector } from "@/redux/hook";

const Header = () => {
  const server_cv = useAppSelector<CV>(
    (state: any) => state.getData.my_cv_server
  );
  return (
    <header className="aside-header">
      <ProfileImage profile_image={server_cv.personal_info.profile_iamge} />
      <Fullname
        name={server_cv.personal_info.name}
        lastname={server_cv.personal_info.lastName}
        nickname={server_cv.personal_info.nickname}
      />
      <SocialLinks social_medias={server_cv.personal_info.social_medias} />
    </header>
  );
};

export default Header;
