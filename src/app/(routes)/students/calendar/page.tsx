import { GetUserId } from "@/actions/sessionActions";
import { eventService } from "@/services";
import StudentCalendar from "./student-calendar";


export default async function Page() {
    const userId = await GetUserId()

    const data = await eventService.getCalendarEventsByStudentId(userId);

    return (
        <div>
            <StudentCalendar events={data}></StudentCalendar>
        </div>
    );
}