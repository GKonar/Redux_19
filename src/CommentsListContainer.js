import {connect} from 'react-redux'; //funkcji connect, która służy do łączenia komponentów do store
import CommentsList from './CommentsList';

const mapStateToProps = state => ({
  comments: state.comments
});

export default connect(mapStateToProps)(CommentsList);