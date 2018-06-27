import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer';
import Comment from './CommentContainer';
import { addComment } from './actions';

const App = () => {
  return (
    <div className="App">
      <CommentsListContainer />
      <button onClick={() => addComment(text)}>Add comment</button>
    </div>
  );
};

export default App;