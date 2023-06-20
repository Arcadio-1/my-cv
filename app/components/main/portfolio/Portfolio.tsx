"use client";
import SectionHeader from "@/app/util/ui/SectionHeader";
import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import List from "./components/List";
import { Group, Portfolio } from "@/app/util/types";
interface Props {
  portfolios: Portfolio[];
}

const Portfolio = (props: Props) => {
  const { portfolios } = props;

  const [filters, setFilters] = useState<Group[]>();
  const [filter, setFilter] = useState<Group>(Group.all);

  const filterHandler = (group: Group) => {
    setFilter((prev) => {
      return (prev = group);
    });
  };

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  useEffect(() => {
    const tempArry: Group[] = [];
    portfolios.map((item) => {
      tempArry.push(item.group);
    });
    setFilters((prev) => {
      return (prev = [...new Set(tempArry)]);
    });
  }, [portfolios]);

  return (
    <div className="main-portfolio">
      <SectionHeader tittle="نمونه کار ها" description="" />
      <div className="main-portfolio-container">
        {filters && (
          <Filter filters={filters} onFilter={filterHandler} filter={filter} />
        )}
        <List portfolios={props.portfolios} filter={filter} />
      </div>
    </div>
  );
};

export default Portfolio;
