import React from 'react';

const AddComment = ({addComment}) => {
	return(
		<div>
			<input type="text"></input>
			<button type="submit" onClick={() => addComment() }>Send Comment</button>
		</div>
	);
};

export default AddComment;

