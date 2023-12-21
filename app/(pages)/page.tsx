'use client';
import { useState, useEffect } from 'react';
import { getProfile } from '@/sanity/sanity.query';
import type { ProfileType } from '@/types';
import { getTestimonials } from '@/sanity/sanity.query';
import type { TestimonialType } from '@/types';
import { PortableText } from '@portabletext/react';
import PortableTextComponent from '../components/PortableTextComponents';

import Header from '../components/Header';
import Image from 'next/image';
import Button from '../components/Button';
import MainText from '../components/MainText';
import TrifoldCard from '../components/TrifoldCard';
import LearnMoreCard from '../components/LearnMoreCard';
import LearnMoreList from '../components/LearnMoreList';
import Link from 'next/link';
import Testemonial from '../components/Testemonial';

import Loading from './loading';

const HomePage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const [testimonials, setTestimonials] = useState<TestimonialType[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const [testimonials, profile] = await Promise.all([
          getTestimonials(),
          getProfile(),
        ]);
        setProfile(profile);
        setTestimonials(testimonials);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

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
          {loading && <div>Loading...</div>}
          {error && <div>{error.message}</div>}
          {profile && (
            <div className='md:w-2/3 space-y-8 text-lg'>
              <PortableText
                value={profile.shortBio}
                components={PortableTextComponent}
              />
            </div>
          )}
        </div>
      </section>
      {/* Testemonials */}
      <section className='p-8 max-w-5xl mx-auto'>
        <div>
          {testimonials &&
            testimonials.map((testemonial) => (
              <Testemonial author={testemonial.author} key={testemonial.author}>
                {testemonial.quote}
              </Testemonial>
            ))}
        </div>
      </section>
    </main>
  );
};
export default HomePage;
