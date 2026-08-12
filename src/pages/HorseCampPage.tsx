import { SplitSection } from '@/components/ui/SplitSection';
import { CTA } from '@/components/ui/CTA';
import UnforgettableD from '@/assets/horse-camp/unforgettable-week-d.jpg';
import UnforgettableM from '@/assets/horse-camp/unforgettable-week-m.jpg';
import CampDetailsD from '@/assets/horse-camp/camp-details-d.jpg';
import CampDetailsM from '@/assets/horse-camp/camp-details-m.jpg';
import GearPrepD from '@/assets/horse-camp/gear-prep-d.jpg';
import GearPrepM from '@/assets/horse-camp/gear-prep-m.jpg';

export const HorseCampPage = () => {
  const hero = {
    section: {
      mobile: `relative flex flex-wrap w-full`,
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
      xl: `xl:h-auto xl:w-3/8`,
      xl2: ``,
    },

    imageContainer: {
      mobile: `w-full`,
      sm: ``,
      md: `md:w-1/2`,
      lg: ``,
      xl: `xl:w-5/8`,
      xl2: ``,
    },

    h2: {
      mobile: `absolute top-[-170vw] w-full mx-auto mb-5 font-archivo text-[7vw] leading-tight font-bold text-white [text-shadow:_2px_2px_0_#000]`,
      sm: ``,
      md: `md:relative md:top-0 md:text-black md:text-[4vw] md:text-shadow-none`,
      lg: `lg:text-[3vw]`,
      xl: `xl:text-[2vw]`,
      xl2: `2xl:text-[46px]`,
    },

    h3: {
      mobile: `absolute top-[-150vw] w-full mx-auto mb-5 font-inter text-[5vw] leading-tight font-bold text-white [text-shadow:_2px_2px_0_#000]`,
      sm: ``,
      md: `md:relative md:top-0 md:text-black md:text-[2vw] md:text-shadow-none`,
      lg: ``,
      xl: `xl:text-[1.5vw]`,
      xl2: `2xl:text-[32px]`,
    },

    p: {
      mobile: `mx-auto mb-10 w-full font-inter text-[4vw] leading-tight`,
      sm: ``,
      md: `md:text-[2vw]`,
      lg: ``,
      xl: `xl:text-[1.1vw]`,
      xl2: `2xl:text-base`,
    },
  };

  const camp = {
    section: {
      mobile: `relative flex flex-wrap w-full bg-[#5D6615]`,
      sm: ``,
      md: ``,
      lg: ``,
      xl: ``,
      xl2: ``,
    },

    textContainer: {
      mobile: `h-[280vw] w-full`,
      sm: ``,
      md: `md:w-1/2 md:h-[160vw]`,
      lg: `lg:h-[110vw]`,
      xl: `xl:h-auto`,
      xl2: ``,
    },

    imageContainer: {
      mobile: `w-full p-5`,
      sm: ``,
      md: `md:w-1/2 md:p-0`,
      lg: ``,
      xl: ``,
      xl2: ``,
    },

    h2: {
      mobile: `w-full mx-auto mb-5 font-inter text-[12vw] leading-tight font-bold text-white`,
      sm: ``,
      md: `md:text-[4vw]`,
      lg: ``,
      xl: `xl:text-[3vw]`,
      xl2: `2xl:text-[46px]`,
    },

    h3: {
      mobile: ``,
      sm: ``,
      md: ``,
      lg: ``,
      xl: ``,
      xl2: ``,
    },

    p: {
      mobile: `mx-auto mb-10 w-full font-inter text-[5vw] font-bold leading-tight p-5 flex flex-wrap gap-5`,
      sm: ``,
      md: `md:text-[3vw]`,
      lg: `lg:text-[2vw]`,
      xl: `xl:text-[1.2vw]`,
      xl2: `2xl:text-[24px] 2xl:flex 2xl:flex-wrap 2xl:justify-center`,
    },

    span: {
      mobile: `w-full h-[40vw] flex fex-wrap items-center justify-center bg-white odd:bg-[#FDE6C6]`,
      sm: ``,
      md: `md:h-[25vw]`,
      lg: `lg:h-[15vw]`,
      xl: `xl:h-[10vw] xl:w-[22vw] xl:[&:last-of-type]:w-[46vw] xl:[&:nth-of-type(3)]:bg-white xl:[&:nth-of-type(4)]:bg-[#FDE6C6] xl:[&:nth-of-type(5)]:bg-white`,
      xl2: `2xl:w-[354px] 2xl:[&:last-of-type]:w-[728px] `,
    },
  };

  const gear = {
    section: {
      mobile: `relative flex flex-wrap w-full bg-[#FDE6C6]`,
      sm: ``,
      md: ``,
      lg: ``,
      xl: ``,
      xl2: ``,
    },

    textContainer: {
      mobile: `h-[160vw] w-full`,
      sm: ``,
      md: `md:w-1/2 md:h-auto`,
      lg: ``,
      xl: ``,
      xl2: ``,
    },

    imageContainer: {
      mobile: `w-full p-5`,
      sm: ``,
      md: `md:w-1/2 md:p-0`,
      lg: ``,
      xl: ``,
      xl2: ``,
    },

    h2: {
      mobile: `w-full mx-auto mb-5 font-inter text-[10vw] leading-tight font-bold`,
      sm: ``,
      md: `md:text-[4vw]`,
      lg: ``,
      xl: `xl:text-[3vw]`,
      xl2: `2xl:text-[46px]`,
    },

    h3: {
      mobile: ``,
      sm: ``,
      md: ``,
      lg: ``,
      xl: ``,
      xl2: ``,
    },

    p: {
      mobile: `mx-auto mb-10 w-full font-inter text-[4vw] leading-tight text-center`,
      sm: ``,
      md: `md:text-[2vw]`,
      lg: ``,
      xl: `xl:text-[1.2vw]`,
      xl2: `2xl:text-base`,
    },
  };

  return (
    <>
      <SplitSection
        title={
          <>
            An Unforgettable
            <br /> Week at Horse Camp
          </>
        }
        subTitle={<>Presented by Rescue Pony Club</>}
        description={
          <>
            Give your kids an unforgettable, fun-filled day
            <br className="block xl:hidden" /> or week with horses!
            <br className="hidden xl:block" /> Located at the hidden
            <br className="block xl:hidden" /> gem of Millwood Ranch in
            Pacifica, our camp
            <br className="block xl:hidden" />
            <br className="hidden xl:block" /> offers hands-on experience,
            outdoor fitness,
            <br className="block xl:hidden" /> and a wonderful
            <br className="hidden xl:block" /> community for young riders
            <br className="block xl:hidden" /> and animal lovers alike.
          </>
        }
        buttonText=" Call or Text (415) 261-3433"
        buttonLink="tel:(415) 261-3433"
        imagePosition="left"
        imageSrcD={UnforgettableD}
        imageSrcM={UnforgettableM}
        CTANewTab={true}
        sectionClasses={`${hero.section.mobile} ${hero.section.sm} ${hero.section.md} ${hero.section.lg} ${hero.section.xl} ${hero.section.xl2}`}
        textContainerClasses={`${hero.textContainer.mobile} ${hero.textContainer.sm} ${hero.textContainer.md} ${hero.textContainer.lg} ${hero.textContainer.xl} ${hero.textContainer.xl2}`}
        imageContainerClasses={`${hero.imageContainer.mobile} ${hero.imageContainer.sm} ${hero.imageContainer.md} ${hero.imageContainer.lg} ${hero.imageContainer.xl} ${hero.imageContainer.xl2}`}
        h2Classes={`${hero.h2.mobile} ${hero.h2.sm} ${hero.h2.md} ${hero.h2.lg} ${hero.h2.xl} ${hero.h2.xl2}`}
        h3Classes={`${hero.h3.mobile} ${hero.h3.sm} ${hero.h3.md} ${hero.h3.lg} ${hero.h3.xl} ${hero.h3.xl2}`}
        pClasses={`${hero.p.mobile} ${hero.p.sm} ${hero.p.md} ${hero.p.lg} ${hero.p.xl} ${hero.p.xl2}`}
      />

      <SplitSection
        title="Camp Details"
        subTitle=""
        description={
          <>
            <span
              className={`${camp.span.mobile} ${camp.span.sm} ${camp.span.md} ${camp.span.lg} ${camp.span.xl} ${camp.span.xl2}`}
            >
              Ages: 6 years old and up
              <br /> (Perfect for total beginners!)
            </span>
            <span
              className={`${camp.span.mobile} ${camp.span.sm} ${camp.span.md} ${camp.span.lg} ${camp.span.xl} ${camp.span.xl2}`}
            >
              Schedule: Monday - Friday
              <br /> 9:00 AM – 2:00 PM
            </span>
            <span
              className={`${camp.span.mobile} ${camp.span.sm} ${camp.span.md} ${camp.span.lg} ${camp.span.xl} ${camp.span.xl2}`}
            >
              Cost:
              <br /> $100 per day
            </span>
            <span
              className={`${camp.span.mobile} ${camp.span.sm} ${camp.span.md} ${camp.span.lg} ${camp.span.xl} ${camp.span.xl2}`}
            >
              Sibling Discount: Only $80
              <br /> per child, per day when
              <br /> enrolling more than one child!
            </span>
            <span
              className={`${camp.span.mobile} ${camp.span.sm} ${camp.span.md} ${camp.span.lg} ${camp.span.xl} ${camp.span.xl2}`}
            >
              Extended After-Care:
              <br className="block xl:hidden" /> Need more time?
              <br className="hidden xl:block" /> Campers
              <br className="block xl:hidden" /> can hang out longer and
              <br className="block xl:hidden" /> enjoy extra
              <br className="hidden xl:block" /> ranch time for
              <br className="block xl:hidden" /> $20/hour after 2:00 PM.
            </span>
          </>
        }
        buttonText=""
        buttonLink=""
        imagePosition="right"
        imageSrcD={CampDetailsD}
        imageSrcM={CampDetailsM}
        CTANewTab={true}
        sectionClasses={`${camp.section.mobile} ${camp.section.sm} ${camp.section.md} ${camp.section.lg} ${camp.section.xl} ${camp.section.xl2}`}
        textContainerClasses={`${camp.textContainer.mobile} ${camp.textContainer.sm} ${camp.textContainer.md} ${camp.textContainer.lg} ${camp.textContainer.xl} ${camp.textContainer.xl2}`}
        imageContainerClasses={`${camp.imageContainer.mobile} ${camp.imageContainer.sm} ${camp.imageContainer.md} ${camp.imageContainer.lg} ${camp.imageContainer.xl} ${camp.imageContainer.xl2}`}
        h2Classes={`${camp.h2.mobile} ${camp.h2.sm} ${camp.h2.md} ${camp.h2.lg} ${camp.h2.xl} ${camp.h2.xl2}`}
        h3Classes={`${camp.h3.mobile} ${camp.h3.sm} ${camp.h3.md} ${camp.h3.lg} ${camp.h3.xl} ${camp.h3.xl2}`}
        pClasses={`${camp.p.mobile} ${camp.p.sm} ${camp.p.md} ${camp.p.lg} ${camp.p.xl} ${camp.p.xl2}`}
      />

      <SplitSection
        title="Gear & Preparation"
        subTitle=""
        description={
          <>
            To keep our campers safe,
            <br className="block xl:hidden" /> comfortable, and smiling all day
            <br className="block xl:hidden" /> long,
            <br className="hidden xl:block" /> please ensure your child
            <br className="block xl:hidden" /> arrives with the following items:
          </>
        }
        buttonText=""
        buttonLink=""
        imagePosition="left"
        imageSrcD={GearPrepD}
        imageSrcM={GearPrepM}
        CTANewTab={true}
        sectionClasses={`${gear.section.mobile} ${gear.section.sm} ${gear.section.md} ${gear.section.lg} ${gear.section.xl} ${gear.section.xl2}`}
        textContainerClasses={`${gear.textContainer.mobile} ${gear.textContainer.sm} ${gear.textContainer.md} ${gear.textContainer.lg} ${gear.textContainer.xl} ${gear.textContainer.xl2}`}
        imageContainerClasses={`${gear.imageContainer.mobile} ${gear.imageContainer.sm} ${gear.imageContainer.md} ${gear.imageContainer.lg} ${gear.imageContainer.xl} ${gear.imageContainer.xl2}`}
        h2Classes={`${gear.h2.mobile} ${gear.h2.sm} ${gear.h2.md} ${gear.h2.lg} ${gear.h2.xl} ${gear.h2.xl2}`}
        h3Classes={`${gear.h3.mobile} ${gear.h3.sm} ${gear.h3.md} ${gear.h3.lg} ${gear.h3.xl} ${gear.h3.xl2}`}
        pClasses={`${gear.p.mobile} ${gear.p.sm} ${gear.p.md} ${gear.p.lg} ${gear.p.xl} ${gear.p.xl2}`}
        listItems={[
          <>
            <strong>What to Wear:</strong> Long pants and sturdy, closed-toe
            boots (rain boots or hiking boots are perfect—please no canvas
            sneakers or sandals).
          </>,
          <>
            <strong>Riding Gear:</strong> Annie provides all safety helmets for
            riding and interacting with the ponies! Lightweight work or
            gardening gloves are highly recommended.
          </>,
          <>
            <strong>What to Pack:</strong> A nutritious packed lunch and a
            refillable water bottle (we take a dedicated lunch break every day).
          </>,
        ]}
      />

      <section className="mt-20 w-full text-center">
        <h2 className="mb-5 font-inter text-[7vw] font-bold md:text-[4vw] xl:text-[3vw] 2xl:text-[46px]">
          Ready to Reserve a Spot?
        </h2>
        <p className="mb-10 font-inter text-[4vw] md:text-[2vw] xl:text-[1.2vw] 2xl:text-base">
          Spaces are strictly limited to
          <br className="block xl:hidden" /> ensure plenty of hands-on pony
          <br className="hidden xl:block" />
          <br className="block xl:hidden" /> time for every child. Call or text
          <br className="block xl:hidden" /> Annie directly today to lock in
          <br className="hidden xl:block" />
          your
          <br className="block xl:hidden" /> child's unforgettable week!
        </p>
        <CTA
          buttonText="Call or Text (415) 261-3433"
          buttonLink="tel:(415) 261-3433"
          newTab={true}
        />
      </section>
    </>
  );
};
