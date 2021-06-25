import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteImage } from '../../store/upload';
import EditImage from '../EditImage'

export default function PostImage({image}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const id = image.id

    const handleDeleteClick = () => {
        dispatch(deleteImage(id))
    }


    return (
        <div className='imageDiv'>
            {/* {console.log('IM HEEEEEEEEEEEREEEE!!!', props)} */}

            <div className='picture'>
                {/* <Link to={'/images/'}>
                </Link> */}
                    <img className='ind-image' src={image.imageUrl} />
            </div>

            <div>{image.location}</div>
            <div>{image.caption}</div>

            { image.userId === sessionUser.id &&
            <div>
                <button type='button' onClick={handleDeleteClick}>DELETE</button>
                <EditImage post={image} />
            </div>
            }
        </div>
    )
}
