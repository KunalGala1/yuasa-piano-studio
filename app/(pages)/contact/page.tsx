import Inquiry from '@/app/components/Inquiry';
import SmallHeading from '@/app/components/SmallHeading';

const ContactPage = () => {
  return (
    <div className='p-4 md:p-16 max-w-4xl mx-auto space-y-4'>
      <SmallHeading>Use this form to make a trial lesson request!</SmallHeading>
      <Inquiry />
    </div>
  );
};
export default ContactPage;
