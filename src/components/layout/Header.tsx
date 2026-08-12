import { useState, useEffect } from 'react';
import Logo from '@/assets/global/logo.svg';
import { Link } from 'react-router-dom';
import menuIcon from '@/assets/global/menu-bars.svg';
import CloseIcon from '@/assets/global/close.svg';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      // 2. Set to true if scrolled down more than 50 pixels
      setIsScrolled(window.scrollY > 50);
    };

    // 3. Listen to the window scroll event
    window.addEventListener('scroll', handleScroll);

    // 4. Clean up the listener when leaving the page
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header
      className={`relative bg-white py-5 xl:flex xl:items-center xl:justify-between ${
        isScrolled
          ? '!fixed top-0 z-[50] w-full 2xl:max-w-[1728px]'
          : 'relative'
      }`}
    >
      <div className="relative flex w-full flex-wrap items-center justify-between px-5 2xl:px-0">
        <a
          href="#"
          className="block 2xl:hidden"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
        >
          <img src={menuIcon} alt="Mobile Menu Icon" className="w-3/4" />
        </a>

        <Link to="/" className="order-3 block 2xl:order-1">
          <img
            src={Logo}
            alt="Pony Rescue Club Logo"
            className="relative left-[8vw] w-5/8 sm:left-[5vw] md:left-[4vw] lg:left-[3vw] xl:left-[2vw] 2xl:left-0 2xl:w-auto"
            onClick={scrollTop}
          />
        </Link>

        <Link
          to="/"
          className="absolute left-1/2 order-2 w-[60vw] -translate-x-1/2 text-center font-inter text-[7vw] md:text-[5vw] xl:text-[4vw] 2xl:hidden"
          onClick={scrollTop}
        >
          Pony Rescue Club
        </Link>
      </div>

      <Link
        to="/"
        className="absolute left-1/2 hidden -translate-x-1/2 text-center font-inter text-[64px] 2xl:block"
      >
        Pony Rescue Club
      </Link>

      <nav className="hidden 2xl:order-3 2xl:block">
        <ul className="flex font-inter xl:gap-5 xl:text-[24px] 2xl:w-[476px]">
          <li>
            <Link to="/riding-lessons" className="" onClick={scrollTop}>
              Riding Lessons
            </Link>
          </li>
          <li>
            <Link to="/pony-rides" className="" onClick={scrollTop}>
              Pony Rides
            </Link>
          </li>
          <li>
            <Link to="/horse-camp" className="" onClick={scrollTop}>
              Horse Camp
            </Link>
          </li>
        </ul>
      </nav>

      <nav
        className={`fixed left-0 z-999 h-full w-full bg-white p-5 text-center transition-all duration-1000 ease-in-out 2xl:hidden ${isOpen ? 'top-0' : '-top-full'}`}
      >
        <Link
          to="/"
          onClick={() => {
            scrollTop();
            setIsOpen(false);
          }}
        >
          <img
            src={Logo}
            alt="Pony Rescue Club Logo"
            className="relative mx-auto block"
          />
        </Link>

        <img
          src={CloseIcon}
          alt="Close Menu Icon"
          className="absolute top-5 right-5"
          onClick={() => setIsOpen(false)}
        />

        <ul className="flex flex-col gap-5 font-inter text-[32px]">
          <li>
            <Link
              to="/riding-lessons"
              className=""
              onClick={() => {
                scrollTop();
                setIsOpen(false);
              }}
            >
              Riding Lessons
            </Link>
          </li>
          <li>
            <Link
              to="/pony-rides"
              className=""
              onClick={() => {
                scrollTop();
                setIsOpen(false);
              }}
            >
              Pony Rides
            </Link>
          </li>
          <li>
            <Link
              to="/horse-camp"
              className=""
              onClick={() => {
                scrollTop();
                setIsOpen(false);
              }}
            >
              Horse Camp
            </Link>
          </li>
          <li>
            <a
              href="https://www.facebook.com/groups/rescueponyclub"
              className=""
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Events
            </a>
          </li>
          <li>
            <Link
              to="/meet-annie"
              className=""
              onClick={() => {
                scrollTop();
                setIsOpen(false);
              }}
            >
              Meet Annie
            </Link>
          </li>
          <li>
            <Link
              to="/faq"
              className=""
              onClick={() => {
                scrollTop();
                setIsOpen(false);
              }}
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              to="/riding-guidelines"
              className=""
              onClick={() => {
                scrollTop();
                setIsOpen(false);
              }}
            >
              Riding Guidelines
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className=""
              onClick={() => {
                scrollTop();
                setIsOpen(false);
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
