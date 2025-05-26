import React from "react";
import SideMenu from "./side-menu";
import { Button } from "../ui/button";
import { LogOutIcon } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="!p-6 h-full flex flex-col justify-between">
      <div className="">
        <h1 className="text-2xl font-bold text-center">Fitfluencex</h1>
        <div className="">
          <SideMenu />
        </div>
      </div>
      <div className="w-full">
        <Button className="w-full">
          Log Out <LogOutIcon />
        </Button>
      </div>
    </div>
  );
}
