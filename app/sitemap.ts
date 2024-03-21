import { BASE_URL } from "@/util/constants/constants";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/searc`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/tools`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/drink`,
      lastModified: new Date(),
    },
  ];
}
