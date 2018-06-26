// Podpinanie wywołania akcji do store

import { connect } from 'react-redux';
import Comment from './Comment';
import { thumbUpComment } from './actions'; //  ?? dlaczego z index ?? // było index :)

const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);