import { SHOW_CHARACTERS } from '../actions'
 
const initialState = {
    list: []
}
 
export function showCharacters(state = initialState, action) {
    
    switch (action.type) {
        case SHOW_CHARACTERS:
            return Object.assign({}, state, { 
                list: action.payload
            })
        default:
            return state 
    }
    
}