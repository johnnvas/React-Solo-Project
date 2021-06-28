import { csrfFetch } from './csrf';

const POST_COMMENT = 'comment/POST_COMMENT';
const GET_COMMENT = 'comment/GET_COMMENT';
const DELETE_COMMENT = 'comment/DELETE_COMMENT';
const UPDATE_COMMENT = 'comment/UPDATE_COMMENT';


const get_Comment = (comment) => {
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

const update_Comment = (comment) => ({
    type: UPDATE_COMMENT,
    comment,
})




export const getComment = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/comments/${id}`)

    if (res.ok) {
        const comment = await res.json()
        dispatch(get_Comment(comment))
        return comment;
}}

export const uploadComment = (payload) => async (dispatch) => {
    console.log("PAYLOAD!!!!", payload)
    const res = await csrfFetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify(payload),
    })

    if (res.ok) {
        const newComment = await res.json();
    // console.log('COMMMMEEEENNNNTTTTT', newComment);
    dispatch(postComment(newComment));
        return newComment
    }
}

export const deleteComment = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/comments/${id}`, {
        method: 'DELETE',
        // body: JSON.stringify({id})
    })

    if (res.ok)
    {
        await res.json()
        dispatch(delComment(id))
        return res
    }
}

export const updateComment = (id, comment) => async (dispatch) => {
    const res = await csrfFetch(`/api/comments/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({comment})
    })

    if (res.ok){
        const data = await res.json(id)
        dispatch(update_Comment(data))
        return data
    }


}

const initialState = {}

const commentReducer = (state = initialState, action) => {
    let newState = {}

    switch (action.type) {

        case GET_COMMENT:
            action?.comment?.forEach((cmt) => {
                newState[cmt.id] = cmt
            })
            return { ...newState }

        case POST_COMMENT:
            newState = {
                ...state,
                [action.comment.id]: action.comment
            }
            return newState

        case DELETE_COMMENT:
            newState = { ...state }
            delete newState[action.id]
            return newState

        case UPDATE_COMMENT:
            newState[action.comment.id] = action.comment
            return {
                // ...state,
                ...newState
            }
        default:
            return state;
    }
}

export default commentReducer
