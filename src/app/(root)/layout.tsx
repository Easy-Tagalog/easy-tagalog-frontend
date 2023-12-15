import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="flex-grow flex-1">{children}</div>
    </>
  );
}
