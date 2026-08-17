import { useState } from 'react';
import { SplitSection } from '@/components/ui/SplitSection';
import { CTA } from '@/components/ui/CTA';
import { Form } from '@/components/utils/Form';
import LessonsTailoredD from '@/assets/riding-lessons/lessons-tailored-d.webp';
import LessonsTailoredM from '@/assets/riding-lessons/lessons-tailored-m.webp';
import EveryRiderD from '@/assets/riding-lessons/every-rider-d.webp';
import EveryRiderM from '@/assets/riding-lessons/every-rider-m.webp';
import HandsOnD from '@/assets/riding-lessons/hands-on-d.webp';
import HandsOnM from '@/assets/riding-lessons/hands-on-m.webp';
import ReadyD from '@/assets/riding-lessons/ready-d.webp';
import Video from '@/assets/riding-lessons/riding-horse.mp4';

export const RidingLessonsPage = () => {
  // 1. Create a state to track if the form modal is open or closed
  const [isFormOpen, setIsFormOpen] = useState(false);

  // 2. Helper functions to open and close the form
  const openForm = () => {
    setIsFormOpen(true);
  };
  const closeForm = () => {
    setIsFormOpen(false);
  };

  const hero = {
    section: {
      mobile: `relative flex w-full flex-wrap`,
      sm: ``,
      md: `md:bg-[#FDE6C6]`,
      lg: ``,
      xl: ``,
      xl2: ``,
    },

    textContainer: {
      mobile: `h-[80vw] w-full`,
      sm: ``,
      md: `md:h-auto md:w-1/2`,
      lg: `lg:w-3/8`,
      xl: ``,
      xl2: `mx-auto`,
    },

    imageContainer: {
      mobile: `w-full`,
      sm: ``,
      md: ` md:w-1/2`,
      lg: `lg:w-5/8`,
      xl: ``,
      xl2: ``,
    },

    h2: {
      mobile: `absolute top-[-129vw] left-0 w-full font-archivo text-[8vw] leading-none font-bold text-white`,
      sm: ``,
      md: `md:relative md:top-0 md:mb-5 md:text-[4vw] md:text-black`,
      lg: `lg:text-[3vw]`,
      xl: `xl:text-[2vw]`,
      xl2: `2xl:text-[35px]`,
    },

    h3: {
      mobile: `absolute top-[-150vw] w-full mx-auto mb-5 font-archivo text-[5vw] leading-tight font-bold text-white`,
      sm: ``,
      md: `md:relative md:top-0 md:text-black md:text-[3vw]`,
      lg: ``,
      xl: `xl:text-[1vw]`,
      xl2: `2xl:-[32px]`,
    },

    p: {
      mobile: `font-inter text-[9vw] leading-tight`,
      sm: ``,
      md: `md:mb-10 md:text-[24px]`,
      lg: ``,
      xl: `xl:w-full xl:text-[2vw]`,
      xl2: `2xl:text-[24px]`,
    },

    cta: {
      mobile: `absolute top-[-30vw] left-1/2 -translate-x-1/2 -translate-y-1/2 transform`,
      sm: ``,
      md: `md:relative md:top-0 md:left-0 md:-translate-x-0 md:-translate-y-0`,
      lg: ``,
      xl: ``,
      xl2: `2xl:text-base`,
    },
  };

  const everyRider = {
    section: {
      mobile: `relative flex w-full flex-wrap bg-[#FDE6C6]`,
      sm: ``,
      md: ``,
      lg: ``,
      xl: ``,
      xl2: ``,
    },

    textContainer: {
      mobile: `h-[130vw] w-full`,
      sm: ``,
      md: `md:h-[70vw] md:w-1/2`,
      lg: `lg:h-[70vw]`,
      xl: `xl:h-auto`,
      xl2: ``,
    },

    imageContainer: {
      mobile: `w-full`,
      sm: ``,
      md: ` md:w-1/2`,
      lg: ``,
      xl: ``,
      xl2: ``,
    },

    h2: {
      mobile: `mx-auto mb-5 w-full font-inter text-[6vw] leading-none font-bold`,
      sm: ``,
      md: `md:text-[4vw]`,
      lg: `lg:text-[3vw]`,
      xl: `xl:text-[2vw]`,
      xl2: `2xl:text-[35px]`,
    },

    h3: {
      mobile: `absolute top-[-150vw] w-full mx-auto mb-5 font-archivo text-[5vw] leading-tight font-bold text-white`,
      sm: ``,
      md: `md:relative md:top-0 md:text-black md:text-[2vw]`,
      lg: ``,
      xl: `xl:text-[1.3vw]`,
      xl2: `2xl:-[24px]`,
    },

    p: {
      mobile: `mb-10 font-inter text-[4vw] leading-tight`,
      sm: ``,
      md: `md:text-[2vw]`,
      lg: `lg:text-[1.5vw]`,
      xl: `xl:text-[1.2vw]`,
      xl2: `2xl:text-base`,
    },
  };

  return (
    <>
      {isFormOpen && <Form onClose={closeForm} />}

      <SplitSection
        title={
          <>
            Lessons Tailored
            <br /> to Every Rider
          </>
        }
        description={
          <>
            Horseback riding
            <br /> lessons for all ages and
            <br /> skill levels at Millwood
            <br /> Ranch in Pacifica.
          </>
        }
        buttonText="Get Started"
        buttonLink="#"
        imageSrcD={LessonsTailoredD}
        imageSrcM={LessonsTailoredM}
        imageAlt="kids on horses smiling with a view of trees behind them"
        imagePosition="left"
        breakPoint="1024px"
        sectionClasses={`${hero.section.mobile} ${hero.section.sm} ${hero.section.md} ${hero.section.lg} ${hero.section.xl} ${hero.section.xl2}`}
        textContainerClasses={`${hero.textContainer.mobile} ${hero.textContainer.sm} ${hero.textContainer.md} ${hero.textContainer.lg} ${hero.textContainer.xl} ${hero.textContainer.xl2}`}
        imageContainerClasses={`${hero.imageContainer.mobile} ${hero.imageContainer.sm} ${hero.imageContainer.md} ${hero.imageContainer.lg} ${hero.imageContainer.xl} ${hero.imageContainer.xl2}`}
        h2Classes={`${hero.h2.mobile} ${hero.h2.sm} ${hero.h2.md} ${hero.h2.lg} ${hero.h2.xl} ${hero.h2.xl2}`}
        pClasses={`${hero.p.mobile} ${hero.p.sm} ${hero.p.md} ${hero.p.lg} ${hero.p.xl} ${hero.p.xl2}`}
        CTAClasses={`${hero.cta.mobile} ${hero.cta.sm} ${hero.cta.md} ${hero.cta.lg} ${hero.cta.xl} ${hero.cta.xl2}`}
        onClick={openForm}
      />

      <SplitSection
        title={
          <>
            Every rider is unique—so
            <br /> every lesson is, too.
          </>
        }
        description={
          <>
            Annie customizes each session to match your
            <br className="block lg:hidden" /> experience
            <br className="hidden lg:block" /> level, your personal goals, and
            how
            <br className="block lg:hidden" /> you are feeling that day.
            <br className="hidden lg:block" /> For younger or newer
            <br className="block lg:hidden" /> riders, the journey begins with
            <br className="hidden lg:block" /> foundational
            <br className="block lg:hidden" /> basics before advancing to
            independent riding:
          </>
        }
        buttonText=""
        buttonLink=""
        imageSrcD={EveryRiderD}
        imageSrcM={EveryRiderM}
        imageAlt="Annie giving directions to a rider on a horse"
        imagePosition="right"
        sectionClasses={`${everyRider.section.mobile} ${everyRider.section.sm} ${everyRider.section.md} ${everyRider.section.lg} ${everyRider.section.xl} ${everyRider.section.xl2}`}
        textContainerClasses={`${everyRider.textContainer.mobile} ${everyRider.textContainer.sm} ${everyRider.textContainer.md} ${everyRider.textContainer.lg} ${everyRider.textContainer.xl} ${everyRider.textContainer.xl2}`}
        imageContainerClasses={`${everyRider.imageContainer.mobile} ${everyRider.imageContainer.sm} ${everyRider.imageContainer.md} ${everyRider.imageContainer.lg} ${everyRider.imageContainer.xl} ${everyRider.imageContainer.xl2}`}
        h2Classes={`${everyRider.h2.mobile} ${everyRider.h2.sm} ${everyRider.h2.md} ${everyRider.h2.lg} ${everyRider.h2.xl} ${everyRider.h2.xl2}`}
        pClasses={`${everyRider.p.mobile} ${everyRider.p.sm} ${everyRider.p.md} ${everyRider.p.lg} ${everyRider.p.xl} ${everyRider.p.xl2}`}
        listItems={[
          <>
            <strong>Groundwork & Leading:</strong> Learning how to safely handle
            and communicate with the horse from the ground.
          </>,
          <>
            <strong>Building Confidence:</strong> Getting comfortable in the
            saddle and mastering balance.
          </>,
          <>
            <strong>Independent Riding:</strong> Moving at your own pace toward
            advanced control and techniques.
          </>,
        ]}
      />

      <SplitSection
        title="Hands-On Horsemanship"
        subTitle={
          <>
            Great riders aren’t made just by sitting
            <br /> in a saddle for an hour.
          </>
        }
        description={
          <>
            At Millwood Ranch, lessons go far beyond the
            <br className="block lg:hidden" /> arena. You will dive
            <br className="hidden lg:block" /> into immersive, hands-on care
            <br className="block lg:hidden" /> to truly understand how horses
            think,
            <br className="hidden lg:block" /> react, and
            <br className="block lg:hidden" /> communicate—building the deep
            connection and
            <br className="block lg:hidden" /> real
            <br className="hidden lg:block" /> knowledge that makes you a truly
            skilled rider.
          </>
        }
        buttonText=""
        buttonLink=""
        imageSrcD={HandsOnD}
        imageSrcM={HandsOnM}
        imageAlt="Annie giving directions to a rider on a horse"
        imagePosition="left"
        sectionClasses={`${everyRider.section.mobile} ${everyRider.section.sm} ${everyRider.section.md} ${everyRider.section.lg} ${everyRider.section.xl} ${everyRider.section.xl2}`}
        textContainerClasses={`${everyRider.textContainer.mobile} ${everyRider.textContainer.sm} ${everyRider.textContainer.md} ${everyRider.textContainer.lg} ${everyRider.textContainer.xl} ${everyRider.textContainer.xl2} h-[190vw] md:h-[90vw] lg:h-[80vw] xl:!h-[45vw] 2xl:!h-[578px]`}
        imageContainerClasses={`${everyRider.imageContainer.mobile} ${everyRider.imageContainer.sm} ${everyRider.imageContainer.md} ${everyRider.imageContainer.lg} ${everyRider.imageContainer.xl} ${everyRider.imageContainer.xl2}`}
        h2Classes={`${everyRider.h2.mobile} ${everyRider.h2.sm} ${everyRider.h2.md} ${everyRider.h2.lg} ${everyRider.h2.xl} ${everyRider.h2.xl2}`}
        h3Classes="font-inter leading-tight font-bold mb-5 text-[4vw] md:text-[2vw] xl:text-[1.5vw] 2xl:text-[24px]"
        pClasses={`${everyRider.p.mobile} ${everyRider.p.sm} ${everyRider.p.md} ${everyRider.p.lg} ${everyRider.p.xl} ${everyRider.p.xl2}`}
        listItems={[
          <>
            <strong>Grooming & Tack Care:</strong> Master the art of proper
            brushing, coat maintenance, and caring for riding equipment to
            ensure your horse's comfort.
          </>,
          <>
            <strong>Feeding & Nutrition:</strong> Discover what horses eat, how
            their dietary needs change, and what it takes to keep them healthy
            and strong.
          </>,
          <>
            <strong>Stable Management:</strong> Gain real, behind-the-scenes
            experience with stall care, safety protocols, and daily ranch
            operations.
          </>,
          <>
            <strong>Horse Psychology:</strong> Learn how to read equine body
            language and pick up real knowledge about how horses think and what
            they need from you.
          </>,
        ]}
      />

      <section className="bg-[#5D6615] text-white flex w-full flex-wrap justify-center py-20 text-center xl:flex-nowrap xl:items-center xl:gap-5">
        <h2 className="mb-5 w-full font-inter text-[6vw] leading-none font-bold capitalize md:text-[4vw] lg:text-[3vw] xl:m-0 xl:w-1/2 xl:text-right xl:text-[2vw] 2xl:text-[35px]">
          Private & Group Placements
        </h2>
        <p className="font-inter text-[4vw] leading-tight md:text-[2vw] lg:text-[2vw] xl:mx-0 xl:w-1/2 xl:text-left xl:text-[1.2vw] 2xl:text-base">
          We offer both individual and group sessions.
          <br className="block lg:hidden" /> Annie evaluates
          <br className="hidden lg:block" /> each rider’s goals and current
          skill
          <br className="block lg:hidden" /> level to place you in the safest,
          <br className="hidden lg:block" /> most rewarding
          <br className="block lg:hidden" /> environment for your progress.
        </p>
      </section>

      <section className="relative w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={ReadyD}
          className="w-full"
        >
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="mt-10 text-center xl:absolute xl:right-10 xl:bottom-20 xl:flex xl:h-[35%] xl:w-[40vw] xl:flex-wrap xl:items-center xl:bg-[#FDE6C6] xl:p-0 2xl:w-[614px]">
          <div className="w-full">
            <h2 className="mb-5 w-full font-inter text-[6vw] leading-none font-bold md:text-[4vw] lg:text-[3vw] xl:text-[2vw] 2xl:text-[35px]">
              Ready to Begin Your Journey?
            </h2>
            <p className="mx-auto mb-10 w-full font-inter text-[4vw] leading-tight md:text-[2vw] lg:text-[2vw] xl:text-[1.1vw] 2xl:text-base">
              Whether you are climbing into the saddle for the
              <br className="block lg:hidden" /> very first time, or an
              <br className="hidden lg:block" />
              experienced rider returning to
              <br className="block lg:hidden" /> the ranch—your perfect lesson
              is waiting.
              <br className="hidden lg:block" /> Come
              <br className="block lg:hidden" /> discover true horsemanship at
              Millwood Ranch.
            </p>
            <CTA
              buttonText="Get Started"
              buttonLink="#"
              className="mx-auto"
              onClick={openForm}
            />
          </div>
        </div>
      </section>
    </>
  );
};
