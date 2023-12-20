import PageHeader from '@/app/components/PageHeader';
import Testemonial from '@/app/components/Testemonial';
import Image from 'next/image';
import SmallHeading from '@/app/components/SmallHeading';
import MainText from '@/app/components/MainText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const AboutPage = () => {
  return (
    <section>
      {/* <Image
        src={'/scoreBanner.jpg'}
        alt={`Music score of Yuasa's clarinet sonata`}
        width={500}
        height={500}
        className='w-full h-[300px] object-cover object-top shadow filter contrast-more: saturate-0 brightness-105'
      ></Image> */}
      <PageHeader>About</PageHeader>

      <div className='flex flex-col gap-4 justify-center items-center p-4 text-center'>
        <div>
          <div className='flex justify-center items-center text-amber-200 w-[150px]'>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div>Ephraim B., YPS student</div>
        </div>
        <blockquote className='italic text-lg font-light'>
          &ldquo;She is a natural born teacher, not to mention an excellent
          piano player.&rdquo;
        </blockquote>
      </div>
      <div className='p-4 max-w-6xl mx-auto flex flex-col gap-4'>
        <div className='space-y-8'>
          <MainText>
            <Image
              src={'/about.jpg'}
              alt='A headshot of Aya wearing a yellow dress at sunset'
              width={500}
              height={500}
              unoptimized={true}
              className='w-full mb-4 md:float-left md:mr-8 md:w-1/2 rounded shadow'
            ></Image>
            A Berklee College of Music Alumna, Aya Yuasa is a piano teacher and
            composer who&rsquo;s pedagogy centers on the development of
            creativity and musicianship in her students.
          </MainText>
          <MainText>
            Aya was born in Tokyo, Japan, and lived both in the city as well as
            in rural Hokkaido (and in Oakland, CA for a couple of years in
            between) before moving to Vermont.
          </MainText>
          <MainText>
            Aya started piano lessons while living in Date, Hokkaido at the age
            of 8. Since then, the piano has been her constant companion. She
            studied with 5 different piano teachers pre-college, each offering
            unique insights into pedagogy and genre. One teacher emphasized
            popular music and rote learning, fostering her skills in arranging
            rock, folk, pop, and musical theater tunes. Another teacher helped
            her navigate classical piano repertoire, music theory and ear
            training. Another teacher was a professor of piano at UVM, who
            introduced her to jazz piano. In addition to bi-weekly piano
            lessons, she played in multiple small jazz ensembles, big bands and
            pit orchestras. This multifaceted training greatly influences her
            teaching methods today.
          </MainText>
          <div>
            <SmallHeading>Education</SmallHeading>
            <MainText>
              Aya received her B.M. from Berklee College of Music in Boston,
              where she graduated magna cum laude with a dual degree in Film
              Scoring and Composition. She was the recipient of the Lerouy
              Souther&rsquo;s Award from the Composition Department as well as
              the Don Wilkins Award from the Film Scoring Department, and worked
              as the Film Scoring Department Assistant. Aya is currently
              pursuing studies in Dalcroze Eurythmics at the Kaufman Center for
              the Arts.
            </MainText>
          </div>
          <div>
            <SmallHeading>Teaching</SmallHeading>
            <MainText>
              {' '}
              Aya has seven years of private teaching experience, and currently
              teaches lessons in select neighborhoods in Queens and Brooklyn.
              Prior to establishing her own studio, she taught through AWSOM, a
              music lesson provider. During her year with AWSOM, she was awarded
              Teacher of the Month out of 90+ teachers for excellence in
              teaching. Aya is an affiliated member of both the Music
              Teacher&rsquo;s National Association and the New York State Music
              Teacher&rsquo;s Association.
            </MainText>
          </div>
          <MainText>
            When not making music, she enjoys spending her time with friends,
            going on hikes and long walks, swimming, cooking.
          </MainText>
        </div>
        {/* <div className='flex justify-center items-center shadow'>
          <iframe
            src='https://www.youtube.com/embed/uGY3NrViqX8?si=mG3eOroSsG68paUq'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
            className='aspect-video w-full'
          ></iframe>
        </div> */}
      </div>
    </section>
  );
};
export default AboutPage;
