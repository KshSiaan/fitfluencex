import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import React from "react";

export default function Page() {
  return (
    <main className="!py-12 !px-4 md:!px-12 !space-y-6">
      <h1 className="!mb-12 text-center text-4xl sm:text-5xl md:text-6xl font-bold">
        About Us
      </h1>
      <div className="">
        <h3 className="!mb-6 text-2xl sm:text-3xl font-bold">
          Welcome to Fitness
        </h3>
        <p className="font-medium text-base sm:text-lg">
          We&apos;re a platform built for creators and their biggest supporters.
          Whether you&apos;re an artist, musician, writer, gamer, or any type of
          content creator — we help you build meaningful connections with your
          fans. Our goal is to make it easier for creators to grow their
          community, share exclusive content, and get rewarded for their work.{" "}
          <br />
          Fans can follow, support, and interact with their favorite creators —
          all in one place. We’re passionate about empowering creative freedom
          while ensuring a safe and engaging space for everyone. Let’s grow
          together, one follower at a time. 💙
        </p>
      </div>
      <div className="!my-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="!space-y-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i}>
              <CardHeader>
                {/* Adjusted CardAction to ensure proper alignment on smaller screens */}
                <CardAction className="col-start-1 !justify-self-start w-full">
                  <Button className="w-full sm:w-auto">Our Vision</Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground text-sm sm:text-base">
                  Lorem ipsum dolor sit amet consectetur. Molestie nibh nibh
                  porttitor pulvinar nisl vestibulum. Ultricies augue semper eu
                  pulvinar adipiscing et. Pharetra ultrices elit orci amet. Duis
                  hac quis tellus leo augue donec in quam sem. Lorem ipsum dolor
                  sit amet consectetur. Molestie nibh nibh porttitor pulvinar
                  nisl vestibulum. Ultricies augue semper eu pulvinar adipiscing
                  et. Pharetra ultrices elit orci amet. Duis hac quis tellus leo
                  augue donec in quam sem. orttitor pulvinar nisl vestibulum.
                  Ultricies augue semper eu pulvinar adipiscing et. Pharetra
                  ultrices elit orci amet. Duis hac quis tellus leo augue donec
                  in quam sem.
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Adjusted image height for responsiveness */}
        <div
          className="h-64 md:h-auto bg-purple-50 rounded-lg bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/image/hearder-card-1.jpg')" }}
        ></div>
      </div>
    </main>
  );
}
