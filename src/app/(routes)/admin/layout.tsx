import SidebarNav from "@/app/components/ui/navigation/sidebarNav";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <SidebarNav />
            <main className="flex-1 p-6 bg-gray-50">
                {children}
            </main>
        </div>
    );
}