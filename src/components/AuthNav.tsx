import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { Separator } from "./ui/separator";

export default function AuthNav() {
  return (
    <div className="flex items-center gap-3">
      <Link href="sign-in" className={buttonVariants({ variant: "outline" })}>
        Sign in
      </Link>

      <Separator orientation="vertical" className="py-4" />

      <Link href="/sign-up" className={buttonVariants({ variant: "default" })}>
        Create Account
      </Link>
    </div>
  );
}
