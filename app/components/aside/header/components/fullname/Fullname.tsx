import React from "react";

interface Props {
  name: string;
  lastname: string;
}

const Fullname = (props: Props) => {
  return (
    <div className="aside-header-fullname">
      <h1>{`${props.name} ${props.lastname} `}</h1>
    </div>
  );
};

export default Fullname;
