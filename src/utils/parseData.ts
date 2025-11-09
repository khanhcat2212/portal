export const normalizeString = (str: string) =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

export const parseDate = (str: string) => {
  // 01/01/2022 10:10 AM
  const [datePart, timePart, ampm] = str.split(/[\s:]+/);
  const [day, month, year] = datePart.split("/").map(Number);
  let hour = Number(timePart);
  let minute = Number(str.split(":")[1] || "0");

  if (ampm === "PM" && hour < 12) hour += 12;
  if (ampm === "AM" && hour === 12) hour = 0;

  return new Date(year, month - 1, day, hour, minute);
};

export const isWithinPeriod = (createdAtStr: string, period: string) => {
  const now = new Date();
  const createdAt = parseDate(createdAtStr);
  const diffInMonths = (now.getFullYear() - createdAt.getFullYear()) * 12 + (now.getMonth() - createdAt.getMonth());

  switch (period) {
    case "1 tháng qua":
      return diffInMonths < 1;
    case "3 tháng qua":
      return diffInMonths < 3;
    case "6 tháng qua":
      return diffInMonths < 6;
    default:
      return true;
  }
};
