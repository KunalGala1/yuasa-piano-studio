import { defineField } from 'sanity';
import { BiBook } from 'react-icons/bi';

const lessonsInfo = {
  name: 'lessonsInfo',
  title: 'Lessons Information',
  type: 'document',
  icon: BiBook,
  fields: [
    // Introduction and Philosophy
    {
      name: 'introductionAndPhilosophy',
      title: 'Introduction and Philosophy',
      type: 'array',
      of: [{ type: 'block' }],
    },
    // Location
    {
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        {
          name: 'description',
          title: 'Description',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          name: 'options',
          title: 'Options',
          type: 'array',
          of: [{ type: 'string' }],
        },
      ],
    },
    // Age & Ability
    {
      name: 'ageAbility',
      title: 'Age & Ability',
      type: 'array',
      of: [{ type: 'block' }],
    },
    // Rates
    {
      name: 'rates',
      title: 'Rates',
      type: 'array',
      of: [{ type: 'block' }],
    },
    // Subjects
    {
      name: 'subjects',
      title: 'Subjects',
      type: 'object',
      fields: [
        {
          name: 'description',
          title: 'Description',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          name: 'options',
          title: 'Options',
          type: 'array',
          of: [{ type: 'string' }],
        },
      ],
    },
    // Piano Lessons for Kids
    {
      name: 'pianoLessonsKids',
      title: 'Piano Lessons for Kids',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        {
          name: 'whatsIncluded',
          title: "What's Included",
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'fourToSix',
          title: '4 to 6 Year Olds',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          name: 'sevenToTen',
          title: '7 to 10 Year Olds',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          name: 'elevenToThirteen',
          title: '11 to 13 Year Olds',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          name: 'fourteenPlus',
          title: '14+',
          type: 'array',
          of: [{ type: 'block' }],
        },
      ],
    },
    // Piano Lessons for Adults
    {
      name: 'pianoLessonsAdults',
      title: 'Piano Lessons for Adults',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        {
          name: 'whatsIncluded',
          title: "What's Included",
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'beginner',
          title: 'Beginner',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          name: 'intermediate',
          title: 'Intermediate',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          name: 'advanced',
          title: 'Advanced',
          type: 'array',
          of: [{ type: 'block' }],
        },
      ],
    },
  ],
};

export default lessonsInfo;
