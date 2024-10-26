"use client";

import { format, isToday, isSameMonth } from "date-fns";
import { cn } from "@/lib/utils";
import { CalendarEvent } from "@/types/calendar";
import { CalendarEventIndicator } from "./calendar-event";

interface CalendarDayProps {
    date: Date;
    currentMonth: Date;
    events: CalendarEvent[];
}

export function CalendarDay({
    date,
    currentMonth,
    events,
}: CalendarDayProps) {
    return (
        <div
            className={cn(
                "w-full h-full p-1",
                !isSameMonth(date, currentMonth) && "opacity-50",
                isToday(date) && "bg-primary/10 rounded-md"
            )}
        >
            <div
                className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center",
                    isToday(date) && "bg-primary text-primary-foreground"
                )}
            >
                {format(date, "d")}
            </div>
            {events.length > 0 && (
                <div className="flex flex-col gap-1 mt-1">
                    {events.map((event) => (
                        <CalendarEventIndicator key={event.id} event={event} />
                    ))}
                </div>
            )}
        </div>
    );
}