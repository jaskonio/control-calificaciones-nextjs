"use client";

import { Button } from "@/components/ui/button";
import { CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  Plus,
} from "lucide-react";
import { format } from "date-fns";

interface CalendarHeaderProps {
  date: Date;
  view: "month" | "week";
  onPrevious: () => void;
  onNext: () => void;
  onViewChange: (view: "month" | "week") => void;
  onNewEvent: () => void;
}

export function CalendarHeader({
  date,
  view,
  onPrevious,
  onNext,
  onViewChange,
  onNewEvent,
}: CalendarHeaderProps) {
  return (
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
      <CardTitle className="text-2xl font-bold">Calendar</CardTitle>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="icon"
          onClick={onPrevious}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="flex items-center">
          <CalendarIcon className="mr-2 h-4 w-4" />
          <span className="text-lg font-semibold">
            {format(date, "MMMM yyyy")}
          </span>
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={onNext}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Select
          value={view}
          onValueChange={(value: "month" | "week") => onViewChange(value)}
        >
          <SelectTrigger className="w-[120px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="month">Month</SelectItem>
            <SelectItem value="week">Week</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={onNewEvent}>
          <Plus className="mr-2 h-4 w-4" /> New Event
        </Button>
      </div>
    </CardHeader>
  );
}