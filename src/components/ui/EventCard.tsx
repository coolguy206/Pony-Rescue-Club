import { CTA } from '@/components/ui/CTA.tsx';
import { Picture } from './Picture';

type Props = {
  title: React.ReactNode;
  imageSrcD: string;
  imageSrcM: string;
  imageAlt?: string;
  date: string;
  buttonText: string;
  buttonLink: string;
};

export const EventCard = ({
  title,
  imageSrcD,
  imageSrcM,
  imageAlt,
  date,
  buttonText,
  buttonLink,
}: Props) => {
  return (
    <div className="w-full p-5 text-center md:w-1/3 md:p-0">
      <a href={buttonLink} aria-label={buttonText}>
        <Picture
          imageSrcD={imageSrcD}
          imageSrcM={imageSrcM}
          imageAlt={imageAlt}
        />
      </a>
      <h3 className="mx-auto my-5 font-inter text-[5vw] leading-tight font-bold md:text-[2vw] 2xl:text-[24px]">
        {title}
      </h3>
      <p className="mb-5 font-inter text-[4vw] leading-tight font-bold md:text-[2vw] xl:text-[1vw] 2xl:text-base">
        {date}
      </p>
      <CTA
        buttonText={buttonText}
        buttonLink={buttonLink}
        backgroundColor="bg-[#fff]"
        newTab={true}
      />
    </div>
  );
};
