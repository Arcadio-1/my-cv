import React from "react";

interface Props {
  name: string;
  lastname: string;
  nickname: string;
}

const Fullname = (props: Props) => {
  return (
    <div className="aside-header-fullname">
      <h1 className="fullname">{`${props.name} ${props.lastname} `}</h1>
      <h1 className="nickName">Rkdo</h1>
    </div>
  );
};

export default Fullname;
