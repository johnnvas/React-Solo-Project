import { csrfFetch } from './csrf';

const POST_IMAGE = 'upload/POST_IMAGE';
const GET_IMAGE = 'upload/GET_IMAGE';

const getImage = (images) => {
    return {
        type: GET_IMAGE,
        images
    }
}

const postImage = (image) => {
    return {
        type: POST_IMAGE,
        image
    }
}

export const getImages = () => async (dispatch) => {
    const res = await fetch('/api/upload')

    if (res.ok) {
        const images = await res.json()
        dispatch(getImage(images))
        // return images;
}}

export const uploadImage = (payload) => async (dispatch) => {
    console.log("PAYLOAD!!!!", payload)
    const res = await csrfFetch('/api/upload', {
        method: 'POST',
        body: JSON.stringify(payload),
    })

    if (res.ok) {
        const newImage = await res.json();
        // console.log('This is new Image!', newImage)
        dispatch(postImage(newImage));
        return newImage
    }
}

const initialState = {}

const imageReducer = (state = initialState, action) => {
    let newState = {}

    switch (action.type) {
        case GET_IMAGE:
            action.images.forEach((img) => {
                newState[img.id] = img
            })
            return { ...state, ...newState }
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
