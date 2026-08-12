import { SplitSection } from '@/components/ui/SplitSection';
import { CTA } from '@/components/ui/CTA';
import DiscoverD from '@/assets/meet-annie/discover-the-joy-d.jpg';
import DiscoverM from '@/assets/meet-annie/discover-the-joy-m.jpg';
import AnnieKidsD from '@/assets/meet-annie/annie-and-the-kids-d.jpg';
import AnnieKidsM from '@/assets/meet-annie/annie-and-the-kids-m.jpg';
import AnnieRidersD from '@/assets/meet-annie/annie-and-the-riders-d.jpg';
import AnnieRidersM from '@/assets/meet-annie/annie-and-the-riders-m.jpg';

export const MeetAnniePage = () => {
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
      mobile: `h-[50vw] w-full items-center flex flex-wrap`,
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
      mobile: `absolute top-[-50vw] mx-auto mb-5 w-full font-archivo text-[9vw] leading-tight font-bold text-white [text-shadow:_2px_2px_0_#000]`,
      sm: ``,
      md: `md:relative md:top-0 md:w-full md:text-[4vw] md:leading-none md:text-black md:text-shadow-none`,
      lg: `lg:text-[3vw]`,
      xl: `xl:text-[3vw]`,
      xl2: `2xl:text-[40px]`,
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
      mobile: `mx-auto w-full font-inter text-[3.9vw] leading-tight`,
      sm: ``,
      md: `md:text-[1.9vw]`,
      lg: `lg:text-[1.4vw]`,
      xl: `xl:text-[1.2vw]`,
      xl2: `2xl:text-base`,
    },
  };

  const annieKids = {
    section: {
      mobile: `relative flex w-full flex-wrap bg-[#FDE6C6] md:bg-white`,
      sm: ``,
      md: ``,
      lg: ``,
      xl: ``,
      xl2: ``,
    },

    divContainer: {
      mobile: `bg-[#FDE6C6] p-5 relative`,
      sm: `sm:w-full`,
      md: ` md:p-0  md:w-1/2`,
      lg: ``,
      xl: ``,
      xl2: ``,
    },

    textContainer: {
      mobile: `flex flex-wrap items-center justify-center text-center h-[75vw] w-full`,
      sm: ``,
      md: `md:w-1/2 md:h-[auto]`,
      lg: ``,
      xl: ``,
      xl2: ``,
    },

    imageContainer: {
      mobile: `w-full p-5`,
      sm: ``,
      md: ` md:w-1/2 md:p-0`,
      lg: ``,
      xl: ``,
      xl2: ``,
    },

    p: {
      mobile: `text-[4vw] mx-auto font-inter mb-10`,
      sm: ``,
      md: `md:text-[2vw]`,
      lg: `lg:text-[1.4vw]`,
      xl: `xl:text-[1.2vw] xl:mb-5`,
      xl2: `2xl:text-base`,
    },
  };

  return (
    <>
      <SplitSection
        title={
          <>
            Discover the Joy
            <br /> of Riding with
            <br /> Annie Erwin
          </>
        }
        subTitle=""
        description={
          <>
            At Pony Rescue Club, children discover the joy of
            <br className="block lg:hidden" /> riding while<br className="hidden lg:block" /> developing a deep
            bond with horses and
            <br className="block lg:hidden" /> learning lifelong<br className="hidden lg:block" /> skills. Based
            at the beautiful Millwood
            <br className="block lg:hidden" /> Ranch in Pacifica, Annie<br className="hidden lg:block" /> Erwin’s
            authentic, ranch-style
            <br className="block lg:hidden" /> instruction offers a low-<br className="hidden lg:block" />pressure
            environment built
            <br className="block lg:hidden" /> entirely on safety and fun.
          </>
        }
        buttonText=""
        buttonLink=""
        imageSrcD={DiscoverD}
        imageSrcM={DiscoverM}
        imageAlt="Pony Rescue Club"
        imagePosition="left"
        breakPoint="1024px"
        sectionClasses={`${hero.section.mobile} ${hero.section.sm} ${hero.section.md} ${hero.section.lg} ${hero.section.xl} ${hero.section.xl2}`}
        textContainerClasses={`${hero.textContainer.mobile} ${hero.textContainer.sm} ${hero.textContainer.md} ${hero.textContainer.lg} ${hero.textContainer.xl} ${hero.textContainer.xl2}`}
        imageContainerClasses={`${hero.imageContainer.mobile} ${hero.imageContainer.sm} ${hero.imageContainer.md} ${hero.imageContainer.lg} ${hero.imageContainer.xl} ${hero.imageContainer.xl2}`}
        h2Classes={`${hero.h2.mobile} ${hero.h2.sm} ${hero.h2.md} ${hero.h2.lg} ${hero.h2.xl} ${hero.h2.xl2}`}
        h3Classes={`${hero.h3.mobile} ${hero.h3.sm} ${hero.h3.md} ${hero.h3.lg} ${hero.h3.xl} ${hero.h3.xl2}`}
        pClasses={`${hero.p.mobile} ${hero.p.sm} ${hero.p.md} ${hero.p.lg} ${hero.p.xl} ${hero.p.xl2}`}
      />

      <SplitSection
        title=""
        subTitle=""
        description={
          <>
            Annie offers an all-around approach to learning
            <br className="block lg:hidden" /> that goes far
            <br className="hidden lg:block" /> beyond basic riding lessons.
            Drawing
            <br className="block lg:hidden" /> from her extensive
            <br className="hidden lg:block" /> background in ranching and
            <br className="block lg:hidden" /> horsemanship, she guides students
            <br className="hidden lg:block" /> to connect
            <br className="block lg:hidden" /> with horses on a deeper level.
            Every lesson covers
            <br className="" /> grooming, horse care, and behavioral
            <br className="block lg:hidden" /> understanding, ensuring
            <br className="hidden lg:block" /> young riders build strong
            <br className="block lg:hidden" /> coordination, technical safety
            skills,
            <br className="hidden lg:block" /> and an
            <br className="block lg:hidden" /> authentic respect for animals.
          </>
        }
        buttonText=""
        buttonLink=""
        imageSrcD={AnnieKidsD}
        imageSrcM={AnnieKidsM}
        imageAlt="Pony Rescue Club"
        imagePosition="right"
        breakPoint="1024px"
        sectionClasses={`${annieKids.section.mobile} ${annieKids.section.sm} ${annieKids.section.md} ${annieKids.section.lg} ${annieKids.section.xl} ${annieKids.section.xl2}`}
        textContainerClasses={`${annieKids.textContainer.mobile} ${annieKids.textContainer.sm} ${annieKids.textContainer.md} ${annieKids.textContainer.lg} ${annieKids.textContainer.xl} ${annieKids.textContainer.xl2}`}
        imageContainerClasses={`${annieKids.imageContainer.mobile} ${annieKids.imageContainer.sm} ${annieKids.imageContainer.md} ${annieKids.imageContainer.lg} ${annieKids.imageContainer.xl} ${annieKids.imageContainer.xl2}`}
        pClasses={`${annieKids.p.mobile} ${annieKids.p.sm} ${annieKids.p.md} ${annieKids.p.lg} ${annieKids.p.xl} ${annieKids.p.xl2}`}
      />

      <SplitSection
        title=""
        subTitle=""
        description={
          <>
            Here at the ranch, Annie has created a welcoming,
            <br className="block lg:hidden" /> low-pressure
            <br className="hidden lg:block" /> environment far removed from the
            <br className="block lg:hidden" /> stress of large commercial
            stables.
            <br className="hidden lg:block" /> She focuses on
            <br className="block lg:hidden" /> building a solid foundation of
            confidence, patience,
            <br className="" /> and coordination. Whether your child is stepping
            <br className="block lg:hidden" /> into the stirrups for
            <br className="hidden lg:block" /> the very first time or looking to
            <br className="block lg:hidden" /> safely refine their skills,
            Annie’s
            <br className="hidden lg:block" /> personalized
            <br className="block lg:hidden" /> guidance helps them flourish at
            their own pace.
            <br />
            <br />
            Give your child the gift of adventure, confidence,
            <br className="block lg:hidden" /> and the outdoors.
            <br className="hidden lg:block" /> Reach out today to schedule a
            <br className="block lg:hidden" /> visit to the ranch and meet
            Annie!
          </>
        }
        buttonText=""
        buttonLink=""
        imageSrcD={AnnieRidersD}
        imageSrcM={AnnieRidersM}
        imageAlt="Pony Rescue Club"
        imagePosition="left"
        breakPoint="1024px"
        sectionClasses={`${annieKids.section.mobile} ${annieKids.section.sm} ${annieKids.section.md} ${annieKids.section.lg} ${annieKids.section.xl} ${annieKids.section.xl2} bg-white md:!bg-[#FDE6C6]`}
        textContainerClasses={`${annieKids.textContainer.mobile} ${annieKids.textContainer.sm} ${annieKids.textContainer.md} ${annieKids.textContainer.lg} ${annieKids.textContainer.xl} ${annieKids.textContainer.xl2} h-[90vw]`}
        imageContainerClasses={`${annieKids.imageContainer.mobile} ${annieKids.imageContainer.sm} ${annieKids.imageContainer.md} ${annieKids.imageContainer.lg} ${annieKids.imageContainer.xl} ${annieKids.imageContainer.xl2}`}
        pClasses={`${annieKids.p.mobile} ${annieKids.p.sm} ${annieKids.p.md} ${annieKids.p.lg} ${annieKids.p.xl} ${annieKids.p.xl2}`}
      />

      <section className="flex w-full flex-wrap bg-[#FDE6C6] p-5 md:bg-white lg:hidden">
        <div className="flex w-full flex-wrap items-center gap-10">
          <div className="md:w-[47%]">
            <h2 className="mb-2 font-inter text-[8vw] font-bold sm:text-[6vw] md:text-[4vw]">
              Teaching Style
            </h2>
            <h3 className="mb-2 font-inter text-[5vw] font-bold md:text-[3vw]">
              What Annie Offers:
            </h3>
            <p className="mb-2 font-inter text-[4vw] md:text-[2vw]">
              Patient, holistic learning
            </p>
            <h3 className="mb-2 font-inter text-[5vw] font-bold md:text-[3vw]">
              Benefits:
            </h3>
            <p className="mb-2 font-inter text-[4vw] md:text-[2vw]">
              Builds genuine confidence and calm
            </p>
          </div>

          <div className="md:w-[47%]">
            <h2 className="mb-2 font-inter text-[8vw] font-bold sm:text-[6vw] md:text-[4vw]">
              Experience
            </h2>
            <h3 className="mb-2 font-inter text-[5vw] font-bold md:text-[3vw]">
              What Annie Offers:
            </h3>
            <p className="mb-2 font-inter text-[4vw] md:text-[2vw]">
              Lifelong equestrian with Idaho roots
            </p>
            <h3 className="mb-2 font-inter text-[5vw] font-bold md:text-[3vw]">
              Benefits:
            </h3>
            <p className="mb-2 font-inter text-[4vw] md:text-[2vw]">
              High-level safety and technical skill
            </p>
          </div>

          <div className="md:w-[47%]">
            <h2 className="mb-2 font-inter text-[8vw] font-bold sm:text-[6vw] md:text-[4vw]">
              Environment
            </h2>
            <h3 className="mb-2 font-inter text-[5vw] font-bold md:text-[3vw]">
              What Annie Offers:
            </h3>
            <p className="mb-2 font-inter text-[4vw] md:text-[2vw]">
              Local, community-focused ranch
            </p>
            <h3 className="mb-2 font-inter text-[5vw] font-bold md:text-[3vw]">
              Benefits:
            </h3>
            <p className="mb-2 font-inter text-[4vw] md:text-[2vw]">
              A welcoming, non-intimidating atmosphere
            </p>
          </div>

          <div className="md:w-[47%]">
            <h2 className="mb-2 font-inter text-[8vw] font-bold sm:text-[6vw] md:text-[4vw]">
              Focus Area
            </h2>
            <h3 className="mb-2 font-inter text-[5vw] font-bold md:text-[3vw]">
              What Annie Offers:
            </h3>
            <p className="mb-2 font-inter text-[4vw] md:text-[2vw]">
              Foundational skills and safety awareness
            </p>
            <h3 className="mb-2 font-inter text-[5vw] font-bold md:text-[3vw]">
              Benefits:
            </h3>
            <p className="mb-2 font-inter text-[4vw] md:text-[2vw]">
              Develops deep equine awareness and responsibility
            </p>
          </div>
        </div>
      </section>

      <section className="hidden w-full flex-wrap items-center justify-center py-10 font-inter lg:block">
        <div className="mx-auto w-[95%]">
          <table className="w-full">
            <thead className="">
              <tr className="text-left text-[3vw] xl:text-[2vw] 2xl:text-[32px]">
                <th scope="col" className="w-1/3">
                  Feature
                </th>
                <th scope="col" className="w-1/3">
                  What Annie Offers
                </th>
                <th scope="col" className="w-1/3">
                  Benefit for Your Child
                </th>
              </tr>
            </thead>

            <tbody className="text-left text-[1.7vw] xl:text-[1.2vw] 2xl:text-base">
              <tr className="h-[5vw] 2xl:h-[86px]">
                <th scope="row">Teaching Style</th>
                <td>Patient, holistic learning</td>
                <td>Builds genuine confidence and calm</td>
              </tr>
              <tr className="h-[5vw] 2xl:h-[86px]">
                <th scope="row">Experience</th>
                <td>Lifelong equestrian with Idaho roots</td>
                <td>High-level safety and technical skill</td>
              </tr>
              <tr className="h-[5vw] 2xl:h-[86px]">
                <th scope="row">Environment</th>
                <td>Local, community-focused ranch</td>
                <td>A welcoming, non-intimidating atmosphere</td>
              </tr>
              <tr className="h-[5vw] 2xl:h-[86px]">
                <th scope="row">Focus Area</th>
                <td>Foundational skills and safety awareness</td>
                <td>Develops deep equine awareness and responsibility</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="flex w-full flex-wrap justify-center p-5 text-center">
        <div className="">
          <h2 className="mb-5 font-inter text-[6vw] font-bold md:text-[4vw] xl:text-[3vw] 2xl:text-[36px]">
            Ready to Visit the Ranch?
          </h2>
          <p className="mb-5 font-inter text-[4vw] md:text-[2vw] xl:text-[1.2vw] 2xl:text-base">
            Reach out today to schedule a visit
            <br /> to the ranch and meet Annie!
          </p>
          <div className="mx-auto flex w-full flex-wrap justify-center gap-5 lg:w-3/4">
            <CTA
              buttonText="View Riding Lessons"
              buttonLink="/riding-lessons"
              className=""
            />

            <CTA
              buttonText="View Free Pony Rides"
              buttonLink="/pony-rides"
              className=""
            />

            <CTA
              buttonText="View Horse Camp"
              buttonLink="/horse-camp"
              className=""
            />
          </div>
        </div>
      </section>
    </>
  );
};
