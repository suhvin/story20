// 액션 타입
export const SET_CONTROL = "control/SET_CONTROL";

// 액션 생성 함수
export const setControl = (fieldName: string, value: any) => ({
  type: SET_CONTROL,
  fieldName,
  value,
});

// 초기 상태 선언
const initialState = {
  test: 0,
};

// 리듀서 선언
export default function controlReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_CONTROL:
      return {
        ...state,
        [action.fieldName]: action.value,
      };
    default:
      return state;
  }
}
