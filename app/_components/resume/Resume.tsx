import SectionHeader from "@/util/ui/SectionHeader/SectionHeader";
import React from "react";
import {
  Experience,
  Language as Language_type,
  Resume_base,
} from "@/util/Types/types";
import List_container from "./components/experiences_educations/List_container";
import Languages from "./components/language/Languages";
interface Props {
  educations: Experience[];
  work_experiences: Experience[];
  fluent_languages: Language_type[];
  base: Resume_base;
}
const Resume = (props: Props) => {
  return (
    <div className="main_resume">
      <SectionHeader
        tag="resume"
        tittle={props.base.section_tittle}
        description=""
      />
      <div className="main_resume_container">
        <div className="main_resume_experiences">
          <List_container
            experience={props.educations}
            header={props.base.labels.educations}
          />
          <List_container
            experience={props.work_experiences}
            header={props.base.labels.work_experiences}
          />
        </div>

        <Languages
          tittle={props.base.labels.language}
          languages={props.fluent_languages}
        />
      </div>
    </div>
  );
};

export default Resume;
