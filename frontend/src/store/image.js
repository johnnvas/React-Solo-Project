import { csrfFetch } from './csrf';

const GET_IMAGE = 'image/GET_IMAGE';

const get_Image = (image) => {
    return{
        type: GET_IMAGE,
        image
    }
};

export const getImage = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/image/${id}`)

    if (res.ok) {
        const image = await res.json()
        // console.log("SUPER OBVIOUS", image)
        dispatch(get_Image(image))
        return image;
}}


const initialState = {}

const singleImageReducer = (state = initialState, action) => {
    let newState = {}

    switch (action.type) {
        case GET_IMAGE:
            newState[action.image.id] = action.image
            return {
                ...newState
            }
        default:
            return state;
    }
}

export default singleImageReducer
