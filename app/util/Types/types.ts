export enum OpenToggle {
  open,
  close,
}

export enum Status {
  loading = "loading",
  error = "error",
  success = "success",
  warning = "warning",
  info = "info",
  null = "null",
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

export interface Nav_link {
  id: string;
  tittle: string;
  tag: string;
  icon: string;
  component: string;
  headline: string;
}

export interface About_base_labels {
  mobile: string;
  residence: string;
  marital_status: string;
  age: string;
  email: string;
  degree: string;
  military_service: string;
  get_project: string;
}
export interface About_base {
  section_tittle: string;
  tittle: string;
  labels: About_base_labels;
}

export interface Skills_base {
  section_tittle: "skills";
}

export interface Resume_base_labels {
  educations: string;
  work_experiences: string;
  language: string;
}
export interface Resume_base {
  section_tittle: string;
  labels: Resume_base_labels;
}

export interface Portfolio_base_labels {
  all: string;
}
export interface Portfolio_base {
  section_tittle: string;
  labels: Portfolio_base_labels;
}
export interface Form_base_place_holders {
  name: string;
  email: string;
  message: string;
}
export interface Form_base_error_messages {
  name: string;
  email: string;
  message: string;
}
export interface Form_base_buttons {
  send: string;
  sending: string;
}
export interface Form_base_notifs_card {
  success: Notif_card;
  loading: Notif_card;
  error: Notif_card;
}
export interface Form_base {
  place_holders: Form_base_place_holders;
  error_messages: Form_base_error_messages;
  buttons: Form_base_buttons;
  notif_card: Form_base_notifs_card;
}

export interface Contact_base_labels {
  email: string;
  mobile: string;
  telegram: string;
}
export interface Contact_base {
  section_tittle: string;
  labels: Contact_base_labels;
  form: Form_base;
}
export interface Notif_card {
  status: string;
  tittle: string;
  message: string;
}
export interface BASE {
  nav_links: Nav_link[];
  about_base: About_base;
  skills_base: Skills_base;
  resume_base: Resume_base;
  portfolio_base: Portfolio_base;
  contact_base: Contact_base;
}
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
  expertise: Expertise[];
  job_info: Jobs_info;
  get_project: Get_project;
  social_medias: Social_media[];
  about_me: About_me;
}
export interface Resume {
  educations: Experience[];
  work_experiences: Experience[];
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

export interface All_Data {
  cv: CV;
  base: BASE;
}
