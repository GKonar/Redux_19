// Podpinanie wywołania akcji do store

import { connect } from 'react-redux';
import Comment from './Comment';
import { thumbUpComment } from './actions'; //  ?? dlaczego z index ?? // było index, zmieniłem na actions
import { thumbDownComment } from './actions';

const mapDispatchToProps = dispatch => ({	//Metoda ta MAPUJE odpowiednie wywołanie akcji do porpsów
  thumbUpComment: (id) => dispatch(thumbUpComment(id)),
  thumbDownComment: (id) => dispatch(thumbDownComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);