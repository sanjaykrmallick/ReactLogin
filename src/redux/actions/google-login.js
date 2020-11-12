
import { ADD_GoogleUSERDATA, REMOVE_GoogleUSERDATA } from './action-types';
export const addGoogleUser = (user) => {
    console.log("actiontypes: ",user.accessToken)
    return {
        type: ADD_GoogleUSERDATA,
        payload: user
    }
}

export const removeGoogleUser = () => {
    return {
        type: REMOVE_GoogleUSERDATA,
        
    }
}