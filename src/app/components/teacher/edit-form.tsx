import { fetchTeacherById } from "@/lib/teacherActions";
import TeacherForm from "./form";

export default async function EditTeacherForm({teacherId}: {teacherId:string}) {
    const teacher = await fetchTeacherById(teacherId);

    return (
        <>
        <TeacherForm teacher={teacher}/>
        </>
    );
}