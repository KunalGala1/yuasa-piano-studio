type RatesTicketProps = {
  data: {
    title: string;
    bgColor: string;
    bgColorDark: string;
    timer: number;
    age: string;
    price: string;
    perMonth: string[];
    perSemester: string[];
    perYear: string[];
  };
};

const RatesTicket = ({ data }: RatesTicketProps) => {
  return (
    <div className='flex flex-col flex-1 justify-center items-center gap-4'>
      {/* Title */}
      <div>{data.title}</div>
      {/* Card */}
      <div className={`${data.bgColor} flex flex-col rounded shadow w-full`}>
        {/* Header */}
        <div
          className={`${data.bgColorDark} p-8 flex justify-center items-center gap-4 text-main`}
        >
          {/* Clock */}
          <div
            className={`${data.bgColorDark} h-16 w-16 rounded-full flex justify-center items-center relative shadow`}
          >
            <div className='relative z-10 text-lg font-bold'>{data.timer}</div>
            <div
              className={
                data.timer === 30
                  ? 'absolute top-0 right-0 h-full w-1/2 bg-white rounded-tr-full rounded-br-full'
                  : data.timer === 45
                  ? 'absolute top-0 right-0 h-full w-1/2 bg-white rounded-tr-full rounded-br-full'
                  : data.timer === 60
                  ? 'absolute top-0 left-0 h-full w-full bg-white rounded-full'
                  : ''
              }
            ></div>
            {data.timer === 45 ? (
              <div className='absolute bottom-0 left-0 h-1/2 w-full bg-white rounded-bl-full rounded-br-full'></div>
            ) : (
              ''
            )}
          </div>
          {/* Text */}
          <div>
            <div>{data.age}</div>
            <div>{data.price}</div>
          </div>
        </div>
        {/* Body */}
        <div className='flex-1 overflow-x-auto'>
          <div className='flex flex-col gap-12 p-8'>
            <div>
              <RatesTicketHeading>Per Month</RatesTicketHeading>
              <RatesTicketInformation data={data.perMonth} />
            </div>
            <div>
              <RatesTicketHeading>Per Semester</RatesTicketHeading>
              <RatesTicketInformation data={data.perSemester} />
            </div>
            <div>
              <RatesTicketHeading>Per Year</RatesTicketHeading>
              <RatesTicketInformation data={data.perYear} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RatesTicket;

const RatesTicketHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className='uppercase bg-main text-white py-1 px-5 mb-4 text-center w-max mx-auto rounded'>
      {children}
    </h3>
  );
};

const RatesTicketInformation = ({ data }: { data: string[] }) => {
  return (
    <div className='space-y-4 text-center text-main'>
      {data.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};
