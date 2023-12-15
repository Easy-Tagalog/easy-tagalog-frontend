import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

export default function AuthNav() {
  return (
    <div className="flex items-center gap-3">
      <Link href="sign-in" className={buttonVariants({ variant: "outline" })}>
        Sign in
      </Link>

      <span className="h-6 w-px bg-gray-200" aria-hidden="true" />

      <Link href="/sign-up" className={buttonVariants({ variant: "default" })}>
        Create Account
      </Link>
    </div>
  );
}
