import PageHeader from '@/app/components/PageHeader';
import RatesTicket from '@/app/components/RatesTicket';
import Image from 'next/image';
import SmallHeading from '@/app/components/SmallHeading';
import MainText from '@/app/components/MainText';

const RatesPage = () => {
  return (
    <div>
      {/* <Image
        src={'/pianica.jpg'}
        alt='Green pianica banner'
        height={500}
        width={500}
        className='w-full shadow h-[200px] object-cover object-center rounded-3xl'
      ></Image> */}
      <PageHeader>Rates</PageHeader>
      <section className='max-w-5xl mx-auto'>
        <div className='p-4 space-y-8'>
          <div>
            <SmallHeading>Tuition</SmallHeading>
            <MainText>
              Tuition covers 38 weeks of study, and is payable by year, semester
              or month. Tuition prices include lesson materials, instruction,
              and travel within a 30 minute radius of my home in Sunnyside.
              Students are responsible for providing their own{' '}
              <span className='text-linkColor'>instrument</span>, a binder and a
              metronome. Tuition is payable by the month, semester, or year.
              Tuition will be prorated for students starting mid-year. Please
              see full terms below and in the{' '}
              <span className='text-linkColor'>studio policy</span> form.
            </MainText>
          </div>
          <div className='space-y-8'>
            <SmallHeading>Lesson lengths and fees</SmallHeading>
            <div className='flex flex-col md:flex-row gap-8 justify-between items-center'>
              <RatesTicket
                data={{
                  bgColor: 'bg-ratesTicketColorOne/50',
                  bgColorDark: 'bg-ratesTicketColorOne',
                  title: 'Option 1',
                  timer: 30,
                  age: 'Ages 4 - 6',
                  price: '$80/Lesson',
                  perMonth: [
                    '$311/month',
                    'First payment due September 5th 2023, following payments due by the end of the month October - June.',
                  ],
                  perSemester: [
                    '$1555/semester',
                    'Payments due September 5th 2023 and February 5th 2024.',
                  ],
                  perYear: ['$3110/year', 'Payment due September 5th 2023.'],
                }}
              />
              <RatesTicket
                data={{
                  bgColor: 'bg-ratesTicketColorTwo/50',
                  bgColorDark: 'bg-ratesTicketColorTwo',
                  title: 'Option 2',
                  timer: 45,
                  age: 'Ages 7 - adult',
                  price: '$100/Lesson',
                  perMonth: [
                    '$380/month',
                    'First payment due September 5th 2023, following payments due by the end of the month October - June.',
                  ],
                  perSemester: [
                    '$1900/semester',
                    'Payments due September 5th 2023 and February 5th 2024.',
                  ],
                  perYear: ['$3800/year', 'Payment due September 5th 2023.'],
                }}
              />
              <RatesTicket
                data={{
                  bgColor: 'bg-ratesTicketColorThree/50',
                  bgColorDark: 'bg-ratesTicketColorThree',
                  title: 'Option 3',
                  timer: 60,
                  age: 'Ages 7 - adult',
                  price: '$114/Lesson',
                  perMonth: [
                    '$425/month',
                    'First payment due September 5th 2023, following payments due by the end of the month October - June.',
                  ],
                  perSemester: [
                    '$2125',
                    'Payments due September 5th 2023 and February 5th 2024.',
                  ],
                  perYear: ['$4250/year', 'Payment due September 5th 2023.'],
                }}
              />
            </div>
          </div>
          <div className='space-y-8'>
            <div className='text-textColor'>
              <SmallHeading>Cancellation Policy</SmallHeading>
              <MainText>
                Tuition secures a weekly time in my schedule and is not adjusted
                for lessons missed or canceled by students. However, students
                may make-up 2 missed lessons per year, free of charge, provided
                I receive notice by 8 am on the day of the scheduled lesson. All
                makeup les
              </MainText>
            </div>
            <div>
              <SmallHeading>Discounts</SmallHeading>
              <MainText>
                There is a 10% family discount off of the listed tuition prices
                for students taking back-to-back lessons at the same location.
              </MainText>
            </div>
            <div>
              <SmallHeading>Terms and Conditions</SmallHeading>
              <MainText>
                A late fee of $25 will be deducted for payments not received by
                the 14th day after payment is due. Tuition will be prorated for
                students starting mid-semester. Payments may be made in cash, or
                by check, Venmo, Zelle, Cash App or bank transfer. Missed or
                chronically late payments may result in the termination of
                lessons.
              </MainText>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default RatesPage;
