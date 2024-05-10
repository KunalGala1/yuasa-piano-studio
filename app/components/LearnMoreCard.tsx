import LearnMoreButton from "./LearnMoreButton";
import SmallHeading from "./SmallHeading";
import MainText from "./MainText";

type LearnMoreCardProps = {
  title: string;
  link: string;
  children: React.ReactNode;
};

const LearnMoreCard = ({ title, link, children }: LearnMoreCardProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <SmallHeading>{title}</SmallHeading>
      <div className="w-full bg-slate-100 p-8 flex flex-col gap-8">
        {children}
        <LearnMoreButton link={link}>Learn More</LearnMoreButton>
      </div>
    </div>
  );
};
export default LearnMoreCard;
