"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export default function Page() {
  return (
    <div className="md:!px-[7%] !px-4 !py-12 lg:h-screen">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-7 gap-6">
        {/* Conversations List */}
        <div className="order-2 lg:order-1 h-full col-span-1 md:col-span-2 border rounded-lg overflow-y-auto">
          <div className="!p-4 sticky top-0 bg-background z-10 border-b">
            <Input placeholder="Search" />
          </div>
          {Array.from({ length: 10 }).map(
            (
              _,
              i // Increased items for scroll demonstration
            ) => (
              <div
                className="flex flex-row justify-start items-center gap-4 sm:gap-6 !px-4 sm:!px-6 !py-3 border-b cursor-pointer hover:bg-muted transition-colors"
                key={i}
              >
                <Avatar className="!size-10 sm:!size-12">
                  <AvatarImage src="https://avatar.iran.liara.run/public" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex-1 overflow-hidden">
                  <h4 className="text-sm sm:text-base font-bold truncate">
                    Json {i + 1}
                  </h4>
                  <p className="text-xs sm:text-sm text-primary font-bold truncate">
                    Sent a message
                  </p>
                </div>
              </div>
            )
          )}
        </div>

        {/* Chat Window */}
        <div className="order-1 lg:order-2 h-full col-span-1 md:col-span-5 border rounded-lg flex flex-col justify-between items-start">
          {/* Chat Header */}
          <div className="flex flex-row justify-start items-center gap-3 !px-4 !py-3 border-b w-full bg-background z-10">
            <Avatar className="!size-10 sm:!size-12">
              <AvatarImage src="https://avatar.iran.liara.run/public" />
              <AvatarFallback>KT</AvatarFallback>
            </Avatar>
            <div className="w-full">
              <h4 className="text-base font-bold">Katie</h4>
              <div
                className="w-full text-sm text-green-500 font-bold flex flex-row items-center gap-2"
                suppressHydrationWarning
              >
                <div className="size-2.5 sm:size-3 rounded-full bg-green-500" />{" "}
                online
              </div>
            </div>
          </div>

          {/* Chat Messages Area (Placeholder) */}
          <div className="flex-1 w-full !p-4 overflow-y-auto">
            {/* Messages will go here */}
            <div className="flex justify-end !mb-2">
              <div className="bg-blue-500 text-white !p-2 rounded-lg max-w-[70%]">
                Hi Katie, how are you doing today?
              </div>
            </div>
            <div className="flex justify-start !mb-2">
              <div className="bg-gray-200 !p-2 rounded-lg max-w-[70%]">
                I&apos;m doing great, thanks for asking! And you?
              </div>
            </div>
            <div className="flex justify-end !mb-2">
              <div className="bg-blue-500 text-white !p-2 rounded-lg max-w-[70%]">
                I&apos;m fantastic! Just working on some new content.
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className="flex flex-row justify-between w-full !p-4 sm:!p-6 gap-4 sm:gap-6 border-t bg-background">
            <Input placeholder="Type your message..." className="flex-1" />
            <Button>Send</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
