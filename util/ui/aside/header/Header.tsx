import React from "react";
import ProfileImage from "./components/profileImage/ProfileImage";
import Fullname from "./components/fullname/Fullname";
import SocialLinks from "./components/socialLink/SocialLinks";
import { CV, Personal_info } from "@/util/Types/types";
import { useAppSelector } from "@/redux/hook";

interface Props {
  personalInfo: Personal_info;
}

const Header = (props: Props) => {
  const { personalInfo } = props;
  // const server_cv = useAppSelector<CV>(
  //   (state: any) => state.getData.my_cv_server
  // );
  return (
    <header className="aside_header">
      <ProfileImage profile_image={personalInfo.profile_iamge} />
      <Fullname
        name={personalInfo.name}
        lastname={personalInfo.lastName}
        nickname={personalInfo.nickname}
      />
      <SocialLinks social_medias={personalInfo.social_medias} />
    </header>
  );
};

export default Header;
