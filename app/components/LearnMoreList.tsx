const LearnMoreList = ({ children }: { children: React.ReactNode }) => {
  return (
    <ul className="list-disc text-textColor leading-9 list-inside text-center">
      {children}
    </ul>
  );
};
export default LearnMoreList;
