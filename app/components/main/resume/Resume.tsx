import SectionHeader from "@/app/util/ui/SectionHeader";
import React from "react";
import { Experience, Language } from "@/app/util/types";
import Experience_component from "./components/Experience";
import Language_component from "./components/Language";
interface Props {
  educations: Experience[];
  work_experiences: Experience[];
  fluent_languages: Language[];
}
const Resume = (props: Props) => {
  return (
    <div className="main-resume">
      <SectionHeader tittle="رزومه" description="" />
      <div className="main-resume-container">
        <div className="main-resume-experiences">
          <Experience_component
            experience={props.educations}
            header="سوابق تحصیلی"
          />
          <Experience_component
            experience={props.work_experiences}
            header="سوابق شغلی"
          />
        </div>

        <Language_component languages={props.fluent_languages} />
      </div>
    </div>
  );
};

export default Resume;
