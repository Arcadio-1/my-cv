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

  return (
    <main className="main">
      <Hero
        name={server_cv.personal_info.name}
        lastname={server_cv.personal_info.lastName}
        expertise={server_cv.personal_info_2.expertise}
        hero_image={server_cv.hero_image}
      />
      <About />
      <Skills />
      <Resume />
      <Portfolio />
      <Contact />
    </main>
  );
};

export default Main;
