import Header from '../components/Header';
import Image from 'next/image';
import Button from '../components/Button';
import MainText from '../components/MainText';
import TrifoldCard from '../components/TrifoldCard';
import LearnMoreCard from '../components/LearnMoreCard';
import LearnMoreList from '../components/LearnMoreList';
import Link from 'next/link';
import Testemonial from '../components/Testemonial';

const HomePage = () => {
  return (
    <main className='space-y-16'>
      {/* Hero */}
      <section className='relative w-full h-[500px]'>
        <Image
          src={'/hero.jpg'}
          width={500}
          height={500}
          alt=''
          unoptimized={true}
          className='absolute top-0 left-0 w-full h-full object-cover object-left sm:translate-x-[25%]'
        ></Image>
        <div className='bg-linearGradient w-full h-full absolute top-0 left-0'></div>
        {/* TEXT CONTENT */}
        <div className='w-4/5 h-full relative text-white flex flex-col justify-center items-start gap-16 pl-8 max-w-3xl mx-auto'>
          <div>
            <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl drop-shadow'>
              PIANO LESSONS IN NYC
            </h1>
            <h2 className='text-lg sm:text-xl md:text-2xl drop-shadow'>
              With AYA YUASA
            </h2>
          </div>
          <div className='flex gap-4'>
            <Link href={'/lessons'}>
              <Button theme='light'>Lessons</Button>
            </Link>
            <Link href={'/contact'}>
              <Button theme='dark'>Contact</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className='p-8'>
        <div className='max-w-2xl mx-auto'>
          <MainText>
            Welcome to the Yuasa Piano Studio website! I offer in-home piano
            lessons in Queens and Brooklyn, as well as at{' '}
            <span className='text-linkColor'>The Music Room</span> in Prospect
            Slope. Read my{' '}
            <span className='text-linkColor'>teaching philosophy</span>, visit
            the rates page, or schedule a trial lesson. I look forward to
            hearing from you!
          </MainText>
        </div>
      </section>

      {/* Trifold */}
      <section className='p-8 max-w-6xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-center gap-8'>
          <TrifoldCard
            image={{
              src: '/piano-logo.svg',
              height: 50,
              width: 50,
              alt: 'piano logo',
            }}
            title='Fun Repertoire'
          >
            Lessons include pop, rock, blues, folk, jazz, movie and video game
            music, while developing keyboard fluency through standard classical
            repertoire.
          </TrifoldCard>
          <TrifoldCard
            image={{
              src: '/house-logo.svg',
              height: 50,
              width: 50,
              alt: 'house logo',
            }}
            title='In-Home Lessons'
          >
            Lessons take place in the comfort and convenience of your own home.
          </TrifoldCard>
          <TrifoldCard
            image={{
              src: '/trial-logo.svg',
              height: 50,
              width: 50,
              alt: 'trial logo',
            }}
            title='Free Trial'
          >
            All prospective students receive a free 30 minute trial lesson.
            Visit the <span className='text-linkColor'>Contact page</span> to
            learn more and sign-up!
          </TrifoldCard>
        </div>
      </section>

      {/* More information for kids or adults */}
      <section className='flex flex-col gap-16 p-8'>
        <LearnMoreCard title={'Piano Lessons for Kids'} link={'/lessons'}>
          <LearnMoreList>
            <li>
              Weekly 30, 45 or 60 minute lessons in the comfort and convenience
              of your own home.
            </li>
            <li>
              Comprehensive instruction in music theory, sight-reading, chord
              charts, technique and ear training.
            </li>
            <li>
              Fun repertoire that includes classical, jazz, folk, rock and pop
              music.
            </li>
            <li>
              Other activities such as composing, arranging and music
              production.
            </li>
          </LearnMoreList>
        </LearnMoreCard>
        <LearnMoreCard title={'Piano Lessons for Adults'} link={'/lessons'}>
          <LearnMoreList>
            <li>
              Weekly 45 or 60 minute lessons in the comfort and convenience of
              your own home, or virtually.
            </li>
            <li>
              Comprehensive instruction in music theory, sight-reading, chord
              charts technique and ear training.
            </li>
            <li>
              Inspiring repertoire, clear and informative feedback, and
              easy-to-follow assignments.
            </li>
            <li>
              Virtual Only - Flexible, week to week scheduling to accommodate
              busy schedules.
            </li>
          </LearnMoreList>
        </LearnMoreCard>
      </section>

      {/* Short Bio */}
      <section className='bg-linearGradient2 p-8'>
        <div className='flex flex-col-reverse md:flex-row gap-16 max-w-6xl mx-auto'>
          <div className='md:w-1/3 lg:w-1/5'>
            <Image
              src={'/portrait-sakura.jpg'}
              width={100}
              height={400}
              alt={'Portrait image with sakura in background'}
              className='object-cover object-right w-full h-full rounded'
              unoptimized={true}
            ></Image>
          </div>
          <div className='md:w-2/3 space-y-8 text-lg'>
            <MainText>
              Aya is an award-winning piano teacher with 7 years of professional
              experience in private piano instruction and a Bachelor of Music
              degree from Berklee College of Music.
            </MainText>
            <MainText>
              Known for her fun, patient and engaging teaching style, she
              recognizes that everyone is unique, and creates a customized
              curriculum to best suit the individual needs and interests of each
              student.{' '}
            </MainText>
            <MainText>
              Lessons are as relaxed or intense as the student wishes, and can
              include music theory, ear training, composition, music production
              and more.
            </MainText>
            <MainText>
              Aya is a member of the Music Teachers&apos; National Association.{' '}
              <Link href={'/about'} className='text-linkColor'>
                Read More
              </Link>
            </MainText>
          </div>
        </div>
      </section>

      {/* Testemonials */}
      <section className='p-8 max-w-5xl mx-auto'>
        <div>
          <Testemonial author={'Basak P., Parent'}>
            Aya is an amazing teacher. She taught my 5 year old daughter how to
            play piano with a lot of patience and joy without overwhelming her.
            Being calm and kind helped my daughter to connect with her easily.
            She also prepped my daughter for her first recital in a very helpful
            manner and organized the recital very professionally.
          </Testemonial>
          <Testemonial author={'Sydney T., Student'}>
            Aya is a wonderful piano teacher! She always prepares lessons that
            are appropriate for my skill level and is patient and encouraging
            with me when I make mistakes. Aya wants the lessons to be fun and
            interesting for me so she allows me to pick genres and even specific
            songs that I want to learn and incorporates them into the lessons.
            She is very professional and at the same time, friendly and easy to
            talk to. She clearly loves teaching and is passionate about piano
            and music in general. I would highly recommend taking piano lessons
            from Aya!
          </Testemonial>
          <Testemonial author={'Maresa C., Parent'}>
            Aya is amazing! My kids love learning with her and have been
            improving very quickly. She&apos;s extremely professional and
            organized, comes perfectly prepared and tailors each lesson
            individually to my kids&apos; needs
          </Testemonial>
        </div>
      </section>
    </main>
  );
};
export default HomePage;
