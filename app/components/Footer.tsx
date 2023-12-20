import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='p-8 shadow bg-slate-200'>
      <ul className='space-y-4'>
        <li>
          <Link href={''}>Frequently Asked Questions</Link>
        </li>
        <li>
          <Link href={''}>Studio Policy</Link>
        </li>
        <li>
          <Link href={''}>Registration Form</Link>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
