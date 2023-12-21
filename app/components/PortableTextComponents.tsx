// PortableTextComponents.tsx
import React from 'react';
import Link from 'next/link';
import MainText from './MainText'; // Adjust the import path as needed

interface BlockProps {
  children?: React.ReactNode;
}

interface LinkProps {
  value?: { href?: string };
  children: React.ReactNode;
}

// Define the components for PortableText
const PortableTextComponent = {
  block: {
    normal: ({ children }: BlockProps) => <MainText>{children}</MainText>,
  },
  marks: {
    link: ({ value, children }: LinkProps) => {
      const target = value?.href?.startsWith('http') ? '_blank' : undefined;

      return (
        <Link
          href={value?.href || '#'}
          className='text-linkColor'
          target={target}
        >
          {children}
        </Link>
      );
    },
  },
};

export default PortableTextComponent;
