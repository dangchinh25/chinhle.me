"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";

import * as Tabs from "@radix-ui/react-tabs";
import { Plus, X } from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
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
    const router = useRouter();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [openTabs, setOpenTabs] = useState<string[]>(["about"]);

    // Determine the active tab based on current pathname
    const activeTab = useMemo(() => {
        // Handle root path
        if (pathname === "/") return "about";

        // Handle other paths
        const tab = tabs.find((tab) => tab.href === pathname);
        return tab ? tab.key : "about";
    }, [pathname]);

    useEffect(() => {
        const tab = tabs.find((tab) => tab.href === pathname);
        if (tab && !openTabs.includes(tab.key)) {
            setOpenTabs([...openTabs, tab.key]);
        }
    }, [pathname]);

    // Function to open a new tab
    const openTab = (tabKey: string) => {
        if (!openTabs.includes(tabKey)) {
            setOpenTabs([...openTabs, tabKey]);
        }
        // Navigate to the tab's page immediately
        const tab = tabs.find((t) => t.key === tabKey);
        if (tab) {
            router.push(tab.href);
        }
        setIsDialogOpen(false);
    };

    // Function to close a tab (except About)
    const closeTab = (tabKey: string) => {
        if (tabKey !== "about") {
            let targetTabIndex: number | undefined;

            const currentTabIndex = openTabs.indexOf(tabKey);
            if (currentTabIndex == openTabs.length - 1) {
                targetTabIndex = currentTabIndex - 1;
            } else {
                targetTabIndex = currentTabIndex + 1;
            }

            const targetTab = tabs.find((t) => t.key === openTabs[targetTabIndex]);
            if (targetTab) {
                router.push(targetTab.href);
            }

            setOpenTabs(openTabs.filter((tab) => tab !== tabKey));
        }
    };

    // Get tabs that are currently open, maintaining the order they were opened
    const visibleTabs = openTabs
        .map((tabKey) => tabs.find((tab) => tab.key === tabKey))
        .filter((tab): tab is (typeof tabs)[0] => tab !== undefined);

    return (
        <div className="w-full flex items-center">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                    <div className="flex items-center px-2 cursor-pointer">
                        <div className="p-1 flex items-center justify-center hover:bg-notion-gray-light hover:rounded-md">
                            <Plus className=" text-notion-text-secondary" size={18} />
                        </div>
                    </div>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Open in new tab...</DialogTitle>
                    </DialogHeader>
                    <div className="py-2 space-y-4">
                        {/* Opened Tabs Section */}
                        <div>
                            <h3 className="text-sm font-medium text-notion-text mb-2">Tabs</h3>
                            {visibleTabs.map((tab) => (
                                <div
                                    key={tab.key}
                                    className={cn(
                                        "flex items-center px-4 py-2 rounded-lg transition-colors",
                                        "hover:bg-notion-gray-light hover:text-notion-text",
                                        "text-notion-text-secondary cursor-pointer",
                                    )}
                                    onClick={() => {
                                        router.push(tab.href);
                                        setIsDialogOpen(false);
                                    }}
                                >
                                    <span className="text-sm">{tab.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Unopened Pages Section */}
                        <div>
                            <h3 className="text-sm font-medium text-notion-text mb-2">Pages</h3>
                            {tabs
                                .filter((tab) => !openTabs.includes(tab.key))
                                .map((tab) => (
                                    <div
                                        key={tab.key}
                                        className={cn(
                                            "flex items-center px-4 py-2 rounded-lg transition-colors",
                                            "hover:bg-notion-gray-light hover:text-notion-text",
                                            "text-notion-text-secondary cursor-pointer",
                                        )}
                                        onClick={() => {
                                            openTab(tab.key);
                                        }}
                                    >
                                        <span className="text-sm">{tab.label}</span>
                                    </div>
                                ))}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
            <Tabs.Root value={activeTab} className="flex-1">
                <Tabs.List className="flex flex-row gap-0">
                    {visibleTabs.map((tab) => (
                        <Tabs.Trigger
                            key={tab.key}
                            value={tab.key}
                            className={cn(
                                "flex items-center px-3 py-2 w-32 text-sm font-medium transition-colors",
                                "bg-transparent text-notion-text-secondary cursor-default",
                                activeTab === tab.key
                                    ? "bg-notion-bg text-notion-text font-semibold shadow-sm"
                                    : "hover:bg-notion-gray-light hover:text-notion-text",
                                "focus:outline-none focus-visible:ring-2 focus-visible:ring-notion-accent focus:z-20",
                                "border-r",
                            )}
                            onClick={() => router.push(tab.href)}
                        >
                            <div className="flex items-center justify-between w-full">
                                <span>{tab.label}</span>
                                {tab.key !== "about" && (
                                    <div
                                        className="cursor-pointer"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            closeTab(tab.key);
                                        }}
                                    >
                                        <div
                                            className={cn(
                                                "p-1/2 flex items-center justify-center hover:rounded-sm",
                                                activeTab === tab.key
                                                    ? "hover:bg-notion-gray-light"
                                                    : "hover:bg-notion-gray-subtle",
                                            )}
                                        >
                                            <X className=" text-notion-text-secondary" size={18} />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Tabs.Trigger>
                    ))}
                </Tabs.List>
            </Tabs.Root>
        </div>
    );
};
