"use client";

import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { CalendarDay } from "./calendar-day";
import { CalendarEvent } from "@/types/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { EntityCalendarEvents } from "@/types/calendar";
import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";


export function CustomCalendar({ events }: { events: CalendarEvent[] }) {
  const [date, setDate] = useState<Date>(new Date());


  const getDayEvents = (day: Date) => {
    return events?.filter(
      (event) =>
        format(event.date, "yyyy-MM-dd") === format(day, "yyyy-MM-dd")
    );
  };

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={(newDate) => newDate && setDate(newDate)}
      className="rounded-md border shadow"
      classNames={{
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        table: "table-fixed border-collapse w-full",
        head_row: "",
        head_cell: "h-12 p-1 text-muted-foreground font-semibold",
        row: "",
        cell: cn(
          "h-32",
          "hover:bg-muted transition-colors relative"
        )
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
  );
}


export default function GenericCalendar({ entities }: { entities: EntityCalendarEvents[] }) {
  const [selectedEntityId, setSelectedEntityId] = useState<string>(entities[entities.length - 1].entityId.toString());

  const eventsFiltered = useMemo(() => {
    return entities.find(e => e.entityId.toString() == selectedEntityId)?.events || [];
  }, [selectedEntityId, entities])

  return (
    <Card className="w-full mx-auto">
      <CardHeader>
        <Select
          value={selectedEntityId}
          onValueChange={setSelectedEntityId}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {entities.map((entity, index) => (
              <SelectItem key={index} value={entity.entityId.toString()}>{entity.entityName}</SelectItem>)
            )}
          </SelectContent>
        </Select>
      </CardHeader>

      <CardContent>
        <CustomCalendar events={eventsFiltered}></CustomCalendar>
      </CardContent>

    </Card>

  );
}