import HorseRidingGraphic from '@/assets/global/horse-riding.svg';
import { Link } from 'react-router-dom';

export function Footer() {
  const fontSize = {
    mobile: `mb-2 font-inter text-[4vw]`,
    sm: `sm:text-[3vw]`,
    md: `md:text-[2vw]`,
    lg: ` lg:text-[1.5vw]`,
    xl: ` xl:text-[1.3vw]`,
    xl2: `2xl:text-base`,
  };

  return (
    <footer className="mt-16 text-center">
      <img
        src={HorseRidingGraphic}
        alt="Horse Riding Graphic"
        className="mx-auto mb-10 block w-[20vw] sm:w-[10vw] xl:w-[8vw] 2xl:w-[100px]"
      />
      <p
        className={`${fontSize.mobile} ${fontSize.sm} ${fontSize.md} ${fontSize.lg} ${fontSize.xl} ${fontSize.xl2}`}
      >
        <a
          href="https://www.google.com/maps/place/Mill-wood+Ranch/@37.5982148,-122.4699261,17z/data=!4m15!1m8!3m7!1s0x808f7098a37b93e3:0x2ac8b9682fbc8206!2s1+Picardo+Ranch,+Pacifica,+CA+94044!3b1!8m2!3d37.5982148!4d-122.4699261!16s%2Fg%2F11r1s87pry!3m5!1s0x808f7098a31e5633:0xefb4873cc640f1b6!8m2!3d37.5981161!4d-122.4699748!16s%2Fg%2F1tdd0xyn?entry=ttu&g_ep=EgoyMDI2MDgwMi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          1 Picardo Ranch, Pacifica, CA 94044
        </a>
      </p>
      <p
        className={`${fontSize.mobile} ${fontSize.sm} ${fontSize.md} ${fontSize.lg} ${fontSize.xl} ${fontSize.xl2}`}
      >
        <a href="tel:(415) 261-3433">(415) 261-3433</a> | <a href="mailto:runscrapmonkeyrun@gmail@email.com">runscrapmonkeyrun@gmail.com</a>
      </p>
      <nav className="hidden xl:block">
        <ul
          className={`${fontSize.mobile} ${fontSize.sm} ${fontSize.md} ${fontSize.lg} ${fontSize.xl} ${fontSize.xl2} flex justify-center xl:gap-5`}
        >
          <li>
            <Link to="/meet-annie">Meet Annie</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/riding-guidelines">Riding Guidelines</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <p
        className={`${fontSize.mobile} ${fontSize.sm} ${fontSize.md} ${fontSize.lg} ${fontSize.xl} ${fontSize.xl2} "pb-10`}
      >
        &copy; {new Date().getFullYear()} Pony Rescue Club.
        <br /> All rights reserved.
      </p>
    </footer>
  );
}
