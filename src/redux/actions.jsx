import { FETCH_POSTS, FETCH_POSTS_FAILURE, FETCH_POSTS_SUCCESS } from "./consts"

export const fetchStart = ()=>{
    return{
        type : FETCH_POSTS
    }
}

export const fetchSuccess =(posts)=>{
    return {
        type : FETCH_POSTS_SUCCESS,
        payload : posts
    }
}

export const fetchFailure = (error)=>{
    return {
        type : FETCH_POSTS_FAILURE,
        payload : error
    }
}