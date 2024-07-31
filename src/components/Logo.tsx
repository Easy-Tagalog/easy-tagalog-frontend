import Image from 'next/image';

interface LogoProps {
  width: number;
  height: number;
}

export default function Logo({ width, height }: LogoProps) {
  return (
    <Image
      src="/static/logo.png"
      alt="Easy Tagalog logo"
      width={width}
      height={height}
      className="overflow-hidden"
    />
  );
}
