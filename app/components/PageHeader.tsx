const PageHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex justify-center items-center gap-4 md:gap-0 p-4 max-w-5xl mx-auto mt-8'>
      <div className='h-px w-full bg-sky-950 hidden xs:block'></div>
      <h1 className='font-sans font-bold text-4xl uppercase text-sky-950 sm:whitespace-nowrap w-full text-center'>
        {children}
      </h1>
      <div className='h-px w-full bg-sky-950 hidden xs:block'></div>
    </div>
  );
};
export default PageHeader;
