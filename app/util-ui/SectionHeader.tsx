import React from "react";

interface Props {
  tittle: string;
  description: string;
}

const SectionHeader = (props: Props) => {
  const { tittle, description } = props;
  return (
    <div>
      <div>
        <h2>{tittle}</h2>
      </div>
      <div>{description}</div>
    </div>
  );
};

export default SectionHeader;
