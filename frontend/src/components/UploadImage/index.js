import './UploadImage.css'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as uploadActions from "../../store/upload";
import * as sessionActions from '../../store/session';
import { useHistory, Link } from 'react-router-dom';
import Homepage from '../Homepage';



function Upload() {
    const dispatch = useDispatch();
    const [imageUrl, setImageUrl] = useState('')
    const [caption, setCaption] = useState('')
    const [location, setLocation] = useState('')
    const [albumId, setAlbumId] = useState('')
    const sessionUser = useSelector((state) => state.session.user);
    const history = useHistory();



    const onSubmit = (e) => {
        e.preventDefault();
        let userId = sessionUser.id;
        history.push('/')
        return dispatch(uploadActions.uploadImage({ imageUrl, userId, caption, location, albumId }))
    }
    return (
        <div className="form_container">
        <div className="title_container">
          <h2>Upload An Image!</h2>
        </div>
        <form onSubmit={onSubmit} className='upload-form'>
            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-image fa-lg"></i></span>

                <input
                    className='form-input-url'
                    type='text'
                    value={imageUrl}
                    onChange={e => setImageUrl(e.target.value)}
                    placeholder="Image Url"
                    required
                />
            </div>
            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-compass fa-lg"></i></span>

                <input
                    className='form-input-url'
                    type='text'
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    placeholder="Where did you take this?"
                    required
                />
                </div>
                 <div className="input_field"> <span><i aria-hidden="true" className="fa fa-compass fa-lg"></i></span>

                <input
                    className='form-input-url'
                    type='text'
                    value={albumId}
                    onChange={e => setAlbumId(e.target.value)}
                    placeholder="Where should I save this?"
                    required
                />
            </div>
            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-pen fa-lg"></i></span>

                <textarea
                    type='text'
                    value={caption}
                    onChange={e => setCaption(e.target.value)}
                    required
                    placeholder='Caption your image!'
                    rows="4"
                    cols="30"
                />
            </div>
            <button className="button" type="submit" >Upload Post</button>
            </form>
            </div>
    )

}
export default Upload
