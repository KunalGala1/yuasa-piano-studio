// import { groq } from 'next-sanity';
// import client from './sanity.client';

// export const getProfile = async () => {
//   return client.fetch(
//     groq`*[_type == 'profile'][0]{
//             _id,
//             name,
//             headline,
//             image {alt, "image": asset->url},
//             shortBio,
//             fullBio
//         }`
//   );
// };

// export const getRecordings = async () => {
//   return client.fetch(
//     groq`*[_type == 'recording']{
//       _id,
//       title,
//       subtitle,
//       soundcloudId
//     }`
//   );
// };
