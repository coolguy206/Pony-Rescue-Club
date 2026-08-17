import { Link } from 'react-router-dom';
import { ScrollTop } from '../utils/ScrollTop';

type Props = {
  buttonText: string;
  buttonLink: string;
  backgroundColor?: string; // Optional prop for background color
  newTab?: boolean; // Optional prop to open link in a new tab
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export const CTA = ({
  buttonText,
  buttonLink,
  backgroundColor = `bg-[#5D6615]`,
  newTab = false,
  className,
  onClick,
}: Props) => {
  let borders, textColor;

  if (backgroundColor === `bg-[#fff]`) {
    borders = `border border-solid`;
    textColor = `text-[#000]`;
  } else {
    textColor = `text-[#fff]`;
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // 1. If the link is just "#", prevent the browser from jumping to the top
    if (buttonLink === '#') {
      e.preventDefault();
    } else {
      ScrollTop(); // Only run scroll-to-top if navigating to a real page layout
    }

    // 2. Safely execute openForm() to mount your modal interface
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link
      to={buttonLink}
      className={`inline-flex h-11.25 items-center justify-center font-inter xl:h-13.75 ${backgroundColor} ${borders} px-7 font-bold xl:text-[24px] ${textColor} ${className}`}
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noopener noreferrer' : undefined}
      onClick={handleClick}
    >
      {buttonText}
    </Link>
  );
};
