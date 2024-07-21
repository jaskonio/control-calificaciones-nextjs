import { fetchTeacherById } from "@/lib/actions";

export default async function Page({ params }: { params: { id: string } }) {
    const teacher = await fetchTeacherById(params.id);

    return (
        <div>
            {
                <div key={teacher?.id}>
                    <p>{teacher?.id}</p>
                    <p>{teacher?.firstName}</p>
                </div>
            }
        </div>
    );
}