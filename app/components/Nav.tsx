import NavListItem from './NavListItem';

type NavProps = {
  isOpen: boolean;
  toggleOpen: () => void;
  closeNav: () => void;
};

const Nav = ({ isOpen, toggleOpen, closeNav }: NavProps) => {
  return (
    <nav
      className={`${
        isOpen
          ? 'block fixed w-full h-screen top-0 left-0 bg-white z-20'
          : 'hidden'
      } md:block`}
    >
      <ul
        className={`flex flex-col gap-8 justify-center items-center h-full md:justify-center md:flex-row md:gap-12 ${
          isOpen ? '' : ''
        }`}
      >
        <NavListItem href={'/'} closeNav={closeNav}>
          Home
        </NavListItem>
        <NavListItem href={'/lessons'} closeNav={closeNav}>
          Lessons
        </NavListItem>
        <NavListItem href={'/about'} closeNav={closeNav}>
          About
        </NavListItem>
        <NavListItem href={'/rates'} closeNav={closeNav}>
          Rates
        </NavListItem>
        <NavListItem href={'/blog'} closeNav={closeNav}>
          Blog
        </NavListItem>
        <NavListItem href={'/contact'} closeNav={closeNav}>
          Contact
        </NavListItem>
      </ul>
    </nav>
  );
};
export default Nav;
