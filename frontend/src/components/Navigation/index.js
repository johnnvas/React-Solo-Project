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
              <NavLink to='/upload-image' className='container'>
                 <div className='upload'>
                  </div>
              </NavLink>
          <ProfileButton user={sessionUser} />
        </div>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <div>
          <NavLink to="/signup">
            <button>Sign Up </button>
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
