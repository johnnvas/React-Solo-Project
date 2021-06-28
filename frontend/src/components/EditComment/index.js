import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updateComment } from "../../store/comment";
import { useParams } from 'react-router';

function EditComment() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const comments = useSelector(state => Object.values(state.comment))
    const [comment, setComment] = useState('')

    let { id } = useParams();
    const numId = Number(id)

      const onSubmit = (e) => {
        e.preventDefault();

        let userId = sessionUser.id;
        // history.pushState('/')
        dispatch(updateComment(comment, id))

    }

    // let userId = sessionUser.id;
    return (
        <div className="edit_container">


        {/* <div className="title_container">
          <h2>Edit This Comment!</h2>
        </div> */}
        <form onSubmit={onSubmit} className='editComment-form'>
            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-pen fa-lg"></i></span>

                <textarea
                    type='text'
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    required
                    rows="2"
                    cols="20"
                />
            </div>
                <button className="button" type="submit" >Edit Comment</button>
            </form>

            </div>
    )

}
export default EditComment
