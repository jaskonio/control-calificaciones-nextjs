"use client";

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { NavItem } from '@/models/navItem';


interface NavItemProps {
  item: NavItem;
  isActive: boolean;
}


const NavigationItem = ({ item, isActive }: NavItemProps) => {
  const Icon = item.icon;

  return (
    <Link href={item.href}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className={cn(
                "flex items-center p-4 rounded-lg transition-colors hover:bg-gray-100",
                isActive ? "bg-gray-200" : ""
              )}
            >
              <Icon className="w-6 h-6 mr-3" />
              <div className='hidden md:block'>
                <h4 className="text-sm font-semibold">{item.title}</h4>
                {/* <p className="text-xs text-gray-500">{item.description}</p> */}
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent side="right">{item.description}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Link>
  );
};

export default NavigationItem;
