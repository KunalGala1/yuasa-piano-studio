'use client';
import PageHeader from '@/app/components/PageHeader';
import SmallHeading from '@/app/components/SmallHeading';
import MainText from '@/app/components/MainText';
import Link from 'next/link';
import Dropdown from '@/app/components/Dropdown';

const LessonPage = () => {
  return (
    <>
      <PageHeader>Lessons</PageHeader>
      <main className='p-8 max-w-6xl mx-auto space-y-8'>
        <div>
          <SmallHeading>Introduction and Philosophy</SmallHeading>
          <MainText>
            I teach music theory, technique and ear training through fun,
            engaging lessons, and encourage students to explore new sounds and
            styles while furthering favorites. Students are exposed to a full
            range of genres including classical, jazz, rock, pop, and even movie
            and video game soundtracks through careful selection of repertoire
            and exercises based on students&apos; needs and preferences. Lessons
            may also include composing original music, arranging and music
            production. I recognize that every student is unique, from the shape
            of their hand to their personality and their learning style, and
            tailor each lesson to bring out the best in them. Instruction can be
            relaxed or rigorous depending on the students goals for the lessons
            - either way, I make sure that learning the piano is always a
            fulfilling and fun experience.
          </MainText>
        </div>
        <div>
          <SmallHeading>Location</SmallHeading>
          <MainText>
            Lessons take place in-person at the student&apos;s home, at{' '}
            <Link href={'#'}>The Music Room</Link> in Park Slope, Brooklyn, or
            virtually (adult students only). I offer the following travel
            options within a 30 minute radius of my home in Sunnyside, Queens.
          </MainText>
          <ul className='text-textColor font-light ml-8'>
            <li>
              Piano Lessons in Queens — all neighborhoods in western Queens.
            </li>
            <li>
              Piano Lessons in Brooklyn — all neighborhoods in north Brooklyn.
            </li>
            <li>
              Virtual Piano Lessons — Facetime, WhatsApp, Google Meet (adult
              students only).
            </li>
          </ul>
        </div>
        <div>
          <SmallHeading>Age & Ability</SmallHeading>
          <MainText>
            Anyone is welcome to join the Yuasa Piano Studio — I teach kids and
            adults of beginner, intermediate and advanced levels starting at age
            4. Please see <Link href={'#'}>Piano Lessons for Kids</Link> or{' '}
            <Link href={'#'}>Piano Lessons for Adults</Link> for more
            information.
          </MainText>
        </div>
        <div>
          <SmallHeading>Rates</SmallHeading>
          <MainText>
            Please visit the <Link href={'/rates'}>Rates</Link> page for tuition
            rates and payment policies.
          </MainText>
        </div>
        <div>
          <SmallHeading>Subjects</SmallHeading>
          <ul className='text-textColor font-light ml-8'>
            <li>
              Technique — Development of finger strength, agility, and hand
              coordination through scales, arpeggios, and exercises.
            </li>
            <li>
              Repertoire — Learning and interpreting pieces from different
              styles and eras.
            </li>
            <li>
              Music Theory — Understanding the language of music, including
              notes, rhythms, scales, and chord structures.
            </li>
            <li>
              Sight Reading — The skill of reading and playing music on the
              spot.
            </li>
            <li>
              Ear Training — Developing the ability to recognize pitches,
              intervals, and rhythms by ear.
            </li>
            <li>
              Artistry and Interpretation — Conveying emotion, dynamics, and
              personal expression in music.
            </li>
          </ul>
          <MainText>
            In addition to these 6 core subject, students study composition,
            arranging, improvisation and music production.
          </MainText>
        </div>
      </main>
      <PageHeader>Piano Lessons for Kids</PageHeader>
      <section className='p-8 max-w-6xl mx-auto space-y-8'>
        <div className='text-center'>
          <SmallHeading>What&apos;s Included</SmallHeading>
          <ul className='text-textColor font-light'>
            <li>Lessons in-home or at The Music Room</li>
            <li>30, 45 or 60 minute weekly lessons</li>
            <li>
              Ear training, music theory, sight-reading, rote learning, keyboard
              fluency
            </li>
            <li>Exposure to a diverse range of musical genres</li>
            <li>Duets, sing-alongs and off-the-bench activities and games</li>
            <li>Optional end of year recital participation</li>
          </ul>
        </div>
        <SmallHeading>Sample Curriculum</SmallHeading>
        <Dropdown
          options={[
            {
              title: '*4 to 6 year olds',
              content: (
                <MainText>
                  4-6 y.o. students take weekly 30 minute lessons. I believe
                  that the most important thing for a young student is for them
                  to think of piano lessons as fun, and not work. Children learn
                  through play, so lessons at this age consist of playful
                  learning techniques, such as stories, learning games and music
                  appreciation through off-the-bench activities. Methods I use
                  include the{' '}
                  <Link href={'#'} className='text-linkColor'>
                    Ready to Play
                  </Link>{' '}
                  series and{' '}
                  <Link href={'#'} className='text-linkColor'>
                    Piano Safari Friends
                  </Link>
                  . My goal with young students is to continue to foster an
                  interest in the piano so that they will be self-motivated as
                  they mature as pianists.
                </MainText>
              ),
            },
            {
              title: '7 to 10 year olds',
              content: (
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                  repellendus?
                </p>
              ),
            },
            {
              title: '11 to 13 year olds',
              content: (
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                  repellendus?
                </p>
              ),
            },
            {
              title: '14+',
              content: (
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                  repellendus?
                </p>
              ),
            },
          ]}
        />
        <MainText className='pt-8'>
          * I accept students as young as 4 y.o.. However, the optimal starting
          age varies widely for each individual child, depending on their
          personality, ability to focus, and mental and physical maturity. If
          they know their ABCs, can concentrate for 30 minutes, enjoy music and
          are interested in the piano, then they are probably ready! Book an{' '}
          <Link href={'#'} className='text-linkColor'>
            introductory lesson
          </Link>{' '}
          or contact me for more information.
        </MainText>
      </section>
      <PageHeader>Piano Lessons for Adults</PageHeader>
      <section className='p-8 max-w-6xl mx-auto space-y-8'>
        <div className='text-center'>
          <SmallHeading>What&apos;s Included</SmallHeading>
          <ul className='text-textColor font-light'>
            <li>Lessons in-home or at The Music Room, or virtually</li>
            <li>45 or 60 minute lessons</li>
            <li>Flexible scheduling to accommodate busy schedules</li>
            <li>Sight-reading, lead sheets, music theory</li>
            <li>
              Customized technical exercises for keyboard fluency and ease of
              playing
            </li>
          </ul>
        </div>
        <Dropdown
          options={[
            {
              title: 'Beginner',
              content: (
                <MainText>
                  Adult Beginner Piano Lesson: Adults with minimal to no prior
                  experience will delve straight into the basics. Adult
                  beginners will use a method book specifically written for the
                  older beginner - depending on previous experience, learning
                  style and lesson goals, I will choose a method book such as{' '}
                  <Link href={'#'} className='text-linkColor'>
                    Keyboard Musician for the Adult Beginner
                  </Link>
                  ,{' '}
                  <Link href={'#'} className='text-linkColor'>
                    Alfred&apos;s Basic Adult All-in-One
                  </Link>
                  , or{' '}
                  <Link href={'#'} className='text-linkColor'>
                    Adult Piano Adventures All-in-One
                  </Link>{' '}
                  as a comprehensive introduction to piano playing, while
                  supplementing it with additional repertoire and preferred
                  pieces and styles.
                </MainText>
              ),
            },
            {
              title: 'Intermediate',
              content: (
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                  repellendus?
                </p>
              ),
            },
            {
              title: 'Advanced',
              content: (
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                  repellendus?
                </p>
              ),
            },
          ]}
        ></Dropdown>
      </section>
    </>
  );
};
export default LessonPage;
