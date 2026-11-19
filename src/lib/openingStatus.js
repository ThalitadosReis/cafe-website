import { CAFE, HOURS } from "../data/cafe";

const toMinutes = (hhmm) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

// Current weekday and minutes past midnight in Zürich, wherever the visitor is
function zurichNow(date) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: CAFE.timeZone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type) => parts.find((p) => p.type === type)?.value;
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return {
    day: weekdays.indexOf(get("weekday")),
    minutes: Number(get("hour")) * 60 + Number(get("minute")),
  };
}

export const hoursForDay = (day) => HOURS.find((h) => h.days.includes(day));

export function getOpeningStatus(date = new Date()) {
  const { day, minutes } = zurichNow(date);
  const today = hoursForDay(day);
  const opens = toMinutes(today.open);
  const closes = toMinutes(today.close);

  if (minutes >= opens && minutes < closes) {
    const closingSoon = closes - minutes <= 60;
    return {
      isOpen: true,
      today: day,
      label: closingSoon
        ? `Closing soon, at ${today.close}`
        : `Open now until ${today.close}`,
    };
  }

  if (minutes < opens) {
    return {
      isOpen: false,
      today: day,
      label: `Closed, opens at ${today.open} today`,
    };
  }

  const tomorrow = hoursForDay((day + 1) % 7);
  return {
    isOpen: false,
    today: day,
    label: `Closed, opens at ${tomorrow.open} tomorrow`,
  };
}
