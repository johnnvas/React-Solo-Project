import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteImage } from '../../store/upload';


export default function PostImage({image}) {
    const dispatch = useDispatch();
    const id = image.id

    const handleDeleteClick = () => {
        dispatch(deleteImage(id))
    }

    return (
        <div className='imageDiv'>
            {/* {console.log('IM HEEEEEEEEEEEREEEE!!!', props)} */}

            <img className='ind-image' src={image.imageUrl} />
            <div>{image.location}</div>
            <div>{image.caption}</div>
            <button type='button' onClick={handleDeleteClick}>DELETE</button>
        </div>
    )
}
