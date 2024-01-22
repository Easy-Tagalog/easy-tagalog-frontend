import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center justify-center select-none w-fit">
      <div className="flex flex-col font-semibold uppercase italic">
        {/* <Image
          src="/logo.png"
          alt="Tagalog Lang logo"
          width={150}
          height={150}
          className="overflow-hidden"
        /> */}
        <span className="leading-none">Easy</span>
        <span className="leading-none">Tagalog</span>
      </div>
    </div>
  );
}
