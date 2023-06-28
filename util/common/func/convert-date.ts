const monthList: { [key: number]: string } = {
  1: "JAN",
  2: "FEB",
  3: "MAR",
  4: "APR",
  5: "MAY",
  6: "JUN",
  7: "JUL",
  8: "AUG",
  9: "SEP",
  10: "OCT",
  11: "NOV",
  12: "DEC",
};

export const convertDate = (date: string, op: "month" | "day" | "info") => {
  const day = date.slice(-2);
  const month = date.slice(2, 4);
  const year = date.slice(0, 2);
  switch (op) {
    case "month":
      const monthName = monthList[parseInt(month)];
      return monthName ? monthName : "UNKNOWN";
    case "day":
      return day;
    case "info":
      return `20${year}. ${parseInt(month)}. ${parseInt(day)}`;
    default:
      return "UNKNOWN";
  }
};
