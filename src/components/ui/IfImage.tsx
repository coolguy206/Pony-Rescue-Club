import { Picture } from './Picture';

type Props = {
  buttonText?: string;
  buttonLink?: string;
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
  const hasValidCTA = buttonText?.trim() && buttonLink?.trim();;

  const imageElement = (
    <Picture
      imageSrcD={imageSrcD}
      imageSrcM={imageSrcM}
      imageAlt={imageAlt}
      breakPoint={breakPoint}
    />
  );

  if (hasValidCTA) {
    return (
      <a href={buttonLink} aria-label={buttonText}>
        {imageElement}
      </a>
    );
  }

  return <>{imageElement}</>;
};
