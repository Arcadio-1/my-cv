import { CV } from "./util/types";
import ASide from "./components/aside/ASide";
import Main from "./components/main/Main";
import Menu from "./components/menu/Menu";

async function getData() {
  const res = await fetch("http://localhost:3000/api/myCv/static");
  const data = await res.json();

  return data.data;
  // return JSON.parse(data.data);
}

export default async function Page() {
  const data = await getData();
  const dataaaa: CV = JSON.parse(data);
  // console.log(dataaaa);

  return (
    <div className="cv">
      <Menu />
      <ASide personalInfo={dataaaa.personal_info} />
      <div className="mr-auto ml-auto">
        <Main cv={dataaaa} />
      </div>
    </div>
  );
}
