// Podpinanie wywołania akcji do store
import { connect } from 'react-redux';
import Comment from '../Components/Comment';
import { thumbUpComment } from '../actions'; //  ?? dlaczego z index ?? // było index, zmieniłem na actions
import { thumbDownComment } from '../actions';
import { removeComment } from '../actions';
import { addComment } from '../actions';

const mapDispatchToProps = dispatch => ({	//Metoda ta MAPUJE odpowiednie wywołanie akcji do porpsów
  thumbUpComment: (id) => dispatch(thumbUpComment(id)),
  thumbDownComment: (id) => dispatch(thumbDownComment(id)),
  removeComment: (id) => dispatch(removeComment(id)),
  addComment: (text) => dispatch(addComment(text))
});

export default connect(null, mapDispatchToProps)(Comment);
// Funkcja ,która mapuje odpowiednie wywołanie akcji do propsów
// Metoda zwraca obiekt z funkcjami już gotowymi do użycia w komponentach!