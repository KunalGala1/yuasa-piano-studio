import SmallHeading from "@/app/components/SmallHeading";
import Inquiry from "@/app/components/Inquiry";

const ContactPage = () => {
  return (
    <main className="px-8 py-16">
      <div className="max-w-6xl mx-auto space-y-4">
        <SmallHeading>
          Use this form to make a trial lesson request!
        </SmallHeading>
        <Inquiry />
      </div>
    </main>
  );
};
export default ContactPage;
