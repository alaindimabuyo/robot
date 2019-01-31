import {
    Change_Search_Field,
    Request_Robots_Pending,
    Request_Robots_Success,
    Request_Robots_Failed
} from './constants';



export const setSearchField = (text) => ({
    type:Change_Search_Field,
    payload: text
})


export const requestRobots = () => (dispatch) => {
    dispatch({type: Request_Robots_Pending});
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data =>dispatch({type: Request_Robots_Success, payload: data}))
        .catch(error => dispatch({type: Request_Robots_Failed, payload: error}))
}