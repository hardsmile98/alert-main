import React, { Suspense, useEffect } from 'react';
import { useCheckMeQuery } from 'api/publicApi';
import { logout } from 'store/slices/auth';
import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Navigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import Layout from './Layout';
import PageLoader from './PageLoader';

const Register = React.lazy(() => import('pages/NoAuth/Register'));
const Login = React.lazy(() => import('pages/NoAuth/Login'));

function Routes() {
  const dispatch = useDispatch();

  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  const {
    isLoading,
    isError,
  } = useCheckMeQuery({}, { skip: !isAuth });

  useEffect(() => {
    if (isError) {
      dispatch(logout());
    }
  }, [isError]);

  if (isLoading) {
    return (
      <PageLoader />
    );
  }

  return (
    <Suspense fallback={<PageLoader />}>
      <BrowserRouter>
        {isAuth ? (
          <Layout>
            <Switch>
              <Route path="*" element={<div>111</div>} />
            </Switch>
          </Layout>
        ) : (
          <Switch>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Switch>
        )}
      </BrowserRouter>
    </Suspense>
  );
}

export default Routes;
