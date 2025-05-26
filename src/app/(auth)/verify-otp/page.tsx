import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import OtpForm from "./forgot-form";

export default function Page() {
  return (
    <div className="!px-4 !py-12 md:!px-12 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-center !pt-8 text-3xl sm:text-4xl font-bold">
        Forget Password
      </h1>
      <p className="text-center text-muted-foreground !pt-4 !pb-8 text-sm sm:text-base max-w-prose">
        Enter valid information to update a new password
      </p>
      <Card className="w-full max-w-md md:max-w-lg lg:max-w-xl !mx-auto">
        {" "}
        {/* Responsive width for the card */}
        <CardHeader className="text-center">
          <CardTitle className="text-xl sm:text-2xl font-bold">
            Verification code
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">
            We sent a reset link to contact@dscode.com. Enter the 6-digit code
            that is mentioned in the email.
          </CardDescription>
        </CardHeader>
        <CardContent className="!p-4 sm:!p-6">
          {" "}
          {/* Adjust card content padding */}
          <div className="">
            <OtpForm />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
