import * as types from "../../Constants/listConstants.js";
import axios from "axios";

export const getEmployeeList =
  () => async (dispatch, getState) => {
    var config = {
      method: "get",
      url: `https://6149991107549f001755a471.mockapi.io/employees/employees`,

    };
    try {
      const response = await axios(config);
      console.log("response",response);
      var list = response.data;
      dispatch({
        type: types.GET_EMPLOYEE_LIST,
        payload: { employeeList: list },
      });
      dispatch({ type: types.IS_LOADING, payload: { status: false } });
    } catch (err) {
      console.log(err.toString());
    }
  };
