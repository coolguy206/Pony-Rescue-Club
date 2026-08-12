import { Picture } from '@/components/ui/Picture';
import RiderGuideD from '@/assets/rider-guidelines/rider-guidelines-d.jpg';
import RiderGuideM from '@/assets/rider-guidelines/rider-guidelines-m.jpg';

import React from 'react';

type Props = {
  className?: string;
  p: React.ReactNode;
};

const Columns = ({ className, p }: Props) => {
  return (
    <>
      <div
        className={`w-full p-5 font-inter text-[5vw] leading-snug md:w-1/2 md:text-[3vw] lg:text-[2vw] xl:text-[1.8vw] 2xl:text-[24px] 2xl:p-10 ${className}`}
      >
        <p>{p}</p>
      </div>
    </>
  );
};

export const RidingGuidelinesPage = () => {
  return (
    <>
      <section className="relative w-full font-inter leading-tight text-white">
        <div className="absolute top-[4%] left-0 w-full md:top-[7%] md:left-[3%] md:w-auto">
          <h1 className="mb-5 w-full text-center font-archivo text-[8vw] md:text-left md:text-[6vw] [text-shadow:_2px_2px_0_#000] lg:text-[5vw] 2xl:text-[80px]">
            Rider Guidelines
            <br className="block lg:hidden" /> &
            <br className="hidden lg:block" />
            Etiquette
          </h1>
          <p className="w-full text-center text-[4vw] md:text-left md:text-[2vw] [text-shadow:_1px_1px_0_#000] 2xl:text-[32px]">
            Everything you need to know for a safe,
            <br /> comfortable, and smooth day at the ranch.
          </p>
        </div>
        <Picture
          imageSrcD={RiderGuideD}
          imageSrcM={RiderGuideM}
          imageAlt="Rider on a horse with hills behind"
          breakPoint="768px"
        />
      </section>

      <h2 className="my-5 w-full text-center font-inter text-[8vw] font-bold md:text-[5vw] lg:text-[4vw] xl:text-[3vw] 2xl:text-[40px]">
        What to Wear
      </h2>

      <section className="flex w-full flex-wrap p-5">
        <Columns
          className="bg-[#5D6615] text-white"
          p={
            <>
              <strong>Footwear:</strong> Closed-toe boots or shoes.
              <br />
              <br />
              <strong>Pants:</strong> Long pants or jeans to prevent chafing. No
              shorts.
              <br />
              <br />
              <strong>Layers:</strong> Pacifica weather
              <br className="block lg:hidden" /> changes quickly! We highly
              <br className="block lg:hidden" /> recommend wearing a close-
              <br className="block lg:hidden" />
              fitting jacket, sweater, or
              <br className="block lg:hidden" /> windbreaker that you can
              <br className="block lg:hidden" /> remove as you warm up.
            </>
          }
        />

        <Columns
          className="bg-[#FDE6C6]"
          p={
            <>
              <strong>Helmets:</strong> ASTM/SEI-certified
              <br className="block lg:hidden" /> equestrian helmets are
              <br className="block lg:hidden" /> required at all times while
              <br className="block lg:hidden" /> mounted. (Helmets available to
              <br className="block lg:hidden" /> borrow).
              <br />
              <br />
              <strong>Attire Rules:</strong> Avoid loose
              <br className="block lg:hidden" /> scarves or dangling jewelry.
            </>
          }
        />
      </section>

      <h2 className="my-5 w-full text-center font-inter text-[8vw] font-bold md:text-[5vw] lg:text-[4vw] xl:text-[3vw] 2xl:text-[40px]">
        Arrival & Scheduling
      </h2>

      <section className="flex w-full flex-wrap p-5">
        <Columns
          className="bg-[#5D6615] text-white md:w-full"
          p={
            <>
              <strong>Check-In:</strong> Arrive 10–15 minutes
              <br className="block md:hidden" /> prior to your scheduled lesson
              <br className="block md:hidden" /> time to fill out paperwork and
              <br className="block md:hidden" /> sign waivers as needed.
              <br />
              <br />
              <strong>Weather Policy:</strong> Lessons run
              <br className="block md:hidden" /> rain or shine in our covered
              <br className="block md:hidden" /> arena. In extreme weather
              <br className="block md:hidden" /> (lightning, excessive heat
              <br className="block md:hidden" />
              /cold), lessons transition to
              <br className="block md:hidden" /> ground-school and
              <br className="block md:hidden" /> horsemanship skills.
            </>
          }
        />
      </section>

      <h2 className="my-5 w-full text-center font-inter text-[8vw] font-bold md:text-[5vw] lg:text-[4vw] xl:text-[3vw] 2xl:text-[40px]">
        Barn & Arena Safety
      </h2>

      <section className="flex w-full flex-wrap p-5">
        <Columns
          className="bg-[#FDE6C6]"
          p={
            <>
              <strong>Safety First:</strong> No running,
              <br className="block lg:hidden" /> screaming, or sudden
              <br className="block lg:hidden" /> movements around the horses.
              <br />
              <br />
              <strong>Grooming & Tack:</strong> Students
              <br className="block lg:hidden" /> learn to groom and tack their
              <br className="block lg:hidden" /> horses before and/or after
              <br className="block lg:hidden" /> lessons as part of standard
              <br className="block lg:hidden" /> horsemanship.
            </>
          }
        />

        <Columns
          className="bg-[#5D6615] text-white"
          p={
            <>
              <strong>Treats:</strong> Always ask an
              <br className="block lg:hidden" /> instructor before feeding
              <br className="block lg:hidden" /> treats. Give treats flat-handed
              <br className="block lg:hidden" /> only.
              <br />
              <br />
              <strong>Spectators:</strong> Friends and family
              <br className="block md:hidden" /> must watch from designated
              <br className="block md:hidden" /> seating areas outside the arena
              <br className="block md:hidden" /> fence.
            </>
          }
        />
      </section>
    </>
  );
};
