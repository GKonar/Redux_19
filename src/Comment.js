import React from 'react';

const Comment = ({text, votes}) => <li>{text} <span>votes: {votes}</span></li>;

export default Comment;

/*
Ten komponent zajmie się oczywiście wyświetleniem pojedynczego 
komentarza znajdującego się w komponencie z listą komentarzy.
*/