type SmallHeadingProps = {
  color?: string;
  children: React.ReactNode;
};

const SmallHeading = ({ color, children }: SmallHeadingProps) => {
  return (
    <h3 className={`${color ? color : "text-headingColor"}`}>{children}</h3>
  );
};
export default SmallHeading;
