'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Nav from './Nav';
import Burger from './Burger';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const smoothScrollToTop = (duration: number): void => {
    const scrollToTop = (startTime: number): void => {
      const currentTime = Date.now();
      const timeElapsed = currentTime - startTime;
      const scrollY = window.scrollY;

      if (timeElapsed < duration) {
        window.scrollTo(0, scrollY - scrollY * (timeElapsed / duration));
        requestAnimationFrame(() => scrollToTop(startTime));
      } else {
        window.scrollTo(0, 0);
      }
    };

    requestAnimationFrame(() => scrollToTop(Date.now()));
  };

  const toggleOpen = () => {
    const currentScrollY = window.scrollY;
    const scrollDuration =
      currentScrollY > 0 ? Math.min(300, currentScrollY * 5) : 0;

    smoothScrollToTop(scrollDuration);

    setTimeout(() => {
      setIsOpen(!isOpen);

      if (!isOpen) {
        // Disable scrolling
        document.body.style.overflow = 'hidden';
      } else {
        // Enable scrolling
        document.body.style.overflow = '';
      }
    }, scrollDuration);
  };

  const closeNav = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

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
