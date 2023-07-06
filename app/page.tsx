import { All_Data } from "./util/Types/types";
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
    jsonDirectory + "/DATA_fr.json",
    "utf8"
  );
  const response = { status: 200, cv: fileContents };
  return response;
}

export default async function Page() {
  const request = await getData();
  const Data: All_Data = JSON.parse(request.cv);
  return (
    <div className="cv cv-lighter cv_lang">
      <Menu />
      <ASide
        personalInfo={Data.cv.personal_info}
        navLinks={Data.base.nav_links}
      />
      <div className="mr-auto ml-auto">
        <main className="main">
          <Hero
            name={Data.cv.personal_info.name}
            lastname={Data.cv.personal_info.lastName}
            hero_image_dark={Data.cv.personal_info.hero_image_dark}
            hero_image_light={Data.cv.personal_info.hero_image_light}
            expertise={Data.cv.personal_info.expertise}
          />
          <div className="max-w-[1280px] w-full mb-10">
            <About
              base={Data.base.about_base}
              personal_info={Data.cv.personal_info}
            />
            <Skills
              base={Data.base.skills_base}
              skills={Data.cv.resume.skills}
            />
            <Resume
              base={Data.base.resume_base}
              educations={Data.cv.resume.educations}
              work_experiences={Data.cv.resume.work_experiences}
              fluent_languages={Data.cv.resume.fluent_languages}
            />
            <Portfolio
              base={Data.base.portfolio_base}
              portfolios={Data.cv.resume.portfolios}
            />
            <Contact
              base={Data.base.contact_base}
              mobile={Data.cv.personal_info.mobile}
              email={Data.cv.personal_info.email}
              telegram={Data.cv.personal_info.telegram}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
