type Route = {
    path: string;
    roles: string[];
};

const appRoutes: Route[] = [
    { path: '/admin', roles: ['admin'] },
    { path: '/settings', roles: ['admin', 'teacher', 'student'] },
    { path: '/', roles: ['admin', 'teacher', 'student'] },
];

export function hasAccess(role: string, url: string): boolean {
    const route = appRoutes.find(route => route.path === url);

    if (!route) {
        return false;
    }

    return route.roles.includes(role);
}