"use client";

import React from 'react';
import { NavItem } from '@/models/navItem';
import { BookCheck, Calendar } from 'lucide-react';
import SidebarNav from './sidebar-nav';

const studentsNavItems: NavItem[] = [
    {
        title: 'Notas',
        description: 'Visualiza tus notas',
        icon: BookCheck,
        href: '/students/grade',
    },
    {
        title: 'Calendario',
        description: 'Visualiza tus eventos',
        icon: Calendar,
        href: '/students/calendar',
    },
    {
        title: 'Asistencia',
        description: 'Visualiza tus asistencia por materia',
        icon: Calendar,
        href: '/students/attendance',
    }
];

const StudentSidebarNav = () => {
    return (
        <SidebarNav title='Estudiante' itemsConf={studentsNavItems}></SidebarNav>
    );
};

export default StudentSidebarNav;
