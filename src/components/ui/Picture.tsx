type Props = {
  imageSrcD: string;
  imageSrcM: string;
  imageAlt?: string;
  breakPoint?: string;
};

export const Picture = ({
  imageSrcD,
  imageSrcM,
  imageAlt = 'Pony Rescue Club',
  breakPoint = '1280px'
}: Props) => {
  return (
    <picture>
      <source srcSet={imageSrcD} media={`(min-width: ${breakPoint})`} />

      <img src={imageSrcM} alt={imageAlt} className="w-full" />
    </picture>
  );
};
