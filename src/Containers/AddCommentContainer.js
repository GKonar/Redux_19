// Podpinanie wywołania akcji do store
import { connect } from 'react-redux';
import AddCommentComponent from '../Components/AddCommentComponent';
import { addComment } from '../actions';

const mapDispatchToProps = dispatch => ({  //Metoda ta MAPUJE odpowiednie wywołanie akcji do porpsów
	addComment: (text) => dispatch(addComment(text))
});

export default connect(null, mapDispatchToProps)(AddCommentComponent);
