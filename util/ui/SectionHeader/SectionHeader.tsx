"use client";
import React from "react";

interface Props {
  tittle: string;
  description: string;
  tag?: string;
}

const SectionHeader = (props: Props) => {
  const { tittle, description, tag } = props;
  return (
    <div className="sectionHeader" id={tag}>
      <div className="sectionHeader_tittle">
        <h2>{tittle}</h2>
      </div>
      <div className="sectionHeader_description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SectionHeader;
