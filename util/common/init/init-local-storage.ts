export const initLocalStorage = (excludeKeyList: string[]) => {
  // 로컬 스토리지의 모든 키-값 쌍 가져오기
  const allData = { ...localStorage };

  // 제외할 키를 제외한 나머지 키-값 쌍 필터링
  const filteredData = Object.entries(allData).filter(
    ([key]) => !excludeKeyList.includes(key)
  );

  // 필터링된 키에 해당하는 값을 로컬 스토리지에서 제거
  filteredData.forEach(([key]) => localStorage.removeItem(key));
};
