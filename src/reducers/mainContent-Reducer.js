import UPDATE_MAIN_CONTENT from '../actions/mainContent-actions.js';

export default function mainContentReducer(state = '', 
    {type, payload}){
    switch(type){
        case UPDATE_MAIN_CONTENT:
            return payload.mainContent;
        default:
            return state;
    }
}