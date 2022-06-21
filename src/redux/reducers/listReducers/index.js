import * as types from "../../Constants/listConstants";

const initialState = {
  employeeList: [],
  isLoading: true,

};
const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.IS_LOADING:
      return { ...state, isLoading: action.payload.status };



    case types.GET_EMPLOYEE_LIST:
      return { ...state, employeeList: action.payload.employeeList };


    default:
      return state;
  }
};

export default listReducer;
