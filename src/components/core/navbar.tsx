import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Combobox } from "../ui/combobox";

const navlinks = [
  { title: "Content Creators", to: "/creators" },
  { title: "Brands", to: "/" },
  { title: "Pricing", to: "/" },
  { title: "How it works", to: "/" },
];

const langs = [
  { label: "English", value: "english" },
  { label: "Spanish", value: "spanish" },
  { label: "Chinese", value: "chinese" },
  { label: "French", value: "french" },
];

export default function Navbar() {
  const signedIn = false;
  return (
    <nav className="h-[64px] w-full bg-background flex items-center !px-4 md:!px-8">
      {/* Left: Logo (fixed size) */}
      <div className="flex-shrink-0">
        <Link href="/" className="font-bold text-2xl">
          Fitfluencex
        </Link>
      </div>

      <div className="flex-1 flex justify-center ">
        {navlinks.map((link, index) => (
          <Button key={index} variant="ghost" asChild>
            <Link href={link.to}>{link.title}</Link>
          </Button>
        ))}
        <Combobox frameworks={langs} />
      </div>

      {/* Right: User actions (fixed size) */}
      <div className="flex-shrink-0 flex items-center gap-4">
        {signedIn ? (
          <Avatar>
            <AvatarImage src="/image/icon.jpg" />
            <AvatarFallback>UI</AvatarFallback>
          </Avatar>
        ) : (
          <Button size="lg" variant="ghost" asChild>
            <Link href={"/login"}>Sign in</Link>
          </Button>
        )}
        <Button size="lg">Order</Button>
      </div>
    </nav>
  );
}
