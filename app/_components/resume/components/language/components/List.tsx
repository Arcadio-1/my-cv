import { Language } from "@/util/Types/types";
import React from "react";
import Item from "./Item";

interface Props {
  languages: Language[];
}

const List = (props: Props) => {
  return (
    <div className="list">
      {props.languages.map((item) => {
        return <Item key={item.id} language={item} />;
      })}
    </div>
  );
};

export default List;
