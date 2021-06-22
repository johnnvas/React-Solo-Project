import { useEffect, useState } from 'react';
// import './MainPage.css';
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
// import * as uploadActions from "../../store/upload";
// import Navigation from "./Navigation/index";



export default function Mainpage() {
    const dispatch = useDispatch();
    const loggedIn = useSelector(state => state.session).user;
    const [getImg, setGetImg] = useState('');

    return (
        <>
            <div>
                Welcome Home
            </div>
        </>
    )

}
