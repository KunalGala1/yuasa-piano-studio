import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="p-8 shadow bg-slate-200 text-base">
        <ul className="space-y-4 max-w-6xl mx-auto">
          <li>
            <Link href={""}>Frequently Asked Questions</Link>
          </li>
          <li>
            <Link href={""}>Studio Policy</Link>
          </li>
          <li>
            <Link href={""}>Registration Form</Link>
          </li>
        </ul>
      </div>
      <p className="text-slate-200 bg-slate-600 p-2 text-xs text-center">
        Copyright &copy; {new Date().getFullYear()} Aya Yuasa
      </p>
    </footer>
  );
};
export default Footer;
