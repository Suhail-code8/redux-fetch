import { fetchFailure, fetchStart, fetchSuccess } from "./actions"
import { FETCH_POSTS, FETCH_POSTS_FAILURE, FETCH_POSTS_SUCCESS } from "./consts"
import axios from 'axios'

const initialState = {
    loading : true,
    posts :[],
    error :""
}

const reducer = (state =initialState,action )=>{
    switch(action.type){
        case FETCH_POSTS : return {
            ...state,
            loading : true
        }
        case FETCH_POSTS_SUCCESS : return{
            loading : false,
            posts : action.payload,
            error : ''
        }
        case FETCH_POSTS_FAILURE : return{
            loading : false,
            posts : [],
            error : action.payload
        }
        default : return state
    }
}

export const fetchPosts =()=>{
    return (dispatch)=>{
        dispatch(fetchStart())
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            const posts = response.data.slice(0,11)
            dispatch(fetchSuccess(posts))
        })
        .catch(error=> dispatch(fetchFailure(error.message)))
    }
}



export default reducer