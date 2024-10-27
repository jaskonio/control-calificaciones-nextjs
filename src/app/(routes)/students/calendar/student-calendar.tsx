"use client";

import { CustomCalendar } from "@/app/components/ui/calendar/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { StudentsCalendarEvent } from "@/types/calendar";
import { useMemo, useState } from "react";

export default function StudentCalendar({ events }: { events: StudentsCalendarEvent[] }) {
    const initialAcademicYearId = events[events.length - 1]?.academicYearId.toString();
    const [academicYearId, setAcademicYearId] = useState<string>(initialAcademicYearId);
    const eventsFiltered = useMemo(() => {
        return events.find(e => e.academicYearId.toString() == academicYearId)?.events || [];
    }, [academicYearId, events])

    return (
        <div>
            <Select
                value={academicYearId}
                onValueChange={setAcademicYearId}
            >
                <SelectTrigger>
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    {events.map((option, index) => (
                        <SelectItem key={index} value={option.academicYearId.toString()}>{option.academicYearName}</SelectItem>)
                    )}
                </SelectContent>
            </Select>
            <CustomCalendar events={eventsFiltered}></CustomCalendar>
        </div>
    );
}