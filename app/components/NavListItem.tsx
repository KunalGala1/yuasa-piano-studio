import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavListItemProps = {
  href: string;
  children: React.ReactNode;
  closeNav: () => void;
};

const NavListItem = ({ href, children, closeNav }: NavListItemProps) => {
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <li>
      <Link
        href={href}
        className={`font-bold text-lg relative ${
          isActive
            ? 'text-main after:w-full after:scale-105 after:h-0.5 after:bg-main after:rounded after:-bottom-1 after:left-0 after:absolute'
            : 'text-headingColor hover:text-main hover:after:w-full hover:after:scale-105 hover:after:h-0.5 hover:after:bg-main hover:after:rounded hover:after:-bottom-1 hover:after:left-0 hover:after:absolute'
        } transition`}
        onClick={() => {
          closeNav();
        }}
      >
        {children}
      </Link>
    </li>
  );
};
export default NavListItem;
