"use client";


import React from 'react';
import { usePathname } from 'next/navigation';
import { itemsConf } from './itemsConf';
import NavigationItem from './navItem';


const SidebarNav = () => {
  const pathname = usePathname();

  return (
    <nav className="min-h-screen bg-white shadow-md p-4 overflow-y-auto">
      <h2 className="text-lg font-bold mb-6">Administración</h2>
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
