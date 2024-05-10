type MainTextProps = {
  className?: string;
  children: React.ReactNode;
};

const MainText = ({ className = "", children }: MainTextProps) => {
  return <p className={`text-textColor font-light ${className}`}>{children}</p>;
};
export default MainText;
