import {Change_Search_Field, Request_Robots_Pending, Request_Robots_Success, Request_Robots_Failed} from './constants';

const initialStateSearch = {
    searchField:  ''
}

export const searchRobots = (state=initialStateSearch, action={}) =>{
    switch(action.type){
        case Change_Search_Field:
        return Object.assign({}, state, {searchField: action.payload});
        default:
        return state;

    }
}

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}
export const requestRobots = (state=initialStateRobots, action={}) => {
    switch(action.type){
        case Request_Robots_Pending:
            return Object.assign({}, state, {isPending: true})
        case Request_Robots_Success:
            return Object.assign({}, state, {robots: action.payload, isPending: false})
        case Request_Robots_Failed:
            return Object.assign({}, state, {error: action.payload, isPending:false}) 
            default:
             return state;       
    }
}