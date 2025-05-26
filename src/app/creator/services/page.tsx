import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { PlusIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="grid grid-cols-4 gap-6 !pb-12">
      {Array.from({ length: 6 }).map((_, i) => (
        <Card className="!p-4" key={i}>
          <CardHeader
            className="aspect-video bg-cover bg-center bg-no-repeat rounded-lg"
            style={{ backgroundImage: "url('/image/hearder-card-1.jpg')" }}
          ></CardHeader>
          <CardContent className="!p-0">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row justify-start items-center gap-4">
                <Avatar className="size-12">
                  <AvatarImage src="https://avatar.iran.liara.run/public" />
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
            </div>

            <CardDescription className="text-xs !mt-2">
              Lorem ipsum dolor sit amet consectetur. Dictum cras facilisi nunc
              facilisis. Eleifend vel sed donec felis libero. In imperdiet
              pellentesque at urna velit in massa potenti. Id eleifend nulla
              odio dignissim malesuada est egestas congue arcu.
            </CardDescription>
          </CardContent>
          <CardFooter className="w-full">
            <h3 className="text-center w-full text-lg font-bold">$25.00</h3>
          </CardFooter>
        </Card>
      ))}
      <Button className="fixed bottom-4 right-4" asChild>
        <Link href={"/creator/services/add"}>
          <PlusIcon /> Add Service
        </Link>
      </Button>
    </div>
  );
}
