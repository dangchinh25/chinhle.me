import * as React from "react";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

interface TooltipProps {
    children: React.ReactNode;
    text: string;
    side?: "top" | "right" | "bottom" | "left";
    sideOffset?: number;
    delayDuration?: number;
    className?: string;
}

const Tooltip = ({
    children,
    text,
    side = "top",
    sideOffset = 4,
    delayDuration = 0,
    className,
}: TooltipProps) => (
    <TooltipProvider delayDuration={delayDuration}>
        <TooltipPrimitive.Root>
            <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
            <TooltipPrimitive.Portal>
                <TooltipPrimitive.Content
                    side={side}
                    sideOffset={sideOffset}
                    className={cn(
                        "bg-notion-gray-light text-notion-text-primary px-3 py-2 rounded-md text-sm shadow-lg border border-notion-gray-light",
                        className,
                    )}
                >
                    {text}
                </TooltipPrimitive.Content>
            </TooltipPrimitive.Portal>
        </TooltipPrimitive.Root>
    </TooltipProvider>
);

export { Tooltip, TooltipProvider };
