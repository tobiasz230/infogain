export function subtractMonths(date, months) {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() - months);

  return newDate;
}
