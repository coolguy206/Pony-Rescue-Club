import { IfImage } from '@/components/ui/IfImage';
import { IfCTA } from '@/components/ui/IfCTA';

type Props = {
  title: React.ReactNode;
  description: React.ReactNode;
  buttonText?: string;
  buttonLink?: string;
  imageSrcD: string;
  imageSrcM: string;
  imageAlt?: string;
  divContainerClasses?: string;
  textContainerClasses?: string;
  h2Classes?: string;
  pClasses?: string;
  listItems?: React.ReactNode[];
};

export const FeatureBlocks = ({
  title,
  description,
  buttonText = '',
  buttonLink = '',
  imageSrcD,
  imageSrcM,
  imageAlt = 'Pony Rescue Club',
  divContainerClasses = 'relative w-full md:w-1/2',
  textContainerClasses = '',
  h2Classes = 'font-inter font-bold',
  pClasses = 'font-inter font-base',
  listItems = [],
}: Props) => {
  const hasListItems = listItems.length > 0;

  return (
    <div className={divContainerClasses}>
      <IfImage
        buttonLink={buttonLink}
        buttonText={buttonText}
        imageSrcD={imageSrcD}
        imageSrcM={imageSrcM}
        imageAlt={imageAlt}
      />

      <div className={textContainerClasses}>
        <h2 className={h2Classes}>{title}</h2>
        <p className={pClasses}>{description}</p>

        {hasListItems && (
          <ol className="mx-auto w-7/8 list-decimal text-left font-inter text-[4vw] md:text-[2vw] lg:text-[1.7vw] xl:w-5/8 xl:text-[1.3vw] 2xl:text-base">
            {listItems.map((item, index) => (
              <li key={index} className="mb-5">
                {item}
              </li>
            ))}
          </ol>
        )}

        <IfCTA buttonText={buttonText} buttonLink={buttonLink} />
      </div>
    </div>
  );
};
