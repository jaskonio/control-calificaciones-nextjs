"use client";

import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { CalendarEvent } from "@/types/calendar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface CalendarEventProps {
  event: CalendarEvent;
}

export function CalendarEventIndicator({ event }: CalendarEventProps) {
  const typeStyles = {
    meeting: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    workshop: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    extracurricular: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    class: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    other: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
  };

  return (
    <Tooltip>
      <TooltipTrigger>
        <div
          className={cn(
            "text-xs px-1 py-0.5 rounded truncate", typeStyles[event.type]
          )}
        >
          {/* {format(event.date, "HH:mm")}  */}
          {event.title}
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>
          {/* {format(event.date, "HH:mm")}  */}
          {event.title}
        </p>
      </TooltipContent>

    </Tooltip>

  );
}