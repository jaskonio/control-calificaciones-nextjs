import { GetUserId } from "@/actions/sessionActions";
import GenericCalendar from "@/app/components/ui/calendar/calendar";
import { eventService } from "@/services";


export default async function Page() {
    const userId = await GetUserId()

    const data = await eventService.getCalendarEventsByStudentId(userId);

    return (
        <div>
            <GenericCalendar entities={data}></GenericCalendar>
        </div >
    );
}