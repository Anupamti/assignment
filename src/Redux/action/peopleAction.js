import { ActionTypes } from "../constant/actionTypes"

export const setPeople = (peoples) => {
    return {
        type: ActionTypes.SET_PEOPLE,
        payload: peoples,
    };
};

export const selected = (people) => {
    return {
        type: ActionTypes.SELECTED_PEOPLE,
        payload: people,
    };
};

export const removePeople = () => {
    return {
        type: ActionTypes.SELECTED_PEOPLE
    };
};

export const selectedChat = (User) => {
    return {
        type: ActionTypes.SELECTED_CHAT,
        payload: User
    };
};

export const removeChat = () => {
    return {
        type: ActionTypes.REMOVE_CHAT
    };
};
