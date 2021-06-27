import { useEffect } from 'react'
import { useParams, useHistory } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import {getImage} from '../../store/image'
import './ImagePage.css'

export default function ImagePage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const pictures = useSelector(state => Object.values(state.image));
    const other = useSelector(state => (state.singleImage));
    const { id } = useParams();
    // const makeOtherId = other.id
    const image = pictures[0]
    console.log('############# IMAGE', image)
    console.log('############# PICTURES', pictures)
    // console.log('############# OTHER', other.id)
    // console.log('############# OTHER2', makeOtherId)




    useEffect(() => {
        dispatch(getImage(id))
    }, [dispatch])

    return (
        <div className="single-container">
            <img className='indie-image' src={image?.imageUrl} />
            Hello world
         </div>
    )
}
