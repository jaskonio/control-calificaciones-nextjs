import { GetUserId } from "@/actions/sessionActions";
import { attendanceService, schoolService } from "@/services";
import AttendancePanel from "./attendance-panel";

export default async function Page() {
    const userId = await GetUserId()
    const academicYearOptions = await schoolService.getAllOptions('id', 'name')
    const data = await attendanceService.getAttendanceByStudentId(userId)

    return (
        <AttendancePanel studentId={userId} academicYears={academicYearOptions} attendanceData={data}></AttendancePanel>
    );
}