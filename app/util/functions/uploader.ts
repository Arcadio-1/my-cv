"use client";
// import handler from "@/app/api/util/helperAPI/jsonUploader";
import getFromJson from "./jsonReader";

const uploadHandler = async () => {
  const data = await getFromJson("all-in-one.json");
  // handler
  // console.log(data);
  const request = await fetch("/api/util/helperAPI/jsonUploader", {
    method: "POST",
    body: JSON.stringify({
      items: data,
      serverName: "main",
      collectionName: "my-cv",
    }),
    headers: { "Content-Type": "application/json" },
  });
  const respose = await request.json();
  // console.log(respose);
};
export default uploadHandler;
