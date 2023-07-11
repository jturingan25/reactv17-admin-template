import { combineReducers } from 'redux';
import App from '@tminds/redux/app/reducer';
import Auth from '@tminds/redux/auth/reducer';

export default combineReducers({
  Auth,
  App,
});
