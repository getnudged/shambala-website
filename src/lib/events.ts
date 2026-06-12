import type { CollectionEntry } from 'astro:content';

export type RetreatEvent = CollectionEntry<'retreats'>;

export const getEventSlug = (event: RetreatEvent) => event.data.slug ?? event.id.replace(/\.md$/, '');

export const getEventEndDate = (event: RetreatEvent) => event.data.endDate ?? event.data.startDate;

export const getTodayAtMidnight = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};

export const isUpcomingEvent = (event: RetreatEvent, today = getTodayAtMidnight()) => {
  const endDate = getEventEndDate(event);
  return Boolean(endDate && endDate >= today);
};

export const sortEventsByStartDate = (events: RetreatEvent[]) =>
  [...events].sort((a, b) => {
    const aTime = a.data.startDate?.valueOf() ?? Number.MAX_SAFE_INTEGER;
    const bTime = b.data.startDate?.valueOf() ?? Number.MAX_SAFE_INTEGER;
    return aTime - bTime;
  });

export const isResidentialRetreat = (event: RetreatEvent) => {
  const type = event.data.eventType?.toLowerCase() ?? '';
  if (type.includes('residential') || type.includes('weekend')) return true;
  if (type.includes('wellbeing') || type.includes('wellness') || type.includes('day') || type.includes('workshop')) return false;

  const startDate = event.data.startDate;
  const endDate = event.data.endDate ?? startDate;
  const isMultiDay = Boolean(startDate && endDate && endDate.valueOf() !== startDate.valueOf());

  return isMultiDay || event.data.price >= 200;
};

export const isWellnessDayEvent = (event: RetreatEvent) => !isResidentialRetreat(event);

export const getEventDateLabel = (event: RetreatEvent, includeYear = false) => {
  if (!event.data.startDate) {
    return event.data.dateNote ?? (event.data.year ? `${event.data.year} date to confirm` : 'Date to confirm');
  }

  const options: Intl.DateTimeFormatOptions = includeYear
    ? { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' }
    : { weekday: 'short', day: 'numeric', month: 'long' };

  if (event.data.endDate && event.data.endDate.valueOf() !== event.data.startDate.valueOf()) {
    const start = event.data.startDate.toLocaleDateString('en-GB', options);
    const end = event.data.endDate.toLocaleDateString('en-GB', includeYear ? { day: 'numeric', month: 'long', year: 'numeric' } : { day: 'numeric', month: 'long' });
    return `${start} - ${end}`;
  }

  return event.data.startDate.toLocaleDateString('en-GB', options);
};

export const getEventYear = (event: RetreatEvent) => event.data.startDate?.getFullYear() ?? event.data.year;

export const getEventDayName = (event: RetreatEvent) =>
  event.data.startDate?.toLocaleDateString('en-GB', { weekday: 'long' }) ?? '';

export const getPriceLabel = (event: RetreatEvent) => {
  const symbol = event.data.currency === 'EUR' ? '€' : '£';
  if (event.data.currency === 'GBP' && event.data.priceEUR) return `£${event.data.price} / €${event.data.priceEUR}`;
  return `${symbol}${event.data.price}`;
};

export const getEventTypeLabel = (event: RetreatEvent) => {
  const type = event.data.eventType;
  if (type) return type.replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
  return isResidentialRetreat(event) ? 'Weekend Retreat' : 'Wellbeing Day';
};
