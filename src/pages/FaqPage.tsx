import React, { useState, useEffect } from 'react';
import { Picture } from '@/components/ui/Picture';
import { Phone } from '@/components/utils/Phone';
import HorseBackD from '@/assets/faq/horse-back-riding-d.webp';
import HorseBackM from '@/assets/faq/horse-back-riding-m.webp';

type Props = {
  question: React.ReactNode;
  answer: React.ReactNode;
  open?: boolean;
};

const Faq = ({ question, answer, open = false }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Only run on the client side
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      // 💡 Sets open to true if screen is 1024px or narrower
      setIsOpen(window.innerWidth >= 1024);
    };

    // Run once on component mount to check initial screen size
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex w-full flex-wrap items-center text-center lg:w-[48%] lg:items-start lg:nth-of-type-[3]:w-full">
      <details
        className="w-full"
        open={isOpen}
        onToggle={(e) => setIsOpen(e.currentTarget.open)}
      >
        <summary className="w-full bg-[#5D6615] py-5 font-inter text-[5vw] font-bold text-white md:text-[3vw] lg:text-[2vw] xl:text-[1.5vw] 2xl:text-[24px]">
          {question}
        </summary>
        <div className="w-full lg:flex lg:h-[25vw] lg:flex-wrap lg:items-center lg:border 2xl:h-[300px]">
          <p className="w-full border-1 py-5 font-inter text-[4vw] md:text-[2vw] lg:border-0 lg:p-0 lg:text-[1.5vw] xl:text-[1.2vw] 2xl:text-base">
            {answer}
          </p>
        </div>
      </details>
    </div>
  );
};

type FaqItem = {
  question: React.ReactNode;
  answer: React.ReactNode;
  open?: boolean;
};

type ContainerProps = {
  h2: React.ReactNode;
  faqList?: FaqItem[];
};

const FaqContainer = ({ h2, faqList = [] }: ContainerProps) => {
  return (
    <>
      <h2 className="mb-5 w-full text-center font-inter text-[9vw] font-bold md:text-[4vw] lg:text-[3vw] xl:text-[2vw] 2xl:text-[40px]">
        {h2}
      </h2>
      <div className="flex flex-wrap gap-5 p-5">
        {faqList.map((item) => (
          <Faq question={item.question} answer={item.answer} open={item.open} />
        ))}
      </div>
    </>
  );
};

