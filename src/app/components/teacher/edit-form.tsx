import { fetchTeacherById } from "@/lib/services/schoolYearService";
import TeacherForm from "./form";

export default async function EditTeacherForm({teacherId}: {teacherId:string}) {
    const teacher = await fetchTeacherById(teacherId);

    return (
        <>
        <TeacherForm teacher={teacher}/>
        </>
    );
}