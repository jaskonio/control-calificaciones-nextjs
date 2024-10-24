"use client";

import React from 'react';
import { NavItem } from '@/models/navItem';
import { BookCheck } from 'lucide-react';
import SidebarNav from './sidebar-nav';

const studentsNavItems: NavItem[] = [
    {
        title: 'Notas',
        description: 'Visualiza tus notas',
        icon: BookCheck,
        href: '/students/grade',
    }
];

const StudentSidebarNav = () => {
    return (
        <SidebarNav title='Estudiante' itemsConf={studentsNavItems}></SidebarNav>

    );
};

export default StudentSidebarNav;
