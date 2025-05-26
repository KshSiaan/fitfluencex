import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <main className="!py-12 !px-4 md:!px-12 !space-y-6">
      <h1 className="!mb-12 text-center text-3xl lg:text-6xl font-bold">
        How It Works
      </h1>
      {/* Step 1 */}
      <div className="border-2 rounded-lg !p-6 grid grid-cols-1 md:grid-cols-7 gap-6 items-center">
        <div className="md:col-span-4">
          <h3 className="text-xl md:text-3xl font-bold !mb-6">
            Step 1: Discover and reach out to ideal UGC creators
          </h3>
          <p className="font-semibold text-muted-foreground">
            Explore our network of 5,000+ fitness creators across the globe,
            filter your search, and find the ideal match for your projects.
            Explore our network of 5,000+ fitness creators across the globe,
            filter your search, and find the ideal match for your projects.
            Explore our network of 5,000+ fitness creators across the globe,
            filter your search, and find the ideal match for your projects.
          </p>
          <div className="!mt-6">
            <Button asChild>
              <Link href={"/creators"}>See the creators</Link>
            </Button>
          </div>
        </div>
        <div
          className="md:col-span-3 h-64 md:h-full bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: "url('/image/hiw.jpg')" }}
        ></div>
      </div>

      {/* Step 2 */}
      <div className="border-2 rounded-lg !p-6 grid grid-cols-1 md:grid-cols-7 gap-6 items-center">
        <div
          className="md:col-span-3 h-64 md:h-full bg-contain bg-no-repeat bg-center md:order-last"
          style={{ backgroundImage: "url('/image/hiw.jpg')" }}
        ></div>
        <div className="md:col-span-4 md:order-first">
          <h3 className="text-xl md:text-3xl font-bold !mb-6">
            Step 2: Reviews and Feedback
          </h3>
          <p className="font-semibold text-muted-foreground">
            Explore our network of 5,000+ fitness creators across the globe,
            filter your search, and find the ideal match for your projects.
            Explore our network of 5,000+ fitness creators across the globe,
            filter your search, and find the ideal match for your projects.
            Explore our network of 5,000+ fitness creators across the globe,
            filter your search, and find the ideal match for your projects.
          </p>
          <div className="!mt-6">
            <Button asChild>
              <Link href={"/creators"}>See the creators</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Step 3 */}
      <div className="border-2 rounded-lg !p-6 grid grid-cols-1 md:grid-cols-7 gap-6 items-center">
        <div className="md:col-span-4">
          <h3 className="text-xl md:text-3xl font-bold !mb-6">
            Step 3: Your video is ready
          </h3>
          <p className="font-semibold text-muted-foreground">
            Explore our network of 5,000+ fitness creators across the globe,
            filter your search, and find the ideal match for your projects.
            Explore our network of 5,000+ fitness creators across the globe,
            filter your search, and find the ideal match for your projects.
            Explore our network of 5,000+ fitness creators across the globe,
            filter your search, and find the ideal match for your projects.
          </p>
          <div className="!mt-6">
            <Button asChild>
              <Link href={"/creators"}>See the creators</Link>
            </Button>
          </div>
        </div>
        <div
          className="md:col-span-3 h-64 md:h-full bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: "url('/image/hiw.jpg')" }}
        ></div>
      </div>
    </main>
  );
}
