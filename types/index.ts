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
};

export type TestimonialType = {
  _id: string;
  quote: string;
  author: string;
};
