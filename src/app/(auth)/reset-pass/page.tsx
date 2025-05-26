import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import ResetForm from "./reset-form";

export default function Page() {
  return (
    <div className="!px-4 !py-12 md:!px-12 h-[calc(100dvh-64px)] flex justify-center items-center">
      <Card className="w-full max-w-md md:max-w-lg lg:max-w-xl">
        {" "}
        {/* Adjusted width for responsiveness */}
        <CardHeader className="text-center">
          {" "}
          {/* Centered text for consistency */}
          <CardTitle className="text-2xl sm:text-3xl font-bold">
            {" "}
            {/* Responsive text size for title */}
            Create a New Password
          </CardTitle>
          <CardDescription className="text-base sm:text-lg font-semibold">
            {" "}
            {/* Responsive text size for description */}
            Choose a strong password that you can remember easily.
          </CardDescription>
        </CardHeader>
        <CardContent className="!p-4 sm:!p-6">
          {" "}
          {/* Adjusted padding inside card content */}
          <div>
            <ResetForm />
          </div>
          {/* The image div is commented out, so it won't affect the layout.
              If it were active, you'd want to add responsive classes here too.
          <div className="w-full h-full">
             <Image src="" height={} width={} />
          </div>
          */}
        </CardContent>
      </Card>
    </div>
  );
}
