import { store } from './store';
import authActions from '@tminds/redux/auth/actions';

export default () =>
  new Promise(() => {
    store.dispatch(authActions.checkAuthorization());
  });
