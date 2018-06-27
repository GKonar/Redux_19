import { combineReducers } from 'redux';
import comments from './comments';
import users from './users';

const reducer = combineReducers({
  comments,
  users
});

export default reducer;

// Funkcja pomocnicza combineReducers, dzięki której w prostszy sposób możemy łączyć ze sobą reduktory.