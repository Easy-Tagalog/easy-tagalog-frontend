import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Search from "@/components/Search";
import { Palmtree, Speech } from "lucide-react";

// max-w-prose is good for <p>

const INFO = [
  {
    name: "Know more about the Philippines",
    Icon: Palmtree,
    description: "Each lesson will give some information about the Philippines",
  },
  {
    name: "Learn colloquial Tagalog",
    Icon: Speech,
    description:
      "Although learning proper tagalog is good, it would be better to learn tagalog the way native speakers speak casually",
  },
  {
    name: "Different types of questions",
    Icon: Speech,
    description:
      "Lessons will include word or sentence translations, answering questions, and reading short stories.",
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
            Kamusta! Welcome to Tagalog Lang. Learn how to speak Tagalog the way
            native speakers do.
          </p>

          <Search className="mt-2" />
        </div>

        {/* TODO: List Lessons */}
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-x-2 gap-y-12 sm:grid-cols-2 sm:gap-y-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {INFO.map((info) => (
              <div
                key={info.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<info.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {info.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {info.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
