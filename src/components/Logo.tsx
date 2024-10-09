import Image from 'next/image';

const DEFAULT_LOGO_SIZE = 150;

interface ILogoProps {
  width?: number;
  height?: number;
}

export default function Logo({
  width = DEFAULT_LOGO_SIZE,
  height = DEFAULT_LOGO_SIZE,
}: ILogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Easy Tagalog logo"
      width={width}
      height={height}
      className="overflow-hidden"
    />
  );
}
