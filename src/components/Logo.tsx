import Image from 'next/image';

const DEFAULT_LOGO_SIZE = 150;

interface ILogoProps {
  size?: number;
}

export default function Logo({ size = DEFAULT_LOGO_SIZE }: ILogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Easy Tagalog logo"
      width={size}
      height={size}
      className="overflow-hidden"
    />
  );
}
