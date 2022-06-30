export async function addHoursToDate(date: Date, hours: number): Promise<Date> {
  return new Date(new Date(date).setHours(date.getHours() + hours));
}

export async function differenceInHours(dt2: Date, dt1: Date) {
  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60);
  return Math.abs(Math.round(diff));
}