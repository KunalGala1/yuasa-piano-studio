import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

type TestemonialProps = {
  children: string;
  author: string;
};

const Testemonial = ({ children, author }: TestemonialProps) => {
  return (
    <div className='flex flex-col md:flex-row md:items-start gap-4 md:gap-8 justify-center items-center p-4 text-center md:text-left text-textColor'>
      <div>
        <div className='flex justify-center items-center md:justify-start text-amber-200 w-[150px]'>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div>{author}</div>
      </div>
      <blockquote className='italic text-lg font-light'>
        &ldquo;{children}&rdquo;
      </blockquote>
    </div>
  );
};
export default Testemonial;
