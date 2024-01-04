import { useRouter } from 'next/navigation';

const LearnMoreButton = ({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) => {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push(link);
      }}
      className='py-2 px-6 rounded-full bg-light w-max self-center hover:bg-slate-400/75 transition'
    >
      {children}
    </button>
  );
};
export default LearnMoreButton;
