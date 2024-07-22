import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo.png"
      alt="Easy Tagalog logo"
      width={150}
      height={150}
      className="overflow-hidden"
    />
  );
}
