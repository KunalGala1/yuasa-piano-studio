'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import MainText from './MainText';
import { useState } from 'react';

type DropdownProps = {
  className?: string;
  options: DropdownItemProps[];
};

type DropdownItemProps = {
  title: string;
  content: React.ReactNode;
};

const Dropdown = ({ className = '', options }: DropdownProps) => {
  const [openIndex, setOpenIndex] = useState<number>(-1);

  const handleDropdownClick = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className={className}>
      {options.map((item, index) => {
        return (
          <div key={index}>
            <div
              className={
                'p-4 flex gap-4 justify-start items-center cursor-pointer' +
                (openIndex === index
                  ? ' bg-gray-200 border-t-main border-t-2'
                  : ' border-slate-950 border-t')
              }
              onClick={() => {
                handleDropdownClick(index);
              }}
            >
              <FontAwesomeIcon
                icon={faAngleUp}
                className={`text-2xl ${
                  openIndex === index
                    ? 'text-main rotate-180'
                    : 'text-textColor'
                }`}
              />
              <h3
                className={`${
                  openIndex === index ? 'text-main' : 'text-textColor'
                }`}
              >
                {item.title}
              </h3>
            </div>
            <div
              className={`px-4 bg-gray-50 ${
                openIndex === index ? 'h-max py-4' : 'max-h-0 py-0'
              } overflow-hidden`}
            >
              <div>{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Dropdown;
