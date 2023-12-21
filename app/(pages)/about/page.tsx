'use client';
import { useState, useEffect } from 'react';

import PageHeader from '@/app/components/PageHeader';
import Testemonial from '@/app/components/Testemonial';
import Image from 'next/image';
import SmallHeading from '@/app/components/SmallHeading';
import MainText from '@/app/components/MainText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { getProfile } from '@/sanity/sanity.query';
import type { ProfileType } from '@/types';
import { PortableText } from '@portabletext/react';
import PortableTextComponent from '@/app/components/PortableTextComponents';

const AboutPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const [profile] = await Promise.all([getProfile()]);
        setProfile(profile);
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
    <section>
      {/* <Image
        src={'/scoreBanner.jpg'}
        alt={`Music score of Yuasa's clarinet sonata`}
        width={500}
        height={500}
        className='w-full h-[300px] object-cover object-top shadow filter contrast-more: saturate-0 brightness-105'
      ></Image> */}
      <PageHeader>About</PageHeader>

      <div className='flex flex-col justify-center items-center p-4 text-center my-8'>
        <blockquote className='italic text-lg font-light'>
          &ldquo;She is a natural born teacher, not to mention an excellent
          piano player.&rdquo;
        </blockquote>
        <div className='flex justify-center items-center text-amber-200 w-[150px] mt-4'>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div>
          <div>Ephraim B., YPS student</div>
        </div>
      </div>
      <div className='p-4 max-w-6xl mx-auto flex flex-col gap-4'>
        {loading && <div>Loading...</div>}
        {error && <div>{error.message}</div>}
        {profile && (
          <div>
            <Image
              src={'/about.jpg'}
              alt='A headshot of Aya wearing a yellow dress at sunset'
              width={500}
              height={500}
              unoptimized={true}
              className='w-full mb-4 md:float-left md:mr-8 md:w-1/2 rounded shadow'
            ></Image>
            <div className='space-y-8'>
              <PortableText
                value={profile.fullBio}
                components={PortableTextComponent}
              />
              <div>
                <SmallHeading>{profile.education.title}</SmallHeading>
                <PortableText
                  value={profile.education.details}
                  components={PortableTextComponent}
                />
              </div>
              <div>
                <SmallHeading>{profile.teaching.title}</SmallHeading>
                <PortableText
                  value={profile.teaching.details}
                  components={PortableTextComponent}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default AboutPage;
