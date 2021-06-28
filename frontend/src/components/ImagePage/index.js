import { useEffect } from 'react'
import { useParams, useHistory } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { getImage } from '../../store/image'
import Comments from '../Comments/index'
// import {getComment} from '../../store/comment'
import './ImagePage.css'

export default function ImagePage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const pictures = useSelector(state => Object.values(state.image));
    const { id } = useParams();
    // const makeOtherId = other.id
    const image = pictures[0]






    useEffect(() => {
        dispatch(getImage(id))
    }, [dispatch])

    return (
        <div className="single-container">
            <img className='indie-image' src={image?.imageUrl} />
            <div className='image-caption'>{image?.caption}</div>
            <Comments />
        </div>
    )
}
