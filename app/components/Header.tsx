'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Nav from './Nav';
import Burger from './Burger';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const closeNav = () => setIsOpen(false);

  return (
    <header className='h-[100px] p-4 shadow bg-white'>
      <div className='h-full flex justify-between md:justify-start md:gap-8 items-center max-w-6xl mx-auto'>
        {/* Logo */}
        <div className='h-full'>
          <Link href={'/'} className='block h-full'>
            <Image
              src={'/logo.svg'}
              alt='Logo'
              width={100}
              height={100}
              className='h-full w-full'
            />
          </Link>
        </div>
        <Nav isOpen={isOpen} toggleOpen={toggleOpen} closeNav={closeNav} />
        <Burger isOpen={isOpen} toggleOpen={toggleOpen} />
      </div>
    </header>
  );
};
export default Header;
