import { CV } from "./util/types";
import ASide from "./components/aside/ASide";
import Main from "./components/main/Main";
import Menu from "./components/menu/Menu";
import { getStatixCv } from "./api/myCv/static/helper";
import { promises as fs } from "fs";

import path from "path";

async function getData() {
  const jsonDirectory = path.join(process.cwd(), "json");
  const fileContents = await fs.readFile(
    jsonDirectory + "/all-in-one.json",
    "utf8"
  );
  const response = { status: 200, cv: fileContents };
  return response;
}

export default async function Page() {
  const request = await getData();
  const cv: CV = JSON.parse(request.cv);
  console.log(request);
  return (
    <div className="cv">
      <Menu />
      <ASide personalInfo={cv.personal_info} />
      <div className="mr-auto ml-auto">
        <Main cv={cv} />
      </div>
    </div>
  );
}
