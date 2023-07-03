import { CV } from "./util/Types/types";
import ASide from "./util/ui/aside/ASide";
import Menu from "./util/ui/menu/Menu";
import { promises as fs } from "fs";
import path from "path";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

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
  return (
    <div className="cv">
      <Menu />
      <ASide personalInfo={cv.personal_info} />
      <div className="mr-auto ml-auto">
        <main className="main">
          <Hero
            name={cv.personal_info.name}
            lastname={cv.personal_info.lastName}
            hero_image={cv.personal_info.hero_image}
            expertise={cv.personal_info.expertise}
          />
          <div className="max-w-[1678px] w-full mb-10">
            <About personal_info={cv.personal_info} />
            <Skills skills={cv.resume.skills} />
            <Resume
              educations={cv.resume.educations}
              work_experiences={cv.resume.work_experiences}
              fluent_languages={cv.resume.fluent_languages}
            />
            <Portfolio portfolios={cv.resume.portfolios} />
            <Contact
              mobile={cv.personal_info.mobile}
              email={cv.personal_info.email}
              telegram={cv.personal_info.telegram}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
