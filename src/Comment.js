import React from 'react';
//import { thumbUpComment } from './actions';

const Comment = ({text, votesPlus, votesMinus, id, thumbUpComment, thumbDownComment}) => 
<li>
	{text} 	<span>votes: {votesPlus}</span>
			<button onClick={() => thumbUpComment(id)}>Like</button>
			<span>votes: {votesMinus}</span>
			<button onClick={() => thumbDownComment(id)}>Don't like</button>
</li>;

export default Comment;

/*
Ten komponent zajmie się oczywiście wyświetleniem pojedynczego 
komentarza znajdującego się w komponencie z listą komentarzy.
*/