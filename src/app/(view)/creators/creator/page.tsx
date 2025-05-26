"use client";
import React from "react";
import { HeartIcon, PersonStandingIcon } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProfilePart from "@/components/core/profile-part";

export default function Page() {
  return (
    <div className="!py-12 !px-4 md:!px-12 grid grid-cols-1 md:grid-cols-11 gap-6">
      {/* Profile Section */}
      <div className="col-span-1 md:col-span-3 border-2 rounded-lg !p-6 self-start">
        <ProfilePart type="full" />
      </div>

      {/* Main Content Section */}
      <div className="col-span-1 md:col-span-8">
        <div>
          <h2 className="text-3xl font-semibold">Categories</h2>
          <div className="w-full !mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square border-2 w-full rounded-lg flex flex-col justify-center gap-2 items-center h-full p-2"
              >
                <PersonStandingIcon className="size-8 sm:size-10 md:size-12" />
                <p className="text-base sm:text-lg md:text-xl font-semibold text-center">
                  Yoga
                </p>
              </div>
            ))}
          </div>

          {/* Tabs for Videos/Photos */}
          <div className="flex flex-row justify-center items-center !mt-12 md:!mt-24">
            <Tabs defaultValue="account" className="border-2 !p-1 rounded-lg">
              <TabsList>
                <TabsTrigger
                  value="account"
                  className="!px-4 !py-2 sm:!px-8 sm:!py-4 text-base sm:text-xl data-[state=active]:!bg-secondary"
                >
                  Videos
                </TabsTrigger>
                <TabsTrigger
                  value="password"
                  className="!px-4 !py-2 sm:!px-8 sm:!py-4 text-base sm:text-xl data-[state=active]:!bg-secondary"
                >
                  Photos
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Content Grid (Videos/Photos) */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 !mt-12">
            {Array.from({ length: 10 }).map((_, i) => (
              <Card
                key={i}
                className="w-full aspect-[9/12] !p-2 hover:shadow-lg transition-all"
              >
                <CardContent
                  className="w-full h-[100%] bg-secondary rounded-lg bg-center bg-cover bg-no-repeat relative !p-0 !m-0"
                  style={{
                    backgroundImage: "url('/image/hearder-card-1.jpg')",
                  }}
                >
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full absolute right-2 top-2"
                  >
                    <HeartIcon />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
