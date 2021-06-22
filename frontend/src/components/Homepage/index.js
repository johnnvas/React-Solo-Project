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

     useEffect(() => {
        let image = document.getElementById("home-container")
        const images = ["img1", "img2", "img3", "img4", "img5", "img6"]
        setInterval(function(){
            let random = Math.floor(Math.random() * 6);
            image.className = images[random]
        }, 3000);
    }, [])

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
            <div className='img1' id='home-container' >
                <div>
                </div>
             </div>
        )

    }


}