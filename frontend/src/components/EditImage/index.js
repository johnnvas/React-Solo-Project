import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
// import * as uploadActions from "../../store/upload";
import * as sessionActions from '../../store/upload';
import { useHistory, Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import '../UploadImage/UploadImage.css'




function EditImage({post}) {
    const dispatch = useDispatch();
    const [caption, setCaption] = useState(post.caption)
    const sessionUser = useSelector((state) => state.session.user);
    const history = useHistory();


    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(sessionActions.updateImage({ id: post.id, caption}))
    }

    // let userId = sessionUser.id;
    return (
        <div className="edit_container">


        <div className="title_container">
          <h2>Edit This Caption!</h2>
        </div>
        <form onSubmit={onSubmit} className='upload-form'>
            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-pen fa-lg"></i></span>

                <textarea
                    type='text'
                    value={caption}
                    onChange={e => setCaption(e.target.value)}
                    required
                    rows="2"
                    cols="20"
                />
            </div>
                <button className="button" type="submit" >Edit Post</button>
            </form>

            </div>
    )

}
export default EditImage
