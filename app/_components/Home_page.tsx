"use client";
import React, { useState } from "react";
import {
  BASE,
  Lang,
  Personal_info,
  Theme,
  Resume as resumeType,
} from "../../util/Types/types";
import ASide from "../../util/ui/aside/ASide";
import Menu from "../../util/ui/menu/Menu";
import Hero from "./hero/Hero";
import About from "./about/About";
import Skills from "./skills/Skills";
import Resume from "./resume/Resume";
import Portfolio from "./portfolio/Portfolio";
import Contact from "./contact/Contact";
import ControlerBox from "../../util/ui/controler/ControlerBox";
// import style from "./page.module.scss";
interface Props {
  personal_info: Personal_info;
  resume: resumeType;
  base: BASE;
  about: string;
  lang: Lang;
}

const Home_page = (props: Props) => {
  const { personal_info, resume, base, about, lang } = props;
  const [theme, setTheme] = useState<Theme>(Theme.Dark);
  // console.log(style);

  const changeThemeHandler = () => {
    if (theme === Theme.Dark) {
      return setTheme((prev) => {
        return (prev = Theme.Light);
      });
    }
    return setTheme((prev) => {
      return (prev = Theme.Dark);
    });
  };

  return (
    <div
      className={`cv ${theme === Theme.Light ? `cv_lighter` : ""}  ${
        lang === Lang.en ? `cv_en` : ""
      }`}
    >
      <div className="controler_container">
        <ControlerBox
          lang={lang}
          onChangeTheme={changeThemeHandler}
          theme={theme}
        />
      </div>
      <Menu lang={lang} onChangeTheme={changeThemeHandler} theme={theme} />
      <ASide
        personalInfo={personal_info}
        navLinks={base.nav_links}
        lang={lang}
        theme={theme}
      />
      <div className="mr-auto ml-auto">
        <main className="main">
          <Hero
            base={base.hero_base}
            theme={theme}
            lang={lang}
            name={personal_info.name}
            lastname={personal_info.lastName}
            resumePdf={personal_info.resume_pdf}
            resumePng={personal_info.resume_png}
            hero_image_dark={personal_info.hero_image_dark}
            hero_image_light={personal_info.hero_image_light}
            expertise={personal_info.expertise}
          />
          <div className="max-w-[1280px] w-full mb-10">
            <About
              lang={lang}
              theme={theme}
              about={about}
              base={base.about_base}
              personal_info={personal_info}
            />
            <Skills base={base.skills_base} skills={resume.skills} />
            <Resume
              base={base.resume_base}
              educations={resume.educations}
              work_experiences={resume.work_experiences}
              fluent_languages={resume.fluent_languages}
            />
            <Portfolio
              base={base.portfolio_base}
              portfolios={resume.portfolios}
            />
            <Contact
              theme={theme}
              lang={lang}
              base={base.contact_base}
              mobile={personal_info.mobile}
              email={personal_info.email}
              telegram={personal_info.telegram}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home_page;
