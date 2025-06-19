/* eslint-disable import/no-extraneous-dependencies */
import Link from "next/link";
import type { IconType } from "react-icons";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import * as Tooltip from "@radix-ui/react-tooltip";

import { LINK } from "@/const";

const SocialLink = ({
    href,
    icon: Icon,
    label,
}: {
    href: string;
    icon: IconType;
    label: string;
}) => (
    <Tooltip.Provider delayDuration={0}>
        <Tooltip.Root>
            <Tooltip.Trigger asChild>
                <Link
                    href={href}
                    className="hover:text-notion-accent transition-colors duration-200 p-2 rounded-md hover:bg-notion-gray-light"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon />
                </Link>
            </Tooltip.Trigger>
            <Tooltip.Portal>
                <Tooltip.Content
                    className="bg-notion-gray-light text-notion-text-primary px-3 py-2 rounded-md text-sm shadow-lg border border-notion-gray-light"
                    sideOffset={5}
                    side="bottom"
                >
                    {label}
                </Tooltip.Content>
            </Tooltip.Portal>
        </Tooltip.Root>
    </Tooltip.Provider>
);

export const Footer = () => {
    return (
        <div className="px-2 py-2">
            <div className="flex flex-row justify-center gap-6 text-xl text-notion-text-secondary">
                <SocialLink href={LINK.GITHUB} icon={FaGithub} label="GitHub" />
                <SocialLink href={LINK.YOUTUBE} icon={FaYoutube} label="YouTube" />
                <SocialLink href={LINK.LINKEDIN} icon={FaLinkedin} label="LinkedIn" />
                <SocialLink href={LINK.INSTAGRAM} icon={FaInstagram} label="Instagram" />
            </div>
        </div>
    );
};