export const FaqPage = () => {
  return (
    <>
      <section className="relative h-auto w-full leading-tight">
        <h2 className="absolute top-5/8 left-1/2 w-auto -translate-x-1/2 font-archivo text-[12vw] text-white md:top-3/8 md:left-1/4 md:text-center md:text-[3vw] 2xl:text-[48px] [text-shadow:_2px_2px_0_#000]">
          Horseback
          <br className="block md:hidden" /> Riding 101
          <span className="hidden md:block">Your Top Questions Covered</span>
        </h2>

        <Picture
          imageSrcD={HorseBackD}
          imageSrcM={HorseBackM}
          imageAlt="Girl on horse riding on trail"
          breakPoint="768px"
        />
      </section>

      <section className="w-full leading-tight">
        <h1 className="my-5 w-full text-center font-archivo text-[11vw] md:text-[5vw] lg:text-[4vw] xl:text-[3vw] 2xl:text-[40px]">
          FAQs
        </h1>

        <FaqContainer
          h2="Age & Experience"
          faqList={[
            {
              question: (
                <>
                  How old does a rider
                  <br className="" /> need to be?
                </>
              ),
              answer: (
                <>
                  Paid lessons are open to anyone ages
                  <br className="block lg:hidden" /> 6 and up (with no upper
                  <br className="hidden lg:block" /> age limit!).
                  <br className="block lg:hidden" /> For our free Sunday Rescue
                  Pony
                  <br className="block lg:hidden" /> Club meetups,
                  <br className="hidden lg:block" /> there is no age
                  <br className="block lg:hidden" /> minimum, but children
                  should be able
                  <br className="block lg:hidden" /> to sit on
                  <br className="hidden lg:block" /> the pony independently and
                  <br className="block lg:hidden" /> hold on with confidence.
                </>
              ),
            },

            {
              question: (
                <>
                  Do I need any previous
                  <br className="" /> experience to start?
                </>
              ),
              answer: (
                <>
                  Not at all. Everyone starts with an individual introductory
                  <br className="hidden lg:block" />
                  lesson so Annie can personally assess your comfort and skill
                  <br className="hidden lg:block" />
                  level, and we customize your path from there.
                </>
              ),
            },
          ]}
        />

        <FaqContainer
          h2="Gear & Preparation"
          faqList={[
            {
              question: (
                <>
                  What should we wear and
                  <br className="" /> bring to the ranch?
                </>
              ),
              answer: (
                <>
                  Riders must wear comfortable long pants
                  <br className="block lg:hidden" /> and closed-toe
                  <br className="hidden lg:block" /> shoes (sturdy boots or even
                  <br className="block lg:hidden" /> rain boots are
                  perfect—please no
                  <br className="hidden lg:block" /> sandals or
                  <br className="block lg:hidden" /> canvas sneakers). Annie
                  provides safety
                  <br className="block lg:hidden" /> helmets
                  <br className="hidden lg:block" /> on-site, though you are
                  welcome to
                  <br className="block lg:hidden" /> bring your own
                  <br className="hidden lg:block" />
                  equestrian-certified helmet.
                  <br className="block lg:hidden" /> Lightweight work or
                  gardening
                  <br className="hidden lg:block" /> gloves are
                  <br className="block lg:hidden" /> also a great option to
                  bring along!
                </>
              ),
            },

            {
              question: (
                <>
                  Is it safe if my child has never
                  <br className="" /> been around horses?
                </>
              ),
              answer: (
                <>
                  Safety and comfort are our highest priorities. Annie will
                  never
                  <br className="hidden lg:block" /> push a student into
                  anything they aren't fully ready for—she
                  <br className="hidden lg:block" /> meets every rider at their
                  own pace and builds up their
                  <br className="hidden lg:block" /> confidence step-by-step.
                </>
              ),
            },
          ]}
        />

        <FaqContainer
          h2={
            <>
              Pricing, Booking
              <br className="block md:hidden" /> & Formats
            </>
          }
          faqList={[
            {
              question: (
                <>
                  How much does a<br className="" /> riding lesson cost?
                </>
              ),
              answer: (
                <>
                  Lessons are $75 per session. We also offer
                  <br className="hidden lg:block" />
                  <br className="block lg:hidden" /> discounted package rates if
                  you choose to
                  <br className="hidden lg:block" />
                  <br className="block lg:hidden" /> pre-pay for a bundle of
                  lessons.
                </>
              ),
            },

            {
              question: (
                <>
                  What is the difference between
                  <br className="block lg:hidden" /> individual lessons
                  <br className="hidden xl:block" /> and the
                  <br className="block lg:hidden" /> Rescue Pony Club?
                </>
              ),
              answer: (
                <>
                  Paid riding lessons are private, one-on-one sessions
                  <br className="hidden lg:block" />
                  structured entirely around your progressive skills. The Rescue
                  <br className="hidden lg:block" />
                  Pony Club is a completely free meetup held every Sunday! It
                  <br className="hidden lg:block" />
                  requires no booking and is open to anyone who wants to meet
                  <br className="hidden lg:block" />
                  the ponies, help groom them, try out stable chores, and get a
                  <br className="hidden lg:block" />
                  small amount of riding time.
                </>
              ),
            },

            {
              question: (
                <>
                  How do I book a lesson
                  <br className="block lg:hidden" /> or get in touch?
                </>
              ),
              answer: (
                <>
                  You can launch our quick online questionnaire by clicking any
                  <br className="hidden lg:block" />
                  "Get Started" button on this site, or you can call or text
                  Annie
                  <br className="hidden lg:block" /> directly at <Phone />.
                </>
              ),
            },
          ]}
        />
      </section>

      <section className="flex w-full flex-wrap items-center bg-[#5D6615] text-center font-inter">
        <div className="flex h-[70vw] w-full flex-wrap items-center justify-center text-white lg:w-1/2 lg:h-auto">
          <div>
            <h2 className="mb-5 text-[5vw] font-bold md:text-[4vw] lg:text-[2.5vw] xl:text-[2vw] 2xl:text-[24px]">
              Where is Millwood Ranch located?
            </h2>
            <p className="text-[4vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw] 2xl:text-base">
              We are located at
              <br />
              <a
                href="https://www.google.com/maps/place/Mill-wood+Ranch/@37.5982148,-122.4699261,17z/data=!4m15!1m8!3m7!1s0x808f7098a37b93e3:0x2ac8b9682fbc8206!2s1+Picardo+Ranch,+Pacifica,+CA+94044!3b1!8m2!3d37.5982148!4d-122.4699261!16s%2Fg%2F11r1s87pry!3m5!1s0x808f7098a31e5633:0xefb4873cc640f1b6!8m2!3d37.5981161!4d-122.4699748!16s%2Fg%2F1tdd0xyn?entry=ttu&g_ep=EgoyMDI2MDgwMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                1 Picardo Ranch, Pacifica, CA 94044.
              </a>
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3161.167581661021!2d-122.4699261!3d37.5982148!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7098a31e5633%3A0xefb4873cc640f1b6!2sMill-wood%20Ranch!5e0!3m2!1sen!2sus!4v1786224605131!5m2!1sen!2sus"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="h-[100vw] w-full lg:h-[59vw] 2xl:h-[675px]"
          ></iframe>
        </div>
      </section>
    </>
  );
};
