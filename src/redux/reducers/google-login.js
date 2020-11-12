
import { ADD_GoogleUSERDATA, REMOVE_GoogleUSERDATA } from '../actions';

const googleUserData = {
  userName: "",
  token: "",
  profilePic:"",
};

export const googleUserDataReducer = (state = googleUserData, action) => {
  let newState = { ...state };
  switch (action.type) {
    case ADD_GoogleUSERDATA: {
      newState = {
        userName: action.payload.profileObj.name,
        token: action.payload.accessToken,
        profilePic:action.payload.profileObj.imageUrl,
      };
      break;
    }
    case REMOVE_GoogleUSERDATA: {
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