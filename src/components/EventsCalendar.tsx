import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import { useState, type FC } from 'react';
import type { Event } from '../types';

dayjs.locale('es');

type EventsCalendarProps = {
  events: Event[];
  onDateClick?: (date: dayjs.Dayjs) => void;
};

const EventsCalendar: FC<EventsCalendarProps> = ({ events, onDateClick }) => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const monthStart = currentMonth.startOf('month');
  const monthEnd = currentMonth.endOf('month');
  const daysInMonth = monthEnd.date();
  const firstDayOfWeek = monthStart.day();

  const previousMonth = () => {
    setCurrentMonth(currentMonth.subtract(1, 'month'));
  };

  const nextMonth = () => {
    setCurrentMonth(currentMonth.add(1, 'month'));
  };

  const getEventsForDate = (date: dayjs.Dayjs) => {
    return events.filter((event) => {
      const eventDate = dayjs(event.date);
      return eventDate.isSame(date, 'day');
    });
  };

  const weekDays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

  const days = [];
  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  return (
    <div className="rounded-xl border border-border bg-surface p-6 shadow-subtle">
      <div className="mb-6 flex items-center justify-between">
        <button
          type="button"
          onClick={previousMonth}
          className="rounded-lg p-2 text-text-muted transition hover:bg-muted hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
          aria-label="Mes anterior"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <h2 className="text-xl font-semibold text-text">
          {currentMonth.format('MMMM YYYY')}
        </h2>
        <button
          type="button"
          onClick={nextMonth}
          className="rounded-lg p-2 text-text-muted transition hover:bg-muted hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
          aria-label="Mes siguiente"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {weekDays.map((day) => (
          <div
            key={day}
            className="py-2 text-center text-xs font-semibold uppercase text-text-muted"
          >
            {day}
          </div>
        ))}
        {days.map((day, index) => {
          if (day === null) {
            return <div key={`empty-${index}`} className="aspect-square" />;
          }

          const date = monthStart.date(day);
          const dayEvents = getEventsForDate(date);
          const isToday = date.isSame(dayjs(), 'day');
          const hasEvents = dayEvents.length > 0;

          return (
            <button
              key={day}
              type="button"
              onClick={() => onDateClick?.(date)}
              className={`relative aspect-square rounded-lg text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary ${
                isToday
                  ? 'bg-primary text-white font-semibold'
                  : hasEvents
                    ? 'bg-primary/10 text-primary hover:bg-primary/20'
                    : 'text-text-muted hover:bg-muted'
              }`}
              aria-label={`${day} de ${currentMonth.format('MMMM')}${hasEvents ? `, ${dayEvents.length} evento(s)` : ''}`}
            >
              {day}
              {hasEvents && (
                <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default EventsCalendar;

