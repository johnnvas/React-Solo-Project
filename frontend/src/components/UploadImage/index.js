import './UploadImage.css'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as uploadActions from "../../store/upload";
import * as sessionActions from '../../store/session'
import {useHistory, Link} from 'react-router-dom'
import Homepage from '../Homepage'



function Upload() {
    const dispatch = useDispatch();
    const [imageUrl, setImageUrl] = useState('')
    const [description, setDescription] = useState('')
    const sessionUser = useSelector((state) => state.session.user);
    const history = useHistory();

//     const redirect = () => {
//     history.push('/')
// }


    const onSubmit = (e) => {
        e.preventDefault();
        let userId = sessionUser.id;
        history.push('/')
        return dispatch(uploadActions.uploadImage({ imageUrl, userId, description }))
    }
    return (

        <form onSubmit={onSubmit} className='upload-form'>
            <label>
                Image URL
                <br />
                <input
                    className='form-input-url'
                    type='text'
                    value={imageUrl}
                    onChange={e => setImageUrl(e.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                Caption
                <br />
                <textarea
                    type='text'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    required
                    rows="4"
                    cols="35"
                />
            </label>
            <button type="submit" >Upload Post!</button>
        </form>
    )

}
export default Upload
