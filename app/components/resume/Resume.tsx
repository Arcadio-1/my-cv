import SectionHeader from "@/app/util/ui/SectionHeader/SectionHeader";
import React from "react";
import {
  Experience,
  InView,
  Language as Language_type,
  Resume_base,
} from "@/app/util/Types/types";
import List_container from "./components/experiences_educations/List_container";
import Languages from "./components/language/Languages";
import useScrollSpy from "@/app/util/Hooks/UseScrollSpy";
interface Props {
  educations: Experience[];
  work_experiences: Experience[];
  fluent_languages: Language_type[];
  base: Resume_base;
}
const Resume = (props: Props) => {
  const { ref } = useScrollSpy(InView.resume, 0.2);

  return (
    <div className="main-resume">
      <SectionHeader
        tag="resume"
        tittle={props.base.section_tittle}
        description=""
      />
      <div className="main-resume-container" ref={ref}>
        <div className="main-resume-experiences">
          <List_container
            experience={props.educations}
            header={props.base.labels.work_experiences}
          />
          <List_container
            experience={props.work_experiences}
            header={props.base.labels.educations}
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
