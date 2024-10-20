import { NavItem } from '@/models/navItem';
import {
    CalendarRange,
    GraduationCap,
    UserCheck,
    BookOpenText,
    House,
    User
} from 'lucide-react';


export const itemsConf: NavItem[] = [
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
        icon: User,
        href: '/admin/parents',
    }
];