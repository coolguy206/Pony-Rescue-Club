import { IfImage } from './IfImage';
import { IfCTA } from './IfCTA';

type Props = {
  title: React.ReactNode;
  subTitle?: React.ReactNode;
  description: React.ReactNode;
  buttonText: string;
  buttonLink: string;
  imageSrcD: string;
  imageSrcM: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
  breakPoint?: string;
  textContainerClasses?: string;
  imageContainerClasses?: string;
  sectionClasses?: string;
  h2Classes?: string;
  h3Classes?: string;
  pClasses?: string;
  CTAClasses?: string;
  CTANewTab?: boolean;
  listItems?: React.ReactNode[];
  onClick?: () => void;
};

export const SplitSection = ({
  title,
  subTitle,
  description,
  buttonText,
  buttonLink,
  imageSrcD,
  imageSrcM,
  imageAlt = 'Pony Rescue Club',
  imagePosition = 'left',
  breakPoint = '1280px',
  textContainerClasses = 'w-full',
  imageContainerClasses = 'w-full ',
  sectionClasses = '',
  h2Classes = 'font-inter font-bold text-[32px]',
  h3Classes = 'font-inter font-bold text-[24px]',
  pClasses = 'font-inter mb-10 text-base',
  CTAClasses = '',
  CTANewTab = false,
  listItems = [],
  onClick,
}: Props) => {
  let imageOrder1, imageOrder2;
  if (imagePosition === 'right') {
    imageOrder1 = `order-2 md:order-1`;
    imageOrder2 = `order-1 md:order-2`;
  } else {
    imageOrder1 = `order-2 md:order-2`;
    imageOrder2 = `order-1 md:order-1`;
  }

  const hasValidTitle = !!title;

  const hasValidSubTitle = !!subTitle;

  const hasListItems = listItems && listItems.length !== 0;

  return (
    <section className={`${sectionClasses}`}>
      <div className={`relative ${imageOrder1} ${textContainerClasses}`}>
        <div
          className={`absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform text-center`}
        >
          {hasValidTitle && <h2 className={`${h2Classes}`}>{title}</h2>}

          {hasValidSubTitle && <h3 className={`${h3Classes}`}>{subTitle}</h3>}

          <p className={`${pClasses}`}>{description}</p>

          {hasListItems && (
            <ul className="mx-auto w-3/4 list-disc text-left font-inter text-[4vw] md:text-[2vw] xl:w-5/8 xl:text-[1.2vw] 2xl:text-base">
              {listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}

          <IfCTA
            buttonLink={buttonLink}
            buttonText={buttonText}
            className={CTAClasses}
            newTab={CTANewTab}
            onClick={onClick}
          />
        </div>
      </div>

      <div className={`${imageOrder2} ${imageContainerClasses}`}>
        <IfImage
          buttonLink={buttonLink}
          buttonText={buttonText}
          imageSrcD={imageSrcD}
          imageSrcM={imageSrcM}
          imageAlt={imageAlt}
          breakPoint={breakPoint}
        />
      </div>
    </section>
  );
};
