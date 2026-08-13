import { FeatureBlocks } from '@/components/ui/FeatureBlocks';
import { SplitSection } from '@/components/ui/SplitSection';
import { EventCard } from '@/components/ui/EventCard';
import { CTA } from '@/components/ui/CTA';
import ridingLessonsD from '@/assets/hp/riding-lessons-d.webp';
import ridingLessonsM from '@/assets/hp/riding-lessons-m.webp';
import ponyRidesD from '@/assets/hp/pony-rides-d.webp';
import ponyRidesM from '@/assets/hp/pony-rides-m.webp';
import horseCampD from '@/assets/hp/horse-camp-d.webp';
import horseCampM from '@/assets/hp/horse-camp-m.webp';
import meetAnnieD from '@/assets/hp/meet-annie-d.webp';
import meetAnnieM from '@/assets/hp/meet-annie-m.webp';
import getTogether13D from '@/assets/hp/get-together-13-d.webp';
import getTogether13M from '@/assets/hp/get-together-13-m.webp';
import overnightCampingD from '@/assets/hp/overnight-camping-d.webp';
import overnightCampingM from '@/assets/hp/overnight-camping-m.webp';
import MHAD from '@/assets/hp/MHA-show-d.webp';
import MHAM from '@/assets/hp/MHA-show-m.webp';

