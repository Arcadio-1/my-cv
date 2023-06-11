import React from "react";
import List from "./List";
import { Social_media } from "@/app/util/types";

interface Props {
  social_medias: Social_media[];
}

const SocialLinks = (props: Props) => {
  return (
    <div>
      <List items={props.social_medias} />
    </div>
  );
};

export default SocialLinks;
