import API from "../../utils/api";

export const getPosts = (skip) => {
    return dispatch => {
        API.getSitePosts(skip, res => {
            dispatch({
                type: "GOT_SITE_POSTS",
                payload: res.data,
                skip: skip
            })
        })
    }
}

export const getPostCount = () => {
    return dispatch => {
        API.getSinglePost(res => {
            dispatch({
                type: 'GOT_POST_COUNT',
                payload: res.data.count
            })
        })
    }
}

export const getPostBySlug = (slug, token) => {
    return dispatch => {
        API.getPostBySlug(slug, token, res => {
            dispatch({
                type: 'SET_FULL_POST_DATA',
                payload: res.data
            })
        })
    }
}

export const setPostData = (post) => {
    return dispatch => {
        dispatch({
            type: 'SET_DEFAULT_POST_DATA',
            payload: post
        })  
    }
}