import React from "react";

interface Props {
  name: string;
  lastname: string;
}

const Fullname = (props: Props) => {
  return (
    <div>
      <h2>{`${props.name} ${props.lastname} `}</h2>
    </div>
  );
};

export default Fullname;
