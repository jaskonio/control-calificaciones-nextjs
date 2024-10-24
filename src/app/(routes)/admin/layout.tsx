import AdminSidebarNav from "@/app/components/ui/navigation/admin-sidebar-nav ";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <AdminSidebarNav />
            <main className="flex-1 p-6 bg-gray-50">
                {children}
            </main>
        </div>
    );
}