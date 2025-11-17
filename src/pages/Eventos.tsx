import { CalendarIcon } from "@heroicons/react/24/outline";
import dayjs from "dayjs";
import { useMemo, useState } from "react";
import EventsCalendar from "../components/EventsCalendar";
import { events } from "../data/events";

const Eventos = () => {
	const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null);

	const upcomingEvents = useMemo(() => {
		return events
			.filter((event) =>
				dayjs(event.date).isAfter(dayjs().subtract(1, "day"))
			)
			.sort((a, b) => dayjs(a.date).diff(dayjs(b.date)));
	}, []);

	const eventsForSelectedDate = useMemo(() => {
		if (!selectedDate) return [];
		return events.filter((event) =>
			dayjs(event.date).isSame(selectedDate, "day")
		);
	}, [selectedDate]);

	const generateICS = (event: (typeof events)[0]) => {
		const start = dayjs(event.date).format("YYYYMMDDTHHmmss");
		const end = dayjs(event.date).add(2, "hour").format("YYYYMMDDTHHmmss");
		const icsContent = `BEGIN:VCALENDAR
      VERSION:2.0
      PRODID:-//Galería Urbana//Eventos//ES
      BEGIN:VEVENT
      UID:${event.id}@galeriaurbana.me
      DTSTAMP:${dayjs().format("YYYYMMDDTHHmmss")}
      DTSTART:${start}
      DTEND:${end}
      SUMMARY:${event.title}
      DESCRIPTION:${event.description}\\nLugar: ${event.place}
      LOCATION:${event.place}
      END:VEVENT
      END:VCALENDAR`;

		const blob = new Blob([icsContent], { type: "text/calendar" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = `${event.id}.ics`;
		link.click();
		URL.revokeObjectURL(url);
	};

	return (
		<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
			<div className="mb-12">
				<h1 className="text-3xl font-semibold text-text sm:text-4xl">
					Eventos
				</h1>
				<p className="mt-4 text-lg text-text-muted">
					Consultá nuestra agenda y no te pierdas ninguna actividad
				</p>
			</div>

			<div className="mb-12 grid gap-8 lg:grid-cols-2">
				<div>
					<EventsCalendar
						events={events}
						onDateClick={(date) => setSelectedDate(date)}
					/>
					{selectedDate && eventsForSelectedDate.length > 0 && (
						<div className="mt-6 rounded-xl border border-border bg-surface p-6 shadow-subtle">
							<h3 className="mb-4 text-lg font-semibold text-text">
								Eventos del {selectedDate.format("D [de] MMMM")}
							</h3>
							<div className="space-y-4">
								{eventsForSelectedDate.map((event) => (
									<div
										key={event.id}
										className="rounded-lg border border-border bg-muted/30 p-4"
									>
										<div className="mb-2 flex items-center gap-2 text-sm font-medium text-primary">
											<CalendarIcon className="h-4 w-4" />
											{event.time ||
												"Horario a confirmar"}
										</div>
										<h4 className="mb-1 font-semibold text-text">
											{event.title}
										</h4>
										<p className="mb-2 text-sm text-text-muted">
											{event.description}
										</p>
										<p className="text-xs text-text-muted">
											{event.place}
										</p>
									</div>
								))}
							</div>
						</div>
					)}
				</div>

				<div>
					<h2 className="mb-6 text-xl font-semibold text-text">
						Próximos eventos
					</h2>
					<div className="space-y-4">
						{upcomingEvents.length === 0 ? (
							<p className="text-text-muted">
								No hay eventos programados próximamente.
							</p>
						) : (
							upcomingEvents.map((event) => (
								<article
									key={event.id}
									id={event.id}
									className="group overflow-hidden rounded-xl border border-border bg-surface shadow-subtle transition-all duration-200 hover:border-primary/50 hover:shadow-lg"
								>
									{event.banner && (
										<div className="aspect-video overflow-hidden bg-muted">
											<img
												src={event.banner}
												alt={event.title}
												className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
												loading="lazy"
											/>
										</div>
									)}
									<div className="p-5">
										<div className="mb-2 flex items-center justify-between">
											<div className="text-xs font-medium uppercase tracking-wider text-primary">
												{dayjs(event.date).format(
													"DD MMM YYYY"
												)}
												{event.time &&
													` · ${event.time}`}
											</div>
											<button
												type="button"
												onClick={() =>
													generateICS(event)
												}
												className="rounded-lg border border-border bg-surface px-3 py-1 text-xs font-medium text-text transition-colors hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
												aria-label={`Agregar ${event.title} al calendario`}
											>
												+ Calendario
											</button>
										</div>
										<h3 className="mb-2 text-lg font-semibold text-text">
											{event.title}
										</h3>
										<p className="mb-3 text-sm text-text-muted">
											{event.description}
										</p>
										<p className="text-xs text-text-muted">
											{event.place}
										</p>
									</div>
								</article>
							))
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Eventos;
