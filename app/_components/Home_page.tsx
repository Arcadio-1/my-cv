"use client";
import React, { useState, useEffect } from "react";
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
import { transform } from "typescript";
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
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  useEffect(() => {
    setIsLoading(false);
    const localTheme = localStorage.getItem("theme");
    try {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: light)").matches &&
        !localTheme
      ) {
        localStorage.setItem("theme", "light");
        return setTheme(Theme.Light);
      }
      if (!localTheme) {
        localStorage.setItem("theme", "dark");
        return setTheme(Theme.Dark);
      }
      if (localTheme === "light") {
        return setTheme(Theme.Light);
      }
      if (localTheme === "dark") {
        return setTheme(Theme.Dark);
      }
    } catch {
      setIsLoading(false);
      console.log("this should never happened :((((((((((");
    }
  }, []);
  // console.log(style);

  const changeThemeHandler = () => {
    if (theme === Theme.Dark) {
      localStorage.setItem("theme", "light");
      return setTheme((prev) => {
        return (prev = Theme.Light);
      });
    }
    return setTheme((prev) => {
      localStorage.setItem("theme", "dark");
      return (prev = Theme.Dark);
    });
  };

  return (
    <>
      {isLoading ? (
        <div className="grid h-screen place-items-center p-5 bg-gray-500">
          <div className="flex items-center p-4 justify-center h-1/2 bg-gray-600 rounded-lg w-full max-w-lg max-h-64 gap-5">
            <svg
              aria-hidden="true"
              className="inline w-20 h-20 mr-2 text-gray-200 animate-spin  fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <h1 className="text-3xl text-gray-50">Loading...</h1>
          </div>
        </div>
      ) : (
        <div
          className={`cv ${theme === Theme.Light ? `cv_lighter` : "dark"} ${
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
      )}
    </>
  );
};

export default Home_page;
