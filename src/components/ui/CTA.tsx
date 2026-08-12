import { Link } from 'react-router-dom';
import { ScrollTop } from '../utils/ScrollTop';

type Props = {
  buttonText: string;
  buttonLink: string;
  backgroundColor?: string; // Optional prop for background color
  newTab?: boolean; // Optional prop to open link in a new tab
  className?: string;
};

export const CTA = ({
  buttonText,
  buttonLink,
  backgroundColor = `bg-[#5D6615]`,
  newTab = false,
  className,
}: Props) => {
  let borders, textColor;

  if (backgroundColor === `bg-[#fff]`) {
    borders = `border border-solid`;
    textColor = `text-[#000]`;
  } else {
    textColor = `text-[#fff]`;
  }
  return (
    <Link
      to={buttonLink}
      className={`inline-flex h-11.25 items-center justify-center font-inter xl:h-13.75 ${backgroundColor} ${borders} px-7 font-bold xl:text-[24px] ${textColor} ${className}`}
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noopener noreferrer' : undefined}
      onClick={ScrollTop}
    >
      {buttonText}
    </Link>
  );
};
