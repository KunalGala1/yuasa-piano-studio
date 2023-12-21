import { PortableTextBlock } from 'sanity';

export type ProfileType = {
  _id: string;
  name: string;
  headline: string;
  image: {
    alt: string;
    image: string;
  };
  shortBio: PortableTextBlock[];
  fullBio: PortableTextBlock[];
  education: {
    title: string;
    details: PortableTextBlock[];
  };
  teaching: {
    title: string;
    details: PortableTextBlock[];
  };
};

export type TestimonialType = {
  _id: string;
  quote: string;
  author: string;
};

export type LessonsInfoType = {
  _id: string;
  introductionAndPhilosophy: PortableTextBlock[];
  location: {
    description: PortableTextBlock[];
    options: string[];
  };
  ageAbility: PortableTextBlock[];
  rates: string;
  subjects: {
    description: PortableTextBlock[];
    options: string[];
  };
  pianoLessonsKids: {
    title: string;
    whatsIncluded: string[];
    fourToSix: PortableTextBlock[];
    sevenToTen: PortableTextBlock[];
    elevenToThirteen: PortableTextBlock[];
    fourteenPlus: PortableTextBlock[];
  };
  pianoLessonsAdults: {
    title: string;
    whatsIncluded: string[];
    beginner: PortableTextBlock[];
    intermediate: PortableTextBlock[];
    advanced: PortableTextBlock[];
  };
};
