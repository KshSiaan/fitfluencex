"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";

const tabs = [
  { label: "Yoga" },
  { label: "BodyBuilding" },
  { label: "Nutrition" },
];

export default function Tabs() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorProps, setIndicatorProps] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const node = tabRefs.current[active];
    if (node) {
      const { offsetLeft, offsetWidth } = node;
      setIndicatorProps({ left: offsetLeft, width: offsetWidth });
    }
  }, [active]);

  return (
    <div className="relative w-full flex flex-col items-center !py-12">
      {/* Tab container */}
      <div
        role="tablist"
        className="relative flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 !px-4 sm:!px-6 md:!px-10 !py-2 rounded-full"
      >
        {/* Background animation pill */}
        <motion.div
          className="absolute top-0 left-0 h-full bg-primary rounded-full z-0"
          animate={{ left: indicatorProps.left, width: indicatorProps.width }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />

        {/* Tab buttons */}
        {tabs.map((tab, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={active === i}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            onClick={() => setActive(i)}
            className={cn(
              "relative z-10 cursor-pointer text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-black !px-4 sm:!px-6 md:!px-8 lg:!px-10 !py-1 sm:!py-2 rounded-full transition-colors duration-300"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="!mt-24 w-full">
        <div className="w-[90%] md:w-3/4 grid  lg:grid-cols-4 gap-6 !mx-auto">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card className="!w-full bg-secondary !p-4" key={i}>
              <CardHeader
                className="h-[300px] w-full bg-cover bg-center bg-no-repeat rounded-lg"
                style={{
                  backgroundImage: "url('/image/hearder-card-1.jpg')",
                }}
              ></CardHeader>
              <CardContent className="!p-0 flex flex-row justify-between items-center">
                <div className="flex flex-row justify-start items-center gap-4">
                  <Avatar className="size-12">
                    <AvatarImage src={"https://avatar.iran.liara.run/public"} />
                    <AvatarFallback>UI</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col justify-between items-start">
                    <p className="text-base font-bold">Sara</p>
                    <p className="text-xs text-muted-foreground">Victoria</p>
                  </div>
                </div>
                <div className="flex flex-row justify-end items-center gap-2">
                  <StarIcon fill="#FFD700" stroke="0" />{" "}
                  <span className="text-semibold">4.9</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
