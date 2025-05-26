"use client";
import {
  CategoriesIcon,
  ChatsIcon,
  CustomOrdersIcon,
  DashboardIcon,
  NewsletterIcon,
  OrdersIcon,
  ServicesIcon,
  SettingIcon,
  WithdrawIcon,
} from "./localIcons";
import { useRouter, usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils"; // Assuming you use a cn util

export default function SideMenu() {
  const router = useRouter();
  const pathname = usePathname();
  const [current, setCurrent] = useState("dashboard");
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const pathParts = pathname.split("/");
    const extractedKey = pathParts[pathParts.length - 1] || "dashboard";
    setCurrent(extractedKey);
  }, [pathname]);

  const handleClick = (key: string, hasChildren = false) => {
    if (key === "/home") {
      router.push(key);
      return;
    }

    if (hasChildren) {
      setSettingsOpen((prev) => !prev);
      return;
    }

    setCurrent(key);
    router.push(`/creator/${key}`);
  };

  const items = [
    {
      label: "Dashboard",
      key: "dashboard",
      icon: <DashboardIcon className="size-6" />,
    },
    {
      label: "Services",
      key: "services",
      icon: <ServicesIcon className="size-6" />,
    },
    {
      label: "Withdraw",
      key: "withdraw",
      icon: <WithdrawIcon className="size-6" />,
    },
    {
      label: "Categories",
      key: "categories",
      icon: <CategoriesIcon className="size-6" />,
    },
    {
      label: "Order History",
      key: "orders",
      icon: <OrdersIcon className="size-6" />,
    },
    {
      label: "Pending Orders",
      key: "forum",
      icon: <CustomOrdersIcon className="size-6" />,
    },
    { label: "Chat", key: "chat", icon: <ChatsIcon className="size-6" /> },
    {
      label: "Settings",
      key: "settings",
      icon: <SettingIcon className="size-6" />,
      children: [
        {
          label: "Newsletter",
          key: "newsletter",
          icon: <NewsletterIcon />,
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-2 !mt-12">
      {items.map((x, i) => (
        <div key={i} className="">
          <Button
            onClick={() => handleClick(x.key, !!x.children)}
            variant={current === x.key ? "default" : "ghost"}
            size="lg"
            className={cn("w-full justify-start gap-2", {
              "bg-muted !text-foreground font-bold": current === x.key,
            })}
          >
            {x.icon} {x.label}
          </Button>

          {x.children && settingsOpen && current === "settings" && (
            <div className="!ml-6 !mt-1 flex flex-col gap-1">
              {x.children.map((child, j) => (
                <Button
                  key={j}
                  onClick={() => handleClick(child.key)}
                  variant={current === child.key ? "default" : "ghost"}
                  className={cn("w-full justify-start gap-2 text-sm", {
                    "bg-muted": current === child.key,
                  })}
                >
                  {child.icon} {child.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
