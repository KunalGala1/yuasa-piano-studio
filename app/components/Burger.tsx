'use client';
import React, { useState } from 'react';

type BurgerProps = {
  isOpen: boolean;
  toggleOpen: () => void;
};

const Burger = ({ isOpen, toggleOpen }: BurgerProps) => {
  return (
    <div
      className={`group cursor-pointer space-y-1 transition z-20 md:hidden ${
        isOpen ? 'fixed right-4' : ''
      }`}
      onClick={toggleOpen}
    >
      <div
        className={
          'bg-gray-950 w-10 h-1 rounded transition group-hover:bg-gray-800' +
          (isOpen ? ' rotate-45 translate-y-1' : '')
        }
      ></div>
      <div
        className={
          'bg-gray-950 w-10 h-1 rounded transition group-hover:bg-gray-800' +
          (isOpen ? ' -rotate-45 -translate-y-1' : '')
        }
      ></div>
    </div>
  );
};
export default Burger;
