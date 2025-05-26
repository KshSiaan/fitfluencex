import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import Image from "next/image";
import Link from "next/link";
import React from "react";
import LoginForm from "./login-form";
import Image from "next/image";

export default function Page() {
  return (
    <div className="!px-4 !py-24 lg:!p-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Log in</CardTitle>
          <CardDescription className="text-lg font-semibold">
            Not registered?{" "}
            <Link href={"/register"} className="text-pretty text-primary">
              Register
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent className="grid lg:grid-cols-2 gap-6">
          <div className="">
            <LoginForm />
          </div>
          <div className="w-full h-full">
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
