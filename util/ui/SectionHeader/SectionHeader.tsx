"use client";
import React from "react";

interface Props {
  title: string;
  description: string;
  tag?: string;
}

const SectionHeader = (props: Props) => {
  const { title, description, tag } = props;
  return (
    <div className="sectionHeader" id={tag}>
      <div className="sectionHeader_title">
        <h2>{title}</h2>
      </div>
      <div className="sectionHeader_description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SectionHeader;
