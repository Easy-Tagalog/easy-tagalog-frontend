import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Search from "@/components/Search";
import { MapPinned, Speech, BookOpen, HomeIcon } from "lucide-react";

// max-w-prose is good for <p>

const INFO = [
  {
    name: "Learn Casual Tagalog",
    Icon: Speech,
    description:
      "Although Tagalog Lang will teach a bit on how to speak formally, our goal is to have you speak like a normal Tagalog speaker and speak colloquial Tagalog.",
  },
  {
    name: "Philippines Geography",
    Icon: MapPinned,
    description:
      "Each section and lesson will provide a little insight on different parts and provinces of the Philippines. While learning Tagalog, it's good to know some things about the country.",
  },
  {
    name: "Philippines Culture",
    Icon: HomeIcon,
    description:
      "Every Tagalog speaker should be accustomed to some of the Filipino culture. That being traditions, holidays, clothing, and food.",
  },
  {
    name: "Philippines History",
    Icon: BookOpen,
    description:
      "The Philippines has a rich history aswell, and it might be good to know how Tagalog was influenced by other countries and their languages.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            The Easiest Way to Learn{" "}
            <span className="bg-gradient-to-r from-ph-blue via-ph-red to-ph-yellow text-transparent bg-clip-text">
              Tagalog
            </span>
            .
          </h1>

          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Kamusta! Welcome to Easy Tagalog. Learn how to speak Tagalog the way
            native speakers do. Easy Tagalog is still a work in progress, but we
            will provide constant updates!
          </p>

          <Search className="mt-2 shadow-sm" />
        </div>
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20 px-4">
          <div className="flex flex-col gap-24">
            {INFO.map((info, i) => {
              // This flips the icon and description
              const isOdd = i % 2 !== 0;

              return (
                <div
                  key={info.name}
                  className={`text-left flex justify-around items-center gap-20 max-w-6xl mx-auto ${
                    isOdd && "flex-row-reverse"
                  }`}
                >
                  <div className="md:flex-shrink-0 flex justify-center">
                    <div className="h-24 w-24 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                      {<info.Icon className="w-1/2 h-1/2" />}
                    </div>
                  </div>

                  <div className="max-w-xl md:ml-4 lg:ml-0">
                    <h3 className="text-2xl font-medium text-gray-900">
                      {info.name}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {info.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </section>

      <section>
        <MaxWidthWrapper>
          <h2>Explore Lessons</h2>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
