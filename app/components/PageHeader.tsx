type PageHeaderProps = {
  children: React.ReactNode;
  id?: string;
};

const PageHeader = ({ children, id = "" }: PageHeaderProps) => {
  return (
    <div
      className="flex justify-center items-center gap-4 max-w-6xl mx-auto mt-8"
      id={id}
    >
      <div className="h-px w-full bg-sky-950 hidden xs:block"></div>
      <h1 className="font-sans font-bold text-4xl uppercase text-sky-950 sm:whitespace-nowrap w-full text-center">
        {children}
      </h1>
      <div className="h-px w-full bg-sky-950 hidden xs:block"></div>
    </div>
  );
};
export default PageHeader;
