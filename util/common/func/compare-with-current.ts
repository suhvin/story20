export const compareWithCurrent = (date: string) => {
  const currentDate = new Date();
  // 현재 날짜를 YYYYMMDD 형식의 문자열로 변환
  const currentDateString = currentDate
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, "")
    .slice(2);

  // 현재 날짜와 비교 대상 날짜를 숫자로 변환하여 비교
  console.log(date);
  console.log(currentDateString);
  return parseInt(date) > parseInt(currentDateString);
};
