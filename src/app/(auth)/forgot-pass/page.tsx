import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import ForgotForm from "./forgot-form";
import Image from "next/image";

export default function Page() {
  return (
    <div className="!p-12">
      <h1 className="text-center !pt-12 text-4xl font-bold">Forget Password</h1>
      <p className="text-center text-muted-foreground !pt-4 !pb-12">
        Enter valid information to update a new password
      </p>
      <Card>
        <CardContent className="grid lg:grid-cols-2 gap-6 !py-12">
          <div className="order-2 lg:order-1 h-full flex justify-center items-center">
            <ForgotForm />
          </div>
          <div className="order-1 lg:order-2 w-full h-full">
            <Image
              src="/image/auther.png"
              height={500}
              width={500}
              alt="thumbnail"
              className="h-[40dvh] object-contain !mx-auto"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
