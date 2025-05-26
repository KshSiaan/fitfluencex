"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Combobox } from "../ui/combobox";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navlinks = [
  { title: "Content Creators", to: "/creators" },
  { title: "Brands", to: "/brands" },
  { title: "How it works", to: "/how-it-works" },
];

const langs = [
  { label: "English", value: "english" },
  { label: "Spanish", value: "spanish" },
  { label: "Chinese", value: "chinese" },
  { label: "French", value: "french" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const signedIn = false;

  return (
    <nav className="w-full bg-background border-b">
      <div className="h-[64px] flex items-center justify-between !px-4 md:!px-8">
        {/* Left: Logo */}
        <Link href="/" className="font-bold text-2xl">
          Fitfluencex
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Center Links: Desktop */}
        <div className="hidden lg:flex flex-1 justify-center items-center gap-2">
          {navlinks.map((link, index) => (
            <Button key={index} variant="ghost" asChild>
              <Link href={link.to}>{link.title}</Link>
            </Button>
          ))}
          <Combobox frameworks={langs} />
        </div>

        {/* Right: Avatar or Login */}
        <div className="hidden lg:flex items-center gap-4">
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
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          "lg:hidden flex flex-col !px-4 !pt-2 gap-2 transition-all duration-300",
          open ? "block" : "hidden"
        )}
      >
        <div className="!mt-2 flex flex-row justify-end items-center">
          <Combobox frameworks={langs} />
        </div>
        {navlinks.map((link, index) => (
          <Link
            key={index}
            href={link.to}
            className="!py-2 text-sm font-medium border-b w-full block hover:bg-secondary"
            onClick={() => setOpen(false)}
          >
            {link.title}
          </Link>
        ))}

        <div className="flex flex-col gap-2 !mt-4">
          {signedIn ? (
            <Avatar>
              <AvatarImage src="/image/icon.jpg" />
              <AvatarFallback>UI</AvatarFallback>
            </Avatar>
          ) : (
            <Button variant="outline" asChild>
              <Link href="/login">Sign in</Link>
            </Button>
          )}
          <Button>Order</Button>
        </div>
      </div>
    </nav>
  );
}
