import React from 'react';
//import { thumbUpComment } from './actions';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment}) => 
<li>
	{text} 	<span>votes: {votes}</span>
			<button onClick={() => thumbUpComment(id)}>Like</button>
			<button onClick={() => thumbDownComment(id)}>Don't like</button>
</li>;

export default Comment;

/*
Ten komponent zajmie się oczywiście wyświetleniem pojedynczego 
komentarza znajdującego się w komponencie z listą komentarzy.
*/