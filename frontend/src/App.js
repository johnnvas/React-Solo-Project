// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Homepage from "./components/Homepage";
import UploadImage from "./components/UploadImage"
import ImagePage from "./components/ImagePage";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>

          <Route path="/" exact>
            <Homepage />
          </Route>

          <Route path="/signup">
            <SignupFormPage />
          </Route>

          <Route path="/upload">
            <UploadImage />
          </Route>

          <Route path="/image/:id">
            <ImagePage />
          </Route>

        </Switch>
      )}
    </>
  );
}

export default App;
