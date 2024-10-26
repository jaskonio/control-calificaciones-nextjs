"use client";

import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { CalendarEvent } from "@/types/calendar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface CalendarEventProps {
  event: CalendarEvent;
}

export function CalendarEventIndicator({ event }: CalendarEventProps) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <div
          className={cn(
            "text-xs px-1 py-0.5 rounded truncate",
            event.type === "meeting"
              ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
              : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
          )}
        >
          {format(event.date, "HH:mm")} {event.title}
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>
          {format(event.date, "HH:mm")} {event.title}
        </p>
      </TooltipContent>

    </Tooltip>

  );
}