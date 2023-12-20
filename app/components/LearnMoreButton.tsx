const LearnMoreButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className='py-2 px-6 rounded-full bg-light w-max self-center hover:bg-slate-400/75 transition'>
      {children}
    </button>
  );
};
export default LearnMoreButton;
