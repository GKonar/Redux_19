import React from 'react';
import Commment from 'Commment';

const CommentsList = ({comments}) => <ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>;

export default CommentsList;

/*
Zadaniem tego komponentu będzie odbieranie danych z kontenera, a następnie renderowanie listy komentarzy.
*/