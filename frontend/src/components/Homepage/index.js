import { useEffect, useState } from 'react';
import './Homepage.css';
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
// import * as uploadActions from "../../store/upload";
// import Navigation from "./Navigation/index";



export default function Homepage() {
    const dispatch = useDispatch();
    const loggedIn = useSelector(state => state.session).user;
    const [getImg, setGetImg] = useState('');

    if (loggedIn) {
        return (
            <>
                <div className='home-form'>
                    Welcome Home
                </div>
            </>
        )
    }

    else {
        return (

                <ul className="cb-slideshow">
                    <li>
                        <span>Image 01</span>
                    </li>
                    <li>
                        <span>Image 02</span>
                    </li>
                    <li>
                        <span>Image 03</span>
                    </li>
                    <li>
                        <span>Image 04</span>
                    </li>
                    <li>
                        <span>Image 05</span>
                    </li>
                    <li>
                        <span>Image 06</span>
                    </li>
                </ul>

        )

    }


}
