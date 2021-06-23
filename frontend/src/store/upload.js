import { csrfFetch } from './csrf';

const POST_IMAGE = 'upload/POST_IMAGE';

const postImage = (image) => ({
    type: POST_IMAGE,
    image
})

export const uploadImage = (payload) => async (dispatch) => {
    const res = await csrfFetch('api/upload', {
        method: 'POST',
        body: JSON.stringify(payload),
    })

    if (res.ok) {
        const newImage = await res.json();
        dispatch(postImage(newImage));
        return newImage
    }
}

const initialState = {}

const imageReducer = (state = initialState, action) => {
    let newState = {}

    switch (action.type) {
        case POST_IMAGE:
            newState = {
                ...state,
                [action.image.id]: action.image
            }
            return newState
        default:
            return state;
    }
}

export default imageReducer
