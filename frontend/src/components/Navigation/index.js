// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
// import '../Homepage/Homepage.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div>
            <ProfileButton user={sessionUser} />
              <NavLink to='/upload' className='container'>
              <button className='upload'>Upload</button>

              </NavLink>
        </div>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <div>
          <NavLink to="/signup">
            <button className='logout-button'>Sign Up </button>
          </NavLink>
        </div>
      </>
    );
  }

  return (
    <nav className='navbar-container'>
        <div className='logo'>
          <NavLink exact to="/">
           <div className='aa-image'></div>
          </NavLink>
        </div>
      <div>
        {isLoaded && sessionLinks}
      </div>
    </nav>
  );
}

export default Navigation;
