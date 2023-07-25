import { All_Data, Lang } from "../../util/Types/types";
import { promises as fs } from "fs";
import path, { join } from "path";
import Home_page from "../_components/Home_page";
import matter from "gray-matter";

async function getData() {
  const jsonDirectory = path.join(process.cwd(), "json");
  const fileContents = await fs.readFile(
    jsonDirectory + "/DATA_en.json",
    "utf8"
  );

  const directory = path.join(process.cwd(), "markdown");
  const fullPath = join(directory, `about_en.md`);
  const mdContents = await fs.readFile(fullPath, "utf8");
  const { data, content } = matter(mdContents);
  // const response = { status: 200, data: content };

  const response = { status: 200, cv: fileContents, aboutMd: content };
  return response;
}

const page = async () => {
  const request = await getData();
  const DataJson: All_Data = JSON.parse(request.cv);
  const DataMd: string = request.aboutMd;
  return (
    <Home_page
      lang={Lang.en}
      base={DataJson.base}
      personal_info={DataJson.cv.personal_info}
      resume={DataJson.cv.resume}
      about={DataMd}
    />
  );
};

export default page;