export const HomePage = () => {
  const hero = {
    divContainer: {
      mobile: ``,
      sm: ``,
      md: ``,
      lg: ``,
      xl: ``,
      xl2: ``,
    },

    textContainer: {
      mobile: `absolute bottom-9 w-full text-center `,
      sm: ``,
      md: ``,
      lg: ``,
      xl: `xl:bottom-15 xl:left-1/2 xl:-translate-x-1/2`,
      xl2: ``,
    },

    h2: {
      mobile: `mb-5 font-inter text-[12vw] leading-none font-bold text-white`,
      sm: ``,
      md: `md:text-[5vw]`,
      lg: ``,
      xl: ``,
      xl2: `2xl:text-[48px]`,
    },

    p: {
      mobile: `mb-5 font-inter text-[6vw] leading-tight font-bold text-white`,
      sm: ``,
      md: `md:text-[3vw]`,
      lg: ``,
      xl: ``,
      xl2: `2xl:text-[24px]`,
    },
  };

  const camp = {
    section: {
      mobile: `relative flex w-full flex-wrap bg-[#FDE6C6]`,
      sm: ``,
      md: `md:flex-nowrap`,
      lg: ``,
      xl: ``,
      xl2: ``,
    },

    textContainer: {
      mobile: `h-[100vw] w-full`,
      sm: ``,
      md: ` md:h-auto md:w-1/2`,
      lg: ``,
      xl: ``,
      xl2: ``,
    },

    imageContainer: {
      mobile: `p-5 w-full`,
      sm: ``,
      md: `md:m-0 md:w-1/2 md:p-0`,
      lg: ``,
      xl: ``,
      xl2: ``,
    },

    h2: {
      mobile: `mx-auto mb-5 font-inter text-[9vw] leading-none font-bold`,
      sm: ``,
      md: `md:text-[4vw]`,
      lg: ``,
      xl: `xl:text-[3vw]`,
      xl2: `2xl:text-[48px]`,
    },

    p: {
      mobile: `mb-10 font-inter text-[5vw] leading-tight  `,
      sm: ``,
      md: `md:text-[2vw]`,
      lg: `lg:text-[1.6vw]`,
      xl: ``,
      xl2: `2xl:text-base`,
    },
  };

  return (
    <>
      <FeatureBlocks
        imageSrcD={ridingLessonsD}
        imageSrcM={ridingLessonsM}
        title="Riding Lessons"
        description="Build skills and confidence."
        buttonText="View Details"
        buttonLink="/riding-lessons"
        imageAlt="Riding Lessons"
        textContainerClasses={`${hero.textContainer.mobile} ${hero.textContainer.sm} ${hero.textContainer.md} ${hero.textContainer.lg} ${hero.textContainer.xl} ${hero.textContainer.xl2}`}
        h2Classes={`${hero.h2.mobile} ${hero.h2.sm} ${hero.h2.md} ${hero.h2.lg} ${hero.h2.xl} ${hero.h2.xl2}`}
        pClasses={`${hero.p.mobile} ${hero.p.sm} ${hero.p.md} ${hero.p.lg} ${hero.p.xl} ${hero.p.xl2}`}
      />

      <FeatureBlocks
        imageSrcD={ponyRidesD}
        imageSrcM={ponyRidesM}
        title="Free Pony Rides!"
        description="Perfect for young beginners."
        buttonText="Learn More"
        buttonLink="/pony-rides"
        imageAlt="Free Pony Rides!"
        textContainerClasses={`${hero.textContainer.mobile} ${hero.textContainer.sm} ${hero.textContainer.md} ${hero.textContainer.lg} ${hero.textContainer.xl} ${hero.textContainer.xl2}`}
        h2Classes={`${hero.h2.mobile} ${hero.h2.sm} ${hero.h2.md} ${hero.h2.lg} ${hero.h2.xl} ${hero.h2.xl2}`}
        pClasses={`${hero.p.mobile} ${hero.p.sm} ${hero.p.md} ${hero.p.lg} ${hero.p.xl} ${hero.p.xl2}`}
      />

      <SplitSection
        title={
          <>
            Discover Annie’s
            <br className="block xl:hidden" /> Horse Camp
          </>
        }
        description={
          <>
            Hands-on stable care, outdoor
            <br className="block lg:hidden" /> fitness, and unforgettable
            <br className="" />
            saddle time for young riders
            <br className="block lg:hidden" /> (ages 6+). Whether joining
            <br className="hidden lg:block" /> for a
            <br className="block lg:hidden" /> day or a full week, our
            <br className="block lg:hidden" /> community-driven camp is a
            <br className="hidden lg:block" />
            <br className="block lg:hidden" /> hidden gem at Millwood Ranch.
          </>
        }
        buttonText="See Camp Details"
        buttonLink="/horse-camp"
        imageSrcD={horseCampD}
        imageSrcM={horseCampM}
        imageAlt="Annie’s Horse Camp"
        imagePosition="right"
        sectionClasses={`${camp.section.mobile} ${camp.section.sm} ${camp.section.md} ${camp.section.lg} ${camp.section.xl} ${camp.section.xl2}`}
        textContainerClasses={`${camp.textContainer.mobile} ${camp.textContainer.sm} ${camp.textContainer.md} ${camp.textContainer.lg} ${camp.textContainer.xl} ${camp.textContainer.xl2}`}
        imageContainerClasses={`${camp.imageContainer.mobile} ${camp.imageContainer.sm} ${camp.imageContainer.md} ${camp.imageContainer.lg} ${camp.imageContainer.xl} ${camp.imageContainer.xl2}`}
        h2Classes={`${camp.h2.mobile} ${camp.h2.sm} ${camp.h2.md} ${camp.h2.lg} ${camp.h2.xl} ${camp.h2.xl2}`}
        pClasses={`${camp.p.mobile} ${camp.p.sm} ${camp.p.md} ${camp.p.lg} ${camp.p.xl} ${camp.p.xl2}`}
      />

      <SplitSection
        title={
          <>
            Meet Your
            <br className="block xl:hidden" /> Instructor, Annie
          </>
        }
        description={
          <>
            with decades of experience and a<br /> deep love for equine
            rescue...
          </>
        }
        buttonText="Read Annie’s Story"
        buttonLink="/meet-annie"
        imageSrcD={meetAnnieD}
        imageSrcM={meetAnnieM}
        imageAlt="Annie Erwin"
        imagePosition="left"
        sectionClasses={`${camp.section.mobile} ${camp.section.sm} ${camp.section.md} ${camp.section.lg} ${camp.section.xl} ${camp.section.xl2}`}
        textContainerClasses={`${camp.textContainer.mobile} ${camp.textContainer.sm} ${camp.textContainer.md} ${camp.textContainer.lg} ${camp.textContainer.xl} ${camp.textContainer.xl2}`}
        imageContainerClasses={`${camp.imageContainer.mobile} ${camp.imageContainer.sm} ${camp.imageContainer.md} ${camp.imageContainer.lg} ${camp.imageContainer.xl} ${camp.imageContainer.xl2}`}
        h2Classes={`${camp.h2.mobile} ${camp.h2.sm} ${camp.h2.md} ${camp.h2.lg} ${camp.h2.xl} ${camp.h2.xl2}`}
        pClasses={`${camp.p.mobile} ${camp.p.sm} ${camp.p.md} ${camp.p.lg} ${camp.p.xl} ${camp.p.xl2}`}
      />

      <h2 className="my-20 w-full text-center font-inter text-[8vw] font-bold capitalize md:text-[5vw] xl:text-[3vw] 2xl:text-[40px]">
        recent ranch events
      </h2>

      <section className="flex flex-wrap md:flex-nowrap md:gap-5 xl:mx-auto xl:gap-5">
        <EventCard
          title={
            <>
              Rescue Pony Club
              <br /> get together #13
            </>
          }
          imageSrcD={getTogether13D}
          imageSrcM={getTogether13M}
          imageAlt="horse"
          date="Sun, Jun 16, 2024"
          buttonText="View Details"
          buttonLink="https://www.facebook.com/events/440769655421264/?acontext=%7B%22event_action_history%22%3A[%7B%22surface%22%3A%22group%22%7D]%7D"
        />

        <EventCard
          title={
            <>
              Overnight camping
              <br /> at Jack Brooks in La honda
            </>
          }
          imageSrcD={overnightCampingD}
          imageSrcM={overnightCampingM}
          imageAlt="horse"
          date="Wed, Jul 30, 2025"
          buttonText="View Details"
          buttonLink="https://www.facebook.com/events/1064600998720679/?acontext=%7B%22event_action_history%22%3A[%7B%22surface%22%3A%22group%22%7D]%7D"
        />

        <EventCard
          title={
            <>
              Metropolitan Horsemen's
              <br /> Association hunter/jumper
              <br /> show at Sequoia Arena
            </>
          }
          imageSrcD={MHAD}
          imageSrcM={MHAM}
          imageAlt="horse"
          date="Sun, July 12, 2026"
          buttonText="View Details"
          buttonLink="https://www.mhaeastbay.org/event-calendar"
        />
      </section>

      <section className="mx-auto mt-20 flex flex-wrap items-start justify-center text-center xl:flex-nowrap xl:gap-10">
        <h2 className="mb-5 w-full font-inter text-[9vw] leading-none font-bold capitalize sm:text-[6vw] lg:text-[5vw] xl:w-auto xl:text-[3vw] 2xl:text-[40px]">
          Horse Lovers Unite!
        </h2>
        <p className="mb-10 w-full font-inter text-[4vw] leading-tight sm:text-[3vw] lg:text-[2vw] xl:w-auto 2xl:text-[24px]">
          Gallop into Fun and join our
          <br className="block sm:hidden" /> Facebook group
          <br className="hidden sm:block" /> to share your
          <br className="block sm:hidden" /> passion and ranch updates.
        </p>
        <CTA
          buttonText="Join Our Group"
          buttonLink="https://www.facebook.com/groups/rescueponyclub"
          backgroundColor="bg-[#A44203]"
          newTab={true}
        />
      </section>
    </>
  );
};
