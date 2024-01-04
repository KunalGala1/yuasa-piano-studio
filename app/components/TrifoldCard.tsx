import Image from 'next/image';
import MainText from './MainText';
import SmallHeading from './SmallHeading';

type TrifoldCardProps = {
  title: string;
  image: {
    src: string;
    height: number;
    width: number;
    alt: string;
  };
  children: React.ReactNode;
  animation: string;
};

const TrifoldCard = ({
  title,
  image,
  children,
  animation,
}: TrifoldCardProps) => {
  return (
    <div className='flex flex-col justify-start items-center gap-2 md:w-1/3 max-w-md mx-auto'>
      <Image
        src={image.src}
        height={image.height}
        width={image.width}
        alt={image.alt}
        unoptimized={true}
        className={`${animation}`}
      ></Image>
      <SmallHeading color='text-main'>{title}</SmallHeading>
      <MainText className='text-center'>{children}</MainText>
    </div>
  );
};
export default TrifoldCard;
