import React from 'react';
import {Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import WritePage from './pages/WritePage';
// import PostPage from './pages/PostPage';

function App() {
  return (
    <>
	  <Route component={LoginPage} path = "/" exact/>
	  <Route component={MainPage} path="/main" />
      <Route component={WritePage} path="/write" />
      {/*<Route component={PostPage} path="/main/:postId" /> */}
    </>
  );
}

export default App;
