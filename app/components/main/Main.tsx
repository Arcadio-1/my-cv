import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import Skills from "./skills/Skills";
import Resume from "./resume/Resume";
import Portfolio from "./portfolio/Portfolio";
import Contact from "./contact/Contact";
import { CV } from "@/app/util/types";

interface Props {
  cv: CV;
}

const Main = (props: Props) => {
  const { personal_info, resume } = props.cv;
  return (
    <main className="main">
      <Hero
        name={personal_info.name}
        lastname={personal_info.lastName}
        hero_image={personal_info.hero_image}
        expertise={personal_info.expertise}
      />
      <div className="max-w-[1678px] w-full mb-10">
        <About personal_info={personal_info} />
        <Skills skills={resume.skills} />
        <Resume
          educations={resume.educations}
          work_experiences={resume.work_experiences}
          fluent_languages={resume.fluent_languages}
        />
        <Portfolio portfolios={resume.portfolios} />
        <Contact
          mobile={personal_info.mobile}
          email={personal_info.email}
          telegram={personal_info.telegram}
        />
      </div>
    </main>
  );
};

export default Main;
