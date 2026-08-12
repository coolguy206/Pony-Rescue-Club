import { SplitSection } from '@/components/ui/SplitSection';
import { FeatureBlocks } from '@/components/ui/FeatureBlocks';
import FreePonyRidesD from '@/assets/pony-rides/free-pony-rides-d.jpg';
import FreePonyRidesM from '@/assets/pony-rides/free-pony-rides-m.jpg';
import MeetThePoniesD from '@/assets/pony-rides/meet-the-ponies-d.jpg';
import MeetThePoniesM from '@/assets/pony-rides/meet-the-ponies-m.jpg';
import HandsOnD from '@/assets/pony-rides/hands-on-learning-d.jpg';
import HandsOnM from '@/assets/pony-rides/hands-on-learning-m.jpg';
import TimeInD from '@/assets/pony-rides/time-in-the-saddle-d.jpg';
import TimeInM from '@/assets/pony-rides/time-in-the-saddle-m.jpg';
import ImportantD from '@/assets/pony-rides/important-rider-d.jpg';
import ImportantM from '@/assets/pony-rides/important-rider-m.jpg';

export const PonyRidesPage = () => {
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
      lg: ``,
      xl: `xl:w-3/8`,
      xl2: ``,
    },

    imageContainer: {
      mobile: `w-full`,
      sm: ``,
      md: ` md:w-1/2`,
      lg: ``,
      xl: `xl:w-5/8`,
      xl2: ``,
    },

    h2: {
      mobile: `absolute top-[-40vw] mx-auto mb-5 w-full font-archivo text-[9vw] leading-tight font-bold text-white [text-shadow:_2px_2px_0_#000]`,
      sm: ``,
      md: `md:relative md:top-0 md:w-full md:text-[4vw] md:leading-none md:text-black md:text-shadow-none`,
      lg: ``,
      xl: `xl:text-[3vw]`,
      xl2: `2xl:text-[48px]`,
    },

    h3: {
      mobile: `mb-5 mx-auto w-full font-inter font-bold text-[6vw] leading-tight`,
      sm: ``,
      md: `md:text-[3vw]`,
      lg: ``,
      xl: `xl:text-[2vw]`,
      xl2: `2xl:text-[32px]`,
    },

    p: {
      mobile: `mx-auto mb-10 w-full font-inter text-[3.9vw] leading-tight`,
      sm: ``,
      md: `md:text-[1.9vw]`,
      lg: `lg:text-[1.6vw]`,
      xl: `xl:text-[1.2vw]`,
      xl2: `2xl:text-base`,
    },
  };

  const meetPonies = {
    divContainer: {
      mobile: `bg-[#FDE6C6] p-5 relative`,
      sm: `sm:w-full`,
      md: ` md:p-0  md:w-1/2`,
      lg: ``,
      xl: ``,
      xl2: ``,
    },

    textContainer: {
      mobile: `flex flex-wrap items-center justify-center py-10 text-center`,
      sm: ``,
      md: `md:bg-[#FDE6C6] md:p-5`,
      lg: `lg:relative lg:bottom-0 lg:left-0 lg:w-full lg:-translate-x-0`,
      xl: `xl:absolute xl:bottom-10 xl:left-1/2 xl:w-1/2 xl:-translate-x-1/2`,
      xl2: ``,
    },

    h2: {
      mobile: `mb-5 font-inter text-[8vw] font-bold`,
      sm: ``,
      md: `md:text-[4vw]`,
      lg: ``,
      xl: `xl:mb-5 xl:text-[2vw]`,
      xl2: `2xl:text-[32px]`,
    },

    p: {
      mobile: `text-[4vw] mx-auto font-inter mb-10`,
      sm: ``,
      md: `md:text-[2vw]`,
      lg: `lg:text-[1.7vw]`,
      xl: `xl:text-[1.2vw] xl:mb-5`,
      xl2: `2xl:text-base`,
    },
  };

  return (
    <>
      <SplitSection
        title={
          <>
            Free Pony Rides
            <br /> on Sundays!
          </>
        }
        subTitle={
          <>
            Every Sunday | 100% Free
            <br /> All Are Welcome
          </>
        }
        description={
          <>
            Every week, we open our barn doors to the
            <br className="block lg:hidden" /> community for an
            <br className="hidden lg:block" /> afternoon of hands-on fun and
            <br className="block lg:hidden" /> pony friendship. Whether your
            <br className="hidden lg:block" /> little one is an
            <br className="block lg:hidden" /> aspiring rider or just loves
            animals, Pony Sundays
            <br className="hidden lg:block" /> are
            <br className="block lg:hidden" /> the perfect way to experience
            life at the stables.
          </>
        }
        buttonText="Get Directiions"
        buttonLink="https://www.google.com/maps/place/Mill-wood+Ranch/@37.5982148,-122.4699261,17z/data=!4m15!1m8!3m7!1s0x808f7098a37b93e3:0x2ac8b9682fbc8206!2s1+Picardo+Ranch,+Pacifica,+CA+94044!3b1!8m2!3d37.5982148!4d-122.4699261!16s%2Fg%2F11r1s87pry!3m5!1s0x808f7098a31e5633:0xefb4873cc640f1b6!8m2!3d37.5981161!4d-122.4699748!16s%2Fg%2F1tdd0xyn?entry=ttu&g_ep=EgoyMDI2MDgwMi4wIKXMDSoASAFQAw%3D%3D"
        imagePosition="left"
        imageSrcD={FreePonyRidesD}
        imageSrcM={FreePonyRidesM}
        CTANewTab={true}
        sectionClasses={`${hero.section.mobile} ${hero.section.sm} ${hero.section.md} ${hero.section.lg} ${hero.section.xl} ${hero.section.xl2}`}
        textContainerClasses={`${hero.textContainer.mobile} ${hero.textContainer.sm} ${hero.textContainer.md} ${hero.textContainer.lg} ${hero.textContainer.xl} ${hero.textContainer.xl2}`}
        imageContainerClasses={`${hero.imageContainer.mobile} ${hero.imageContainer.sm} ${hero.imageContainer.md} ${hero.imageContainer.lg} ${hero.imageContainer.xl} ${hero.imageContainer.xl2}`}
        h2Classes={`${hero.h2.mobile} ${hero.h2.sm} ${hero.h2.md} ${hero.h2.lg} ${hero.h2.xl} ${hero.h2.xl2}`}
        h3Classes={`${hero.h3.mobile} ${hero.h3.sm} ${hero.h3.md} ${hero.h3.lg} ${hero.h3.xl} ${hero.h3.xl2}`}
        pClasses={`${hero.p.mobile} ${hero.p.sm} ${hero.p.md} ${hero.p.lg} ${hero.p.xl} ${hero.p.xl2}`}
      />

      <section className="my-10 w-full">
        <h2 className="text-center font-inter text-[7vw] leading-tight font-bold md:text-[4vw] xl:text-[3vw] 2xl:text-[40px]">
          Saddle Up for Smiles:
          <br /> Experience the Joy of
          <br className="block md:hidden" /> Pony Rides!
        </h2>
      </section>

      <FeatureBlocks
        imageSrcD={MeetThePoniesD}
        imageSrcM={MeetThePoniesM}
        title="Meet the Ponies"
        description={
          <>
            Get up close and personal with our
            <br /> gentlest team members.
          </>
        }
        buttonText=""
        buttonLink=""
        imageAlt="girl petting a horse head"
        divContainerClasses={`${meetPonies.divContainer.mobile} ${meetPonies.divContainer.sm} ${meetPonies.divContainer.md} ${meetPonies.divContainer.lg} ${meetPonies.divContainer.xl} ${meetPonies.divContainer.xl2}`}
        textContainerClasses={`${meetPonies.textContainer.mobile} ${meetPonies.textContainer.sm} ${meetPonies.textContainer.md} ${meetPonies.textContainer.lg} ${meetPonies.textContainer.xl} ${meetPonies.textContainer.xl2}`}
        h2Classes={`${meetPonies.h2.mobile} ${meetPonies.h2.sm} ${meetPonies.h2.md} ${meetPonies.h2.lg} ${meetPonies.h2.xl} ${meetPonies.h2.xl2}`}
        pClasses={`${meetPonies.p.mobile} ${meetPonies.p.sm} ${meetPonies.p.md} ${meetPonies.p.lg} ${meetPonies.p.xl} ${meetPonies.p.xl2}`}
      />

      <FeatureBlocks
        imageSrcD={HandsOnD}
        imageSrcM={HandsOnM}
        title="Hands-on Learning"
        description={
          <>
            Discover how to groom a pony and
            <br /> learn the basics of stable care.
          </>
        }
        buttonText=""
        buttonLink=""
        divContainerClasses={`${meetPonies.divContainer.mobile} ${meetPonies.divContainer.sm} ${meetPonies.divContainer.md} ${meetPonies.divContainer.lg} ${meetPonies.divContainer.xl} ${meetPonies.divContainer.xl2}`}
        textContainerClasses={`${meetPonies.textContainer.mobile} ${meetPonies.textContainer.sm} ${meetPonies.textContainer.md} ${meetPonies.textContainer.lg} ${meetPonies.textContainer.xl} ${meetPonies.textContainer.xl2}`}
        h2Classes={`${meetPonies.h2.mobile} ${meetPonies.h2.sm} ${meetPonies.h2.md} ${meetPonies.h2.lg} ${meetPonies.h2.xl} ${meetPonies.h2.xl2}`}
        pClasses={`${meetPonies.p.mobile} ${meetPonies.p.sm} ${meetPonies.p.md} ${meetPonies.p.lg} ${meetPonies.p.xl} ${meetPonies.p.xl2}`}
      />

      <FeatureBlocks
        imageSrcD={TimeInD}
        imageSrcM={TimeInM}
        title="Time in the Saddle"
        description={
          <>
              Confident beginners will have the
              <br /> chance to take a guided ride!
          </>
        }
        buttonText=""
        buttonLink=""
        imageAlt="group of horseback riders"
        divContainerClasses={`${meetPonies.divContainer.mobile} ${meetPonies.divContainer.sm} ${meetPonies.divContainer.md} ${meetPonies.divContainer.lg} ${meetPonies.divContainer.xl} ${meetPonies.divContainer.xl2}`}
        textContainerClasses={`${meetPonies.textContainer.mobile} ${meetPonies.textContainer.sm} ${meetPonies.textContainer.md} ${meetPonies.textContainer.lg} ${meetPonies.textContainer.xl} ${meetPonies.textContainer.xl2}`}
        h2Classes={`${meetPonies.h2.mobile} ${meetPonies.h2.sm} ${meetPonies.h2.md} ${meetPonies.h2.lg} ${meetPonies.h2.xl} ${meetPonies.h2.xl2}`}
        pClasses={`${meetPonies.p.mobile} ${meetPonies.p.sm} ${meetPonies.p.md} ${meetPonies.p.lg} ${meetPonies.p.xl} ${meetPonies.p.xl2}`}
      />

      <FeatureBlocks
        imageSrcD={ImportantD}
        imageSrcM={ImportantM}
        title="Important Rider Safety"
        description={
          <>
            We welcome pony-lovers of all ages!
            <br className="block lg:hidden" /> To ensure everyone
            <br className="hidden lg:block" /> has a safe and
            <br className="block lg:hidden" /> happy experience in the saddle,
            we
            <br className="block lg:hidden" /> ask
            <br className="hidden lg:block" /> that all riders meet these two
            <br className="block lg:hidden" /> simple requirements:
          </>
        }
        buttonText=""
        buttonLink=""
        listItems={[
          <>
            Balance: Riders must be able to sit upright on the pony
            independently.
          </>,
          <>
            Confidence: Riders should feel comfortable holding onto the
            saddle/reins themselves.
          </>,
        ]}
        divContainerClasses={`${meetPonies.divContainer.mobile} ${meetPonies.divContainer.sm} ${meetPonies.divContainer.md} ${meetPonies.divContainer.lg} ${meetPonies.divContainer.xl} ${meetPonies.divContainer.xl2}`}
        textContainerClasses={`${meetPonies.textContainer.mobile} ${meetPonies.textContainer.sm} ${meetPonies.textContainer.md} ${meetPonies.textContainer.lg} ${meetPonies.textContainer.xl} ${meetPonies.textContainer.xl2} xl:w-3/4`}
        h2Classes={`${meetPonies.h2.mobile} ${meetPonies.h2.sm} ${meetPonies.h2.md} ${meetPonies.h2.lg} ${meetPonies.h2.xl} ${meetPonies.h2.xl2}`}
        pClasses={`${meetPonies.p.mobile} ${meetPonies.p.sm} ${meetPonies.p.md} ${meetPonies.p.lg} ${meetPonies.p.xl} ${meetPonies.p.xl2}`}
      />
    </>
  );
};
