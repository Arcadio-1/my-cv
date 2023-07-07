"use client";
import React, { useEffect } from "react";
import {
  BASE,
  Lang,
  Personal_info,
  Theme,
  Resume as resumeType,
} from "../util/Types/types";
import ASide from "../util/ui/aside/ASide";
import Menu from "../util/ui/menu/Menu";
import Hero from "./hero/Hero";
import About from "./about/About";
import Skills from "./skills/Skills";
import Resume from "./resume/Resume";
import Portfolio from "./portfolio/Portfolio";
import Contact from "./contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "@/redux/features/ui/uiSlice";
import ControlerBox from "../util/ui/controler/ControlerBox";
interface Props {
  personal_info: Personal_info;
  resume: resumeType;
  base: BASE;
  about: string;
  lang: Lang;
}

const Home_page = (props: Props) => {
  const { personal_info, resume, base, about, lang } = props;
  const dispatchTheme = useDispatch();
  const theme: Theme = useSelector((state: any) => state.ui.theme);

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  const changeThemeHandler = () => {
    if (theme === Theme.Dark) {
      return dispatchTheme(uiAction.setLight());
    }
    return dispatchTheme(uiAction.setDark());
  };

  return (
    <div
      className={`cv  ${theme === Theme.Light ? "cv-lighter" : ""}  ${
        lang === Lang.en ? "cv-en" : ""
      }`}
    >
      <ControlerBox
        lang={lang}
        onChangeTheme={changeThemeHandler}
        theme={theme}
      />
      <Menu />
      <ASide personalInfo={personal_info} navLinks={base.nav_links} />
      <div className="mr-auto ml-auto">
        <main className="main">
          <Hero
            theme={theme}
            lang={lang}
            name={personal_info.name}
            lastname={personal_info.lastName}
            hero_image_dark={personal_info.hero_image_dark}
            hero_image_light={personal_info.hero_image_light}
            expertise={personal_info.expertise}
          />
          <div className="max-w-[1280px] w-full mb-10">
            <About
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
