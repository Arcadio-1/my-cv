export enum OpenToggle {
  open,
  close,
}

export enum Status {
  loading,
  error,
  success,
}
export enum Group {
  all,
  develop,
  design,
}
export interface Full_status {
  status: Status;
  tittle: string;
  message: string;
}

export enum Marital_status {
  single,
  married,
}
export enum Gender {
  male,
  female,
  other,
}
export enum Military_service {
  education,
  serving,
  included,
  Exemption,
  served,
}
export enum Contracts {
  full_time,
  part_time,
}
export enum Get_project {
  Active,
  Deactive,
}
export interface Experience {
  id: string;
  tittle: string;
  place: string;
  since: string;
  to: string;
}
export interface Expertise {
  id: number;
  tittle: string;
  message: string;
}
export interface Social_media {
  id: string;
  tittle: string;
  url: string;
  icon: string;
}

export interface Contract {
  id: number;
  tittle: Contracts;
}
export interface Jobs_info {
  contracts: Contract[];
}

export interface Motivation_quote {
  quote: string;
  by: string;
}

export type About_me = string;

export interface Portfolio {
  id: string;
  tittle: string;
  group: Group;
  tags: string[];
  prev_image: string;
  images: string[];
  deployed_link?: string;
  repo_link?: string;
  download_link?: string;
}
export type Github_link = string;

export interface Skill {
  tittle: string;
  level: number;
  id: string;
  icon_img: string;
  icon_icon: string;
}

export interface Language {
  id: string;
  tittle: string;
  level: number;
}
export type Hero_image = string;

export interface Personal_info {
  profile_iamge: string;
  profile_iamge_2: string;
  nickname: string;
  hero_image: Hero_image;
  name: string;
  lastName: string;
  marital_status: Marital_status;
  dateOfBirth: string;
  email: string;
  mobile: string;
  telegram: string;
  gender: Gender;
  military_service: Military_service;
  residence: string;
  age: number;
  degree: string;
  job_info: Jobs_info;
  get_project: Get_project;
  social_medias: Social_media[];
  about_me: About_me;
}
export interface Resume {
  educations: Experience[];
  work_experiences: Experience[];
  expertise: Expertise[];
  portfolios: Portfolio[];
  github_link: Github_link;
  skills: Skill[];
  motivation_quotes: Motivation_quote;
  fluent_languages: Language[];
}
export interface CV {
  personal_info: Personal_info;
  resume: Resume;
}
