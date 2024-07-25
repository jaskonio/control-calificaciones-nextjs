import EditTeacherForm from "@/app/components/teacher/edit-form";

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;

    return (
        <div>
            <EditTeacherForm  key={id} teacherId={id}/>
        </div>
    );
}