"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import * as Tabs from "@radix-ui/react-tabs";
import { Plus } from "lucide-react";

import { LINK } from "@/const";
import { cn } from "@/lib/utils";

const tabs = [
    { key: "about", label: "About", href: "/" },
    { key: "projects", label: "Projects", href: "/projects" },
    { key: "likes", label: "Likes", href: "/likes" },
    { key: "wiki", label: "Wiki", href: LINK.WIKI },
    { key: "now", label: "Now", href: "/now" },
    { key: "contact", label: "Contact", href: "/contact" },
];

export const NotionTabsNavbar = () => {
    const pathname = usePathname();

    // Function to determine the active tab based on current pathname
    const getActiveTab = () => {
        // Handle root path
        if (pathname === "/") return "about";

        // Handle other paths
        const tab = tabs.find((tab) => tab.href === pathname);
        return tab ? tab.key : "about";
    };

    const activeTab = getActiveTab();

    return (
        <div className="w-full flex items-center">
            <div className="flex items-center py-3 px-2 cursor-pointer">
                <div className="p-1 flex items-center justify-center hover:bg-notion-gray-light">
                    <Plus className=" text-notion-text-secondary" size={18} />
                </div>
            </div>
            <Tabs.Root value={activeTab} className="flex-1">
                <Tabs.List className="flex flex-row gap-0">
                    {tabs.map((tab) => (
                        <Tabs.Trigger
                            key={tab.key}
                            value={tab.key}
                            className={cn(
                                "flex items-center px-5 py-3 min-w-[90px] text-sm font-medium transition-colors",
                                "bg-transparent text-notion-text-secondary",
                                activeTab === tab.key
                                    ? "bg-notion-bg text-notion-text font-semibold shadow-sm cursor-default"
                                    : "hover:bg-notion-gray-light hover:text-notion-text cursor-pointer",
                                "focus:outline-none focus-visible:ring-2 focus-visible:ring-notion-accent focus:z-20",
                                "border-r",
                            )}
                            asChild
                        >
                            <Link href={tab.href}>{tab.label}</Link>
                        </Tabs.Trigger>
                    ))}
                </Tabs.List>
            </Tabs.Root>
        </div>
    );
};
