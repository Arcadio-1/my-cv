export enum Status {
  loading,
  error,
  success,
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
export interface Personal_info {
  profile_iamge: string;
  name: string;
  lastName: string;
  marital_status: Marital_status;
  dateOfBirth: string;
  email: string;
  mobile: number;
  gender: Gender;
  military_service: Military_service;
  residence: string;
  age: number;
  degree: string;
  get_project: Get_project;
}
export interface Education {
  tittle: string;
  university: string;
  since: number;
  to: number;
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
export interface Personal_info_2 {
  expertise: Expertise[];
  educations: Education[];
  social_medias: Social_media[];
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
  tittle: string;
  link: string;
  id: number;
}
export type Portfolios = Portfolio[];
export type Github_link = string;
export interface Work_experience {
  tittle: string;
  compony: string;
  since: Date;
  to: Date;
  position: string;
}
export type Work_experiences = Work_experience[];
export interface Skill {
  tittle: string;
  level: number;
  id: string;
  icon_img: string;
  icon_icon: string;
}

export type Skills = Skill[];

export interface Language {
  tittle: string;
  level: number;
}
export type Hero_image = string;
export type Fluent_languages = Language[];
export interface CV {
  personal_info: Personal_info;
  personal_info_2: Personal_info_2;
  job_info: Jobs_info;
  motivation_quotes: Motivation_quote;
  about_me: About_me;
  portfolios: Portfolios;
  github_link: Github_link;
  work_experience: Work_experiences;
  skills: Skills;
  fluent_languages: Fluent_languages;
  hero_image: Hero_image;
}
