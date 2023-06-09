"use client";
import uploadHandler from "@/app/util/functions/uploader";
import { getCv } from "@/redux/features/getData/getDataAction";
import { AppDispatch } from "@/redux/store";
// import SectionHeader from "@/app/util/ui/SectionHeader";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSWR from "swr";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Hero = () => {
  const { data, error } = useSWR("/api/myCv/static", fetcher);
  //   useEffect(() => {
  //     const getDataer = async () => {
  //     const request = await fetch()
  //   }
  // },[])

  useEffect(() => {
    console.log(data);
  }, [data]);

  const dispatchCv: AppDispatch = useDispatch();
  // console.log(test);

  const my_cv = useSelector(
    (state: { getData: { my_cv: [any] } }) => state.getData.my_cv
  );

  useEffect(() => {
    dispatchCv(getCv());
  }, [dispatchCv]);
  return (
    <div>
      <p onClick={() => uploadHandler()}>upload Json</p>
    </div>
  );
};

export default Hero;
