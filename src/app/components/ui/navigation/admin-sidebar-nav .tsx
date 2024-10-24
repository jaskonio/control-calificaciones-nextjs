"use client";


import React from 'react';
import { usePathname } from 'next/navigation';
import { NavItem } from '@/models/navItem';
import {
  CalendarRange,
  GraduationCap,
  UserCheck,
  BookOpenText,
  House,
  Shapes,
  Users,
  ListCheck,
  School,
  CalendarClock,
  BookOpenCheck,
  Settings,
  Clock
} from 'lucide-react';
import SidebarNav from './sidebar-nav';


const itemsConf: NavItem[] = [
  {
    title: 'Años Escolares',
    description: 'Gestiona los períodos académicos',
    icon: CalendarRange,
    href: '/admin/school',
  },
  {
    title: 'Docentes',
    description: 'Gestiona el personal docente',
    icon: GraduationCap,
    href: '/admin/teachers',
  },
  {
    title: 'Estudiantes',
    description: 'Administra la información de los estudiantes',
    icon: UserCheck,
    href: '/admin/students',
  },
  {
    title: 'Asignaturas',
    description: 'Administra la información de las asignaturas',
    icon: BookOpenText,
    href: '/admin/subjects',
  },
  {
    title: 'Cursos',
    description: 'Administra la información de las Cursos',
    icon: House,
    href: '/admin/courses',
  },
  {
    title: 'Padres',
    description: 'Administra la información de las Padres',
    icon: Users,
    href: '/admin/parents',
  },
  {
    title: 'Clases',
    description: 'Administra la información de las clases',
    icon: Shapes,
    href: '/admin/class',
  },
  {
    title: 'Asistencias',
    description: 'Administra la información de las asistencias',
    icon: ListCheck,
    href: '/admin/attendance',
  },
  {
    title: 'Aulas',
    description: 'Administra la información de las aulas',
    icon: School,
    href: '/admin/classroom',
  },
  {
    title: 'Eventos',
    description: 'Administra la información de los eventos',
    icon: CalendarClock,
    href: '/admin/event',
  },
  {
    title: 'Calificaciones',
    description: 'Administra la información de las calificaciones',
    icon: BookOpenCheck,
    href: '/admin/grade',
  },
  {
    title: 'Horarios',
    description: 'Administra la información de los horarios',
    icon: Clock,
    href: '/admin/schedule',
  },
  {
    title: 'Configuracion',
    description: 'Administra la información de las configuraciones',
    icon: Settings,
    href: '/admin/setting',
  }
];

const AdminSidebarNav = () => {
  return (
    <SidebarNav title='Adminitración' itemsConf={itemsConf}></SidebarNav>
  );
};

export default AdminSidebarNav;
