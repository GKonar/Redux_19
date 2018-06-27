import React from 'react';

const Comment = ({text, votesPlus, votesMinus, id, thumbUpComment, thumbDownComment, removeComment, addComment}) => 
	<li>
		{text} 	<span>votes: {votesPlus}</span>
				<button onClick={() => thumbUpComment(id)}>Like</button>
				<span>votes: {votesMinus}</span>
				<button onClick={() => thumbDownComment(id)}>Don't like</button>
				<br />
				<button onClick={() => removeComment(id)}>Remove</button>
				<button onClick={() => addComment(text)}>Add comment</button>
	</li>


export default Comment;

/*
komponent prezentacyjny
Ten komponent zajmie się oczywiście wyświetleniem pojedynczego   !--- Zwraca pojedynczy element listy ---!
komentarza znajdującego się w komponencie z listą komentarzy.
*/