import { Picture } from './Picture';

type Props = {
  buttonText: string;
  buttonLink: string;
  imageSrcD: string;
  imageSrcM: string;
  imageAlt?: string;
  breakPoint?: string;
};

export const IfImage = ({
  buttonText,
  buttonLink,
  imageSrcD,
  imageSrcM,
  imageAlt = 'Pony Rescue Club',
  breakPoint = '1280px',
}: Props) => {
  const hasValidCTA = buttonText.trim() !== '' && buttonLink.trim() !== '';

  return (
    <>
      {hasValidCTA ? (
        <a href={buttonLink} aria-label={buttonText}>
          <Picture
            imageSrcD={imageSrcD}
            imageSrcM={imageSrcM}
            imageAlt={imageAlt}
            breakPoint={breakPoint}
          />
        </a>
      ) : (
        <>
          <Picture
            imageSrcD={imageSrcD}
            imageSrcM={imageSrcM}
            imageAlt={imageAlt}
            breakPoint={breakPoint}
          />
        </>
      )}
    </>
  );
};
