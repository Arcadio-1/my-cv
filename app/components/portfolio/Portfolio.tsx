"use client";
import SectionHeader from "@/app/util/ui/SectionHeader/SectionHeader";
import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import List from "./components/List";
import {
  Group,
  InView,
  Portfolio,
  Portfolio_base,
} from "@/app/util/Types/types";
import useScrollSpy from "@/app/util/Hooks/UseScrollSpy";
interface Props {
  portfolios: Portfolio[];
  base: Portfolio_base;
}

const Portfolio = (props: Props) => {
  const { portfolios } = props;
  const { ref } = useScrollSpy(InView.portfolio);

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
    <div className="main-portfolio" ref={ref}>
      <SectionHeader
        tag="portfolio"
        tittle={props.base.section_tittle}
        description=""
      />
      <div className="main-portfolio-container">
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
