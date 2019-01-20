import { DATA } from "../actionsTypes";

const initialState = {
  list: [],
  listN: [],
  listAdmin: [],
  userCount: "-",
  clickCount: "-"
};

export default function(state = initialState, action) {
  const data = action.payload;
  switch (action.type) {
    case DATA.GET_ADMIN_LIST: {
      return {
        ...state,
        listAdmin: [...data]
      };
    }
    case DATA.GET_TOP_LIST: {
      return {
        ...state,
        list: [...data]
      };
    }
    case DATA.GET_BOTTOM_LIST: {
      return {
        ...state,
        listN: [...data]
      };
    }
    case DATA.GET_COUNTS: {
      return {
        ...state,
        userCount: data.userCount,
        clickCount: data.clickCount
      };
    }
    default:
      return state;
  }
}
