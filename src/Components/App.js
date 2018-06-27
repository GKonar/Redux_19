import React from 'react';
import './App.css';
import CommentsListContainer from '../Containers/CommentsListContainer';
import DevTools from '../DevTools';
import AddCommentContainer from '../Containers/AddCommentContainer';

const App = () => {
  return (
    <div className="App">
    	<AddCommentContainer />
    	<CommentsListContainer />
    	<DevTools />
    </div>
  );
};

export default App;

//CommentsListContainer ---> Lista komentarzy !! 

