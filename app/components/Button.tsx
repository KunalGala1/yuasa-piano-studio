import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type ButtonProps = {
  className?: string;
  theme: string;
  children: React.ReactNode;
  icon?: IconDefinition;
};

const Button = ({
  className = "",
  theme,
  children,
  icon = faAngleRight,
}: ButtonProps) => {
  return (
    <button
      className={`${className} text-base py-2 px-4 rounded shadow flex justify-between items-center w-[125px] transition ${
        theme === "light"
          ? "bg-white text-main hover:bg-gray-300"
          : theme === "dark"
          ? "bg-main text-white hover:bg-blue-500"
          : ""
      }`}
    >
      <span>{children}</span>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};
export default Button;
