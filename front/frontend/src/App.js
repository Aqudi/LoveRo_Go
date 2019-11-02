import React from 'react';
import {Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';
import WritePage from './pages/WritePage';

function App() {
  return (
    <>
	  <Route component={LoginPage} path = "/" exact/>
	  <Route component={RegisterPage} path = "/register" />
	  <Route component={MainPage} path="/main" />
      <Route component={WritePage} path="/write" />
    </>
  );
}

export default App;
