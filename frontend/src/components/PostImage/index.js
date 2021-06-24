import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteImage } from '../../store/upload';


export default function PostImage(props) {
    const dispatch = useDispatch();
    
    const handleDeleteClick = (id) => {
        dispatch(deleteImage(id))
    }

    return (
        <div className='imageDiv'>
            {/* {console.log('IM HEEEEEEEEEEEREEEE!!!', props)} */}

            <img className='ind-image' src={props.url.imageUrl} />
            <div>{props.url.location}</div>
            <div>{props.url.caption}</div>
            <button type='button' onClick={handleDeleteClick}>DELETE</button>
        </div>
    )
}
