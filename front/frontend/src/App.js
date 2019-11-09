import React from 'react';
import {Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import WritePage from './pages/WritePage';
// import PostModalPage from './pages/PostModalPage';

function App() {
  return (
    <>
	  <Route component={LoginPage} path = "/" exact/>
	  <Route component={MainPage} exact path="/main" />
      <Route component={WritePage} path="/write" />
      {/*<Route component={PostModalPage} path="/main/:postId" /> */}
    </>
  );
}

export default App;
