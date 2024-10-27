"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { addMonths, subMonths, format } from "date-fns";
import { cn } from "@/lib/utils";
import { CalendarHeader } from "./calendar-header";
import { CalendarDay } from "./calendar-day";
import { CalendarEvent } from "@/types/calendar";

export function CustomCalendar({ events }: { events: CalendarEvent[] }) {
  const [date, setDate] = useState<Date>(new Date());
  const [view, setView] = useState<"month" | "week">("month");

  const handlePrevious = () => {
    setDate(view === "month" ? subMonths(date, 1) : subMonths(date, 1));
  };

  const handleNext = () => {
    setDate(view === "month" ? addMonths(date, 1) : addMonths(date, 1));
  };

  const getDayEvents = (day: Date) => {
    return events?.filter(
      (event) =>
        format(event.date, "yyyy-MM-dd") === format(day, "yyyy-MM-dd")
    );
  };

  const handleNewEvent = () => {
    console.log("New event clicked");
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      {/* <CalendarHeader
        date={date}
        view={view}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onViewChange={setView}
        onNewEvent={handleNewEvent}
      /> */}
      <CardContent>
        <div className="rounded-lg border">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(newDate) => newDate && setDate(newDate)}
            className="rounded-md"
            classNames={{
              month: "space-y-4 w-full",
              caption: "flex justify-center pt-1 relative items-center w-full",
              day_today: "bg-primary text-primary-foreground font-bold",
              day_outside: "text-muted-foreground opacity-50",
              cell: cn(
                "h-24 w-32 lg:w-31 p-1",
                "hover:bg-muted transition-colors relative"
              ),
              day: cn(
                "h-8 w-8 p-0 font-normal",
                "aria-selected:opacity-100"
              ),
              head_cell:
                "h-12 w-24 p-1 text-muted-foreground font-semibold",
              table: "w-full border-collapse",
            }}
            components={{
              Day: ({ date: dayDate }) => (
                <CalendarDay
                  date={dayDate}
                  currentMonth={date}
                  events={getDayEvents(dayDate)}
                />
              ),
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
}