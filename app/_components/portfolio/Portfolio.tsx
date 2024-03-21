"use client";
import SectionHeader from "@/util/ui/SectionHeader/SectionHeader";
import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import List from "./components/List";
import {
  Group,
  Portfolio as TPortfolio,
  Portfolio_base,
} from "@/util/Types/types";
interface Props {
  portfolios: TPortfolio[];
  base: Portfolio_base;
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
    const tempArry: Group[] = [];
    portfolios.map((item) => {
      tempArry.push(item.group);
    });
    setFilters((prev) => {
      return (prev = [...new Set(tempArry)]);
    });
  }, [portfolios]);

  return (
    <div className="main_portfolio">
      <SectionHeader
        tag="portfolio"
        tittle={props.base.section_tittle}
        description=""
      />
      <div className="main_portfolio_container">
        {filters && (
          <Filter
            label={props.base.labels.all}
            filters={filters}
            onFilter={filterHandler}
            filter={filter}
          />
        )}
        <List
          portfolios={props.portfolios}
          filter={filter}
          itemsTitle={props.base.buttons_titles}
        />
      </div>
    </div>
  );
};

export default Portfolio;
