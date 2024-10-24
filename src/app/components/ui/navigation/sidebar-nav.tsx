"use client";


import React from 'react';
import { usePathname } from 'next/navigation';
import NavigationItem from './navItem';
import { NavItem } from '@/models/navItem';


const SidebarNav = ({ title, itemsConf }: { title: string, itemsConf: NavItem[] }) => {
  const pathname = usePathname();

  return (
    <nav className="min-h-screen bg-white shadow-md p-4 overflow-y-auto">
      <h2 className="text-lg font-bold mb-6">{title}</h2>
      <div className="space-y-2">
        {itemsConf.map((item) => (
          <NavigationItem
            key={item.href}
            item={item}
            isActive={pathname === item.href}
          />
        ))}
      </div>
    </nav>
  );
};

export default SidebarNav;
