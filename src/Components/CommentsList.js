import React from 'react';
import Comment from '../Containers/CommentContainer'; // importuje kontener elementu zamiast zwykłego prezentacyjnego odpowiednika

const CommentsList = ({comments}) => 
									<ul>
										{comments.map(comment => <Comment key={comment.id} {...comment}/>)}
									</ul>;
export default CommentsList;

/*
 !!! Zadaniem tego komponentu będzie odbieranie danych z kontenera, a następnie renderowanie listy komentarzy. !!!
*/