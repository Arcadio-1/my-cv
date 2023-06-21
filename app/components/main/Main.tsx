import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import Skills from "./skills/Skills";
import Resume from "./resume/Resume";
import Portfolio from "./portfolio/Portfolio";
import Contact from "./contact/Contact";
import { useSelector } from "react-redux";
import { CV } from "@/app/util/types";

const Main = () => {
  const server_cv: CV = useSelector((state: any) => state.getData.my_cv_server);
  const { personal_info, resume } = server_cv;
  return (
    <main className="main">
      <Hero
        name={personal_info.name}
        lastname={personal_info.lastName}
        hero_image={personal_info.hero_image}
        expertise={resume.expertise}
      />
      <div className="max-w-[1678px] w-full">
        <About personal_info={personal_info} />
        <Skills skills={resume.skills} />
        <Resume
          educations={resume.educations}
          work_experiences={resume.work_experiences}
          fluent_languages={resume.fluent_languages}
        />
        <Portfolio portfolios={resume.portfolios} />
        <Contact />
      </div>
    </main>
  );
};

export default Main;
