import { defineField } from 'sanity';
import { BiUser } from 'react-icons/bi';

const profile = {
  name: 'profile',
  title: 'Profile',
  type: 'document',
  icon: BiUser,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'A short description of yourself',
    }),
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'A picture of yourself',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alternative Text', type: 'string' }],
    },
    {
      name: 'shortBio',
      title: 'Short Bio',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'fullBio',
      title: 'Full Bio',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    // Education section
    {
      name: 'education',
      title: 'Education',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'details',
          title: 'Details',
          type: 'array',
          of: [{ type: 'block' }],
        },
      ],
    },
    // Teaching section
    {
      name: 'teaching',
      title: 'Teaching',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'details',
          title: 'Details',
          type: 'array',
          of: [{ type: 'block' }],
        },
      ],
    },
  ],
};

export default profile;
