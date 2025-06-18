'use client';

import * as React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { LINK } from '@/const';

const tabs = [
  { key: 'about', label: 'About', href: '/' },
  { key: 'projects', label: 'Projects', href: '/projects' },
  { key: 'likes', label: 'Likes', href: '/likes' },
  { key: 'wiki', label: 'Wiki', href: LINK.WIKI },
  { key: 'now', label: 'Now', href: '/now' },
  { key: 'contact', label: 'Contact', href: '/contact' },
];

export default function NotionTabsNavbar() {
  // Optionally, you could sync this with the current route
  const [activeTab, setActiveTab] = React.useState('about');

  return (
    <div className='w-full bg-notion-bg border-b border-notion-border flex items-center'>
      <Tabs.Root value={activeTab} onValueChange={setActiveTab} className='flex-1'>
        <Tabs.List className='flex flex-row gap-0'>
          {tabs.map(tab => (
            <Tabs.Trigger
              key={tab.key}
              value={tab.key}
              className={cn(
                'flex items-center px-5 py-3 min-w-[90px] text-sm font-medium transition-colors',
                'bg-notion-bg text-notion-text-secondary hover:bg-notion-gray-light hover:text-notion-text',
                activeTab === tab.key && 'bg-white text-notion-text font-semibold shadow-sm',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-notion-accent focus:z-20',
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
} 