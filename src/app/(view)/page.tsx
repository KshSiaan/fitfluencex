import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, SearchIcon } from "lucide-react";

export default function Home() {
  const badges = [
    { title: "Yoga" },
    { title: "Bodybuilding" },
    { title: "Gym" },
    { title: "Running" },
  ];
  return (
    <>
      <div className="h-[calc(100dvh-64px)] bg-zinc-200 grid grid-cols-2">
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
          Connect with 5,000+ UGC creators
        </h2>
      </div>
    </>
  );
}
