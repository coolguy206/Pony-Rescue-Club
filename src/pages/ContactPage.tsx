import { Picture } from '@/components/ui/Picture';
import { CTA } from '@/components/ui/CTA';
import GetInD from '@/assets/contact/get-in-touch-d.jpg';
import GetInM from '@/assets/contact/get-in-touch-m.jpg';

export function ContactPage() {
  const p = {
    mobile: `mb-10 font-inter text-[3.5vw] `,
    sm: ``,
    md: `md:text-[2vw]`,
    lg: `lg:text-[1.4vw]`,
    xl: ``,
    xl2: `2xl:text-base`,
  };

  return (
    <>
      <section className="relative w-full">
        <h1 className="absolute top-[60vw] left-1/2 w-3/4 -translate-x-1/2 text-center font-archivo text-[10vw] text-white md:top-[17vw] md:left-[10vw] md:w-auto md:-translate-x-0 md:text-[5vw] 2xl:top-[265px] 2xl:text-[64px]">
          Get In Touch
          <br className="block md:hidden" /> With Us
        </h1>
        <Picture
          imageSrcD={GetInD}
          imageSrcM={GetInM}
          imageAlt="trainer and horseback rider leading through trees"
          breakPoint="768px"
        />
      </section>

      <section className="w-full bg-[#FDE6C6] lg:flex">
        <div className="items-center p-5 text-center lg:flex lg:w-1/2">
          <div className="w-full">
            <h2 className="mb-5 font-inter text-[5vw] font-bold md:text-[3vw] lg:text-[2vw] 2xl:text-[32px]">
              Have questions about lessons, pony
              <br className="" /> rides, or upcoming summer camps?
            </h2>

            <p
              className={`${p.mobile} ${p.sm} ${p.md} ${p.lg} ${p.xl} ${p.xl2}`}
            >
              Annie is on the ranch with the horses all day, so
              <br className="block lg:hidden" /> phone calls or text
              <br className="hidden lg:block" /> messages are the absolute
              <br className="block lg:hidden" /> fastest way to reach her! Drop
              a text
              <br className="hidden lg:block" />
              or call today,
              <br className="block lg:hidden" /> and we’ll match you with the
              perfect horse.
            </p>

            <CTA
              buttonText="Call or Text Direct: (415) 261-3433"
              buttonLink="tel:(415) 261-3433"
              newTab={true}
              className="mb-10"
            />

            <p
              className={`${p.mobile} ${p.sm} ${p.md} ${p.lg} ${p.xl} ${p.xl2}`}
            >
              Email Inquiries: runscrapmonkeyrun@gmail.
            </p>
            <p
              className={`${p.mobile} ${p.sm} ${p.md} ${p.lg} ${p.xl} ${p.xl2}`}
            >
              <strong>Ranch Location Address:</strong>
              <br />
              <a
                href="https://www.google.com/maps/place/Mill-wood+Ranch/@37.5982148,-122.4699261,17z/data=!4m15!1m8!3m7!1s0x808f7098a37b93e3:0x2ac8b9682fbc8206!2s1+Picardo+Ranch,+Pacifica,+CA+94044!3b1!8m2!3d37.5982148!4d-122.4699261!16s%2Fg%2F11r1s87pry!3m5!1s0x808f7098a31e5633:0xefb4873cc640f1b6!8m2!3d37.5981161!4d-122.4699748!16s%2Fg%2F1tdd0xyn?entry=ttu&g_ep=EgoyMDI2MDgwMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                1 Picardo Ranch, <br />
                Pacifica, CA 94044
              </a>
            </p>
            <p
              className={`${p.mobile} ${p.sm} ${p.md} ${p.lg} ${p.xl} ${p.xl2}`}
            >
              <strong>Crucial Arrival Note:</strong> We are located at the
              beautiful,
              <br className="block lg:hidden" /> hidden gem
              <br className="hidden lg:block" /> of
              <strong>Millwood Ranch</strong>. When using GPS,
              <br className="block lg:hidden" /> please ensure you route
              <br className="hidden lg:block" /> directly to the Picardo
              <br className="block lg:hidden" /> Ranch main entrance gates off
              the main
              <br className="hidden lg:block" />
              road, rather
              <br className="block lg:hidden" /> than neighboring residential
              streets.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
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
}
