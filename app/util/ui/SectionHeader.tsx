import React from "react";

interface Props {
  tittle: string;
  description: string;
}

const SectionHeader = (props: Props) => {
  const { tittle, description } = props;
  return (
    <div className="sectionHeader">
      <div className="sectionHeader-tittle">
        <h2>{tittle}</h2>
      </div>
      <div className="sectionHeader-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SectionHeader;
