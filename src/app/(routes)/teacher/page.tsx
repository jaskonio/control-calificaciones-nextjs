import { CreateTeacher } from "@/app/components/teacher/buttons";
import TeacherTable from "@/app/components/teacher/table";

export default async function Page() {
    return (
        <div>
            <h1>Teacher</h1>
            <CreateTeacher/>
            <TeacherTable></TeacherTable>
        </div>
    );
}