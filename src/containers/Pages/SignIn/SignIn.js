import React from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Input } from 'antd';
import authAction from '@tminds/redux/auth/actions';
import appAction from '@tminds/redux/app/actions';
//import Auth0 from '../../Authentication/Auth0/Auth0';
import SignInStyleWrapper from './SignIn.styles';

const { login } = authAction;
const { clearMenu } = appAction;

export default function SignIn() {
  let history = useHistory();
  let location = useLocation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.Auth.idToken);

  const [redirectToReferrer, setRedirectToReferrer] = React.useState(false);
  React.useEffect(() => {
    if (isLoggedIn) {
      setRedirectToReferrer(true);
    }
  }, [isLoggedIn]);

  function handleLogin(e, token = false) {
    e.preventDefault();
    if (token) {
      dispatch(login(token));
    } else {
      dispatch(login());
    }
    dispatch(clearMenu());
    history.push('/app');
  }
  let { from } = location.state || { from: { pathname: '/app' } };

  if (redirectToReferrer) {
    return <Redirect to={from} />;
  }
  return (
    <SignInStyleWrapper className="isoSignInPage">
      <div className="isoLoginContentWrapper">
        <div className="isoLoginContent">
          <div className="isoLogoWrapper">
          </div>
          <div className="isoSignInForm">
            <form>
              <div className="isoInputWrapper">
                <Input
                  size="large"
                  placeholder="Username"
                  autoComplete="true"
                />
              </div>
              <div className="isoInputWrapper">
                <Input
                  size="large"
                  type="password"
                  placeholder="Password"
                  autoComplete="false"
                />
              </div>
              <div>
                <Button type="primary" onClick={handleLogin} >Login</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </SignInStyleWrapper>
  );
}
