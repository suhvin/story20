/* 액션 타입 만들기 */
// Ducks 패턴을 따를땐 액션의 이름에 접두사를 넣어주세요.
// 이렇게 하면 다른 모듈과 액션 이름이 중복되는 것을 방지 할 수 있습니다.
export const SET_TEST = "test/SET_TEST";

/* 액션 생성함수 만들기 */
// 액션 생성함수를 만들고 export 키워드를 사용해서 내보내주세요.
export const setTest = (fieldName: string, value: any) => ({
  type: SET_TEST,
  fieldName,
  value,
});

/* 초기 상태 선언 */
const initialState = {
  test: 0,
};

/* 리듀서 선언 */
// 리듀서는 export default 로 내보내주세요.
export default function testReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_TEST:
      return {
        ...state,
        [action.fieldName]: action.value,
      };
    default:
      return state;
  }
}
