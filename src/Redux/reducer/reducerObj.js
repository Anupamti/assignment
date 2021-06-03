import { ActionTypes } from "../constant/actionTypes"


const initialState = {
    peoples: []
}


export const peopleReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PEOPLE:
            return { ...state, peoples: payload }
        default:
            return state
    }
}

export const selectedPeopleReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PEOPLE:
            return { ...state, payload }
        default:
            return state
    }
}

export const removeSelectedReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.REMOVE_SELECTED_PEOPLE:

            return state;
        default:
            return state
    }
}


export const selectedChatReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_CHAT:
            return { ...state, payload }
        default:
            return state
    }
}


export const removeChatReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.REMOVE_CHAT:

            return state;
        default:
            return state
    }
}
