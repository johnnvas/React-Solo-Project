import { csrfFetch } from './csrf';

const POST_COMMENT = 'comment/POST_COMMENT';
const GET_COMMENT = 'comment/GET_COMMENT';
const DELETE_COMMENT = 'comment/DELETE_COMMENT';


const getComment = (comment) => {
    return {
        type: GET_COMMENT,
        comment
    }
}

const postComment = (comment) => {
    return {
        type: POST_COMMENT,
        comment
    }
}

const delComment = (id) => {
    return {
        type: DELETE_COMMENT,
        id
    }
}




export const getComment = () => async (dispatch) => {
    const res = await csrfFetch('/api/comments')

    if (res.ok) {
        const comment = await res.json()
        dispatch(getComment(comment))
        // return comment;
}}

export const uploadComment = (payload) => async (dispatch) => {
    // console.log("PAYLOAD!!!!", payload)
    const res = await csrfFetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify(payload),
    })

    if (res.ok) {
        const newComment = await res.json();
        // console.log('This is new Image!', newImage)
        dispatch(postComment(newComment));
        return newComment
    }
}

export const deleteComment = (id) => async (dispatch) => {
    const res = await csrfFetch('/api/comments', {
        method: 'DELETE',
        body: JSON.stringify({id})
    })
    await res.json()
    dispatch(delComment(id))
    return res
}

export const updateComment = (image) => async (dispatch) => {
    const res = await csrfFetch('/api/comments', {
        method: 'PATCH',
        body: JSON.stringify(image)
    })
    const data = await res.json()
    console.log('---------> THIS IS RES!', res)
    console.log('------> THIS IS DATAAAAA!', data)
    dispatch(postImage(data))
    return data
}

const initialState = {}

const commentReducer = (state = initialState, action) => {
    let newState = {}

    switch (action.type) {
        case GET_COMMENT:
            action.images.forEach((img) => {
                newState[img.id] = img
            })
            return { ...state, ...newState }
        case POST_COMMENT:
            newState = {
                ...state,
                [action.image.id]: action.image
            }
            return newState
        case DELETE_COMMENT:
            newState = { ...state }
            delete newState[action.id]
            return newState
        default:
            return state;
    }
}

export default commentReducer
