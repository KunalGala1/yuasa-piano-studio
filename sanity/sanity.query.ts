import { groq } from 'next-sanity';
import client from './sanity.client';

export const getProfile = async () => {
  return client.fetch(
    groq`*[_type == 'profile'][0]{
              _id,
              name,
              headline,
              image {alt, "image": asset->url},
              shortBio,
              fullBio,
              education {title, details},
              teaching {title, details}
          }`
  );
};

export const getTestimonials = async () => {
  return client.fetch(
    groq`*[_type == 'testimonial']{
          _id,
              quote,
              author
          }`
  );
};

export const getLessonsInfo = async () => {
  return client.fetch(
    groq`*[_type == 'lessonsInfo'][0]{
            _id,
            introductionAndPhilosophy,
            location {
              description,
              options
            },
            ageAbility,
            rates,
            subjects {
              description,
              options
            },
            pianoLessonsKids {
              title,
              whatsIncluded,
              fourToSix,
              sevenToTen,
              elevenToThirteen,
              fourteenPlus
            },
            pianoLessonsAdults {
              title,
              whatsIncluded,
              beginner,
              intermediate,
              advanced
            }
        }`
  );
};
