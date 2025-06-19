import { cn } from "@/lib/utils";

export type Props = {
    children: React.ReactNode;
    className?: string;
};

export const TextEntry = ({ children, className }: Props) => {
    return (
        <div
            className={cn(
                "mb-6 text-base leading-7 text-notion-text",
                "prose prose-gray max-w-none",
                "first:mt-0 last:mb-0",
                className,
            )}
        >
            {children}
        </div>
    );
};
