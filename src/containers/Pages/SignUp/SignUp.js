import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Input, Button } from 'antd';
import authAction from '@tminds/redux/auth/actions';
import appActions from '@tminds/redux/app/actions';
import Auth0 from '../../Authentication/Auth0/Auth0';
import SignUpStyleWrapper from './SignUp.styles';

const { login } = authAction;
const { clearMenu } = appActions;

export default function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = (token = false) => {
    console.log(token, 'handlelogin');
    if (token) {
      dispatch(login(token));
    } else {
      dispatch(login());
    }
    dispatch(clearMenu());
    history.push('/dashboard');
  };
  return (
    <SignUpStyleWrapper className="isoSignUpPage">
      <div className="isoSignUpContentWrapper">
        <div className="isoSignUpContent">
          <div className="isoLogoWrapper">
            <Link to="/dashboard">
              Sign UP
            </Link>
          </div>

          <div className="isoSignUpForm">
            <div className="isoInputWrapper isoLeftRightComponent">
              <Input size="large" placeholder="First name" />
              <Input size="large" placeholder="Last name" />
            </div>

            <div className="isoInputWrapper">
              <Input size="large" placeholder="Username" />
            </div>

            <div className="isoInputWrapper">
              <Input size="large" placeholder="Email" />
            </div>

            <div className="isoInputWrapper">
              <Input size="large" type="password" placeholder="Password" />
            </div>

            <div className="isoInputWrapper">
              <Input
                size="large"
                type="password"
                placeholder="Confirm Password"
              />
            </div>


          </div>
        </div>
      </div>
    </SignUpStyleWrapper>
  );
}
