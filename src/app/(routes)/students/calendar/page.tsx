import { CustomCalendar } from "@/app/components/ui/calendar/calendar";
import { auth } from "@/auth";
import { eventService } from "@/services";


export default async function Page() {
    const session = await auth();

    if (!session || !session.user) return null

    const data = await eventService.getCalendarEventsByUserId(Number(session.user.id));

    return (
        <div>
            <CustomCalendar events={data}></CustomCalendar>
        </div>
    );
}