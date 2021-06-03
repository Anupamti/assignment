import { combineReducers } from 'redux'
import { peopleReducer, selectedPeopleReducer, removeSelectedReducer, selectedChatReducer, removeChatReducer } from './reducerObj';


const reducer = combineReducers({
    allPeople: peopleReducer,
    selectedPeople: selectedPeopleReducer,
    removePeople: removeSelectedReducer,
    selectedChat: selectedChatReducer,
    removeChat: removeChatReducer
})


export default reducer;