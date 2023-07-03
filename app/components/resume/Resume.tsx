import SectionHeader from "@/app/util/ui/SectionHeader/SectionHeader";
import React from "react";
import { Experience, Language as Language_type } from "@/app/util/Types/types";
import List_container from "./components/experiences_educations/List_container";
import Languages from "./components/language/Languages";
interface Props {
  educations: Experience[];
  work_experiences: Experience[];
  fluent_languages: Language_type[];
}
const Resume = (props: Props) => {
  return (
    <div className="main-resume">
      <SectionHeader tag="resume" tittle="رزومه" description="" />
      <div className="main-resume-container">
        <div className="main-resume-experiences">
          <List_container experience={props.educations} header="سوابق تحصیلی" />
          <List_container
            experience={props.work_experiences}
            header="سوابق شغلی"
          />
        </div>

        <Languages languages={props.fluent_languages} />
      </div>
    </div>
  );
};

export default Resume;
