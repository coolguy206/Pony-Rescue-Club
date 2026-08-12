import { CTA } from '@/components/ui/CTA.tsx';

type Props = {
  buttonText: string;
  buttonLink: string;
  className?: string;
  newTab?: boolean;
};

export const IfCTA = ({
  buttonText,
  buttonLink,
  className = '',
  newTab = false,
}: Props) => {
  const hasValidCTA =
    buttonText !== undefined &&
    buttonText !== null &&
    buttonText.trim() !== '' &&
    buttonLink !== undefined &&
    buttonLink !== null &&
    buttonLink.trim() !== '';

  return (
    <>
      {hasValidCTA && (
        <CTA
          buttonText={buttonText}
          buttonLink={buttonLink}
          className={className}
          newTab={newTab}
        />
      )}
    </>
  );
};
