import { AiFillStar } from 'react-icons/ai';

const testimonial = {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  icon: AiFillStar,
  fields: [
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'author',
      subtitle: 'quote',
    },
  },
};

export default testimonial;
