import { ADD_USERDATA, REMOVE_USERDATA } from "../actions";

const userData = {
  userName: "",
  token: "",
  profilePic:"",
};

export const userDataReducer = (state = userData, action) => {
  let newState = { ...state };
  switch (action.type) {
    case ADD_USERDATA: {
      newState = {
        userName: action.payload.name,
        token: action.payload.accessToken,
        profilePic:action.payload.picture.data.url
      };
      break;
    }
    case REMOVE_USERDATA: {
      newState = {
        userName: "",
        token: "",
      };
      break;
    }
    default: {
    }
  }
  return newState;
};
