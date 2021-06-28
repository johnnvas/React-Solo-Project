import './Comments.css'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {uploadComment, deleteComment, updateComment} from "../../store/comment";
import { useHistory, Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { getComment } from '../../store/comment'
import EditComment from '../EditComment';

export default function Comments() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const comments = useSelector(state => Object.values(state.comment))
    const [comment, setComment] = useState('');
    let { id } = useParams();
    const numId = Number(id)

    console.log("YYYYYYYYYYAYYYYYY", id)

    const onSubmit = (e) => {
        e.preventDefault();

        let userId = sessionUser.id;
        // history.pushState('/')
        return dispatch(uploadComment({userId, imageId:numId, comment}))

    }

    const handleDeleteClick = (id) => {
        dispatch(deleteComment(id))
    }

    useEffect(() => {
        dispatch(getComment(id))
    }, [dispatch, id]);

    return (
        <div className='comment-container'>

            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    placeholder='Comment Here!'
                    required
                />

                <button className="button" type="submit">Post Comment</button>
            </form>

            <div className='all-comments'>
                {comments &&
                    comments.map(cmt => (
                        <div key={cmt?.id} className='single-comment'>
                            {cmt.userId} {cmt.comment}
                            <button className="button" onClick={() => handleDeleteClick(cmt?.id)}>Delete</button>
                            <EditComment/>
                        </div>
                    ))}

            </div>

        </div>
    );
}
