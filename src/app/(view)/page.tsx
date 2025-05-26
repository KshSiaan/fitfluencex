import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, SearchIcon, StarIcon } from "lucide-react";
import Tabs from "./_home/tab";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  const badges = [
    { title: "Yoga" },
    { title: "Bodybuilding" },
    { title: "Gym" },
    { title: "Running" },
  ];
  return (
    <>
      <div
        className="h-[calc(100dvh-64px)] bg-zinc-200 grid grid-cols-2 bg-center bg-no-repeat bg-size-[70dvh]"
        style={{ backgroundImage: "url('/image/header-bg.svg')" }}
      >
        <div className="!p-12">
          <h1 className="text-6xl font-bold">
            Where Creators <br /> and Brands Unite <br /> in Style.
          </h1>
          <div className="w-full !mt-8">
            <div className="flex flex-row justify-start items-center gap-3 bg-background !p-2 rounded-lg">
              <Input
                className="bg-background !outline-0 !border-0 !ring-0"
                placeholder="Search for any service"
              />
              <Button size="icon">
                <SearchIcon />
              </Button>
            </div>
            <div className="!mt-6 flex flex-row justify-start items-center gap-2">
              {badges.map((x, i) => (
                <Badge variant="outline" key={i}>
                  {x.title}
                  <ArrowRight />
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <div className="relative !p-6 overflow-hidden">
          <div
            className="h-[60%] w-[240px] bg-cover rounded-xl absolute left-[calc(50%-150px)] translate-y-[20%] -translate-x-1/2 z-10"
            style={{ backgroundImage: "url('/image/hearder-card-1.jpg')" }}
          />
          <div
            className="h-[60%] w-[240px] bg-cover rounded-xl absolute left-1/2 translate-y-[20%] -translate-x-1/2 z-20 rotate-12"
            style={{ backgroundImage: "url('/image/hearder-card-1.jpg')" }}
          />
          <div
            className="h-[60%] w-[240px] bg-cover rounded-xl absolute left-[calc(50%+160px)] rotate-[24deg] translate-y-[30%] -translate-x-1/2 z-30"
            style={{ backgroundImage: "url('/image/hearder-card-1.jpg')" }}
          />
        </div>
      </div>
      <div className="!py-12">
        <h3 className="text-3xl text-center font-semibold">
          3000+ brands and agencies work with our creators
        </h3>
        <div className="w-full grid grid-cols-6 !px-6 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              className="w-full aspect-square bg-center bg-contain bg-no-repeat"
              style={{
                backgroundImage: `url('/image/homepage/sponsor (${
                  i + 1
                }).jpg')`,
              }}
              key={i}
            />
          ))}
        </div>
      </div>
      <div className="!pb-12">
        <h2 className="text-5xl font-bold text-center">
          Connect with 5,000+ <br /> UGC creators
        </h2>
        <div className="!my-12">
          <Tabs />
        </div>
        <div className="!my-12 flex flex-row justify-center items-center">
          <Button className="font-bold" size={"lg"}>
            Explore Creators
          </Button>
        </div>
        <div className="w-full flex flex-row justify-center items-center">
          <div className="w-4/5 grid grid-cols-2 gap-6">
            {Array.from({ length: 2 }).map((_, i) => (
              <div className="w-full bg-secondary rounded-xl !p-12" key={i}>
                <div className="flex flex-row justify-start items-center gap-4">
                  <Avatar className="size-12">
                    <AvatarImage src={"https://avatar.iran.liara.run/public"} />
                    <AvatarFallback>UI</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col justify-between items-start">
                    <p className="text-lg font-bold">Mary Jane</p>
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center gap-2 !py-4">
                  <StarIcon fill="#FFD700" stroke="0" className="size-5" />
                  <StarIcon fill="#FFD700" stroke="0" className="size-5" />
                  <StarIcon fill="#FFD700" stroke="0" className="size-5" />
                  <StarIcon fill="#FFD700" stroke="0" className="size-5" />
                  <StarIcon fill="#FFD700" stroke="0" className="size-5" />
                </div>
                <p className="text-xl">
                  The fit team were incredible to work with. The whole process
                  with the platform was amazing and the pool of creators were
                  really high quality.
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="!py-12">
          <h1 className="text-5xl font-bold text-center">FAQ</h1>
          <div className="!pt-12 w-full">
            <div className="w-4/5 grid grid-cols-2 !mx-auto gap-6">
              <div className="flex flex-col justify-between gap-6">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Accordion
                    key={i}
                    type="single"
                    className="bg-secondary rounded-2xl !px-4"
                    collapsible
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="!p-6 text-xl">
                        How do I create a creator account?
                      </AccordionTrigger>
                      <AccordionContent>
                        Click on the “Content Creator” button in What brings you
                        to Fitfluencex?, fill out your profile with your skills,
                        portfolio, and rates, and start receiving client
                        requests once approved.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ))}
              </div>
              <div className="flex flex-col justify-between gap-6">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Accordion
                    key={i}
                    type="single"
                    className="bg-secondary rounded-2xl !px-4"
                    collapsible
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="!p-6 text-xl">
                        How do I create a creator account?
                      </AccordionTrigger>
                      <AccordionContent>
                        Click on the “Content Creator” button in What brings you
                        to Fitfluencex?, fill out your profile with your skills,
                        portfolio, and rates, and start receiving client
                        requests once approved.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
