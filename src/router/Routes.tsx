import React, { Suspense, useEffect } from 'react';
import { useCheckMeQuery } from 'api/publicApi';
import { changeIsAuth } from 'store/slices/auth';
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

const Login = React.lazy(() => import('pages/NoAuth/Register'));
const Register = React.lazy(() => import('pages/NoAuth/Login'));

function Routes() {
  const dispatch = useDispatch();

  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  console.log(isAuth);

  const {
    isLoading,
    isSuccess,
  } = useCheckMeQuery({});

  useEffect(() => {
    if (isSuccess) {
      dispatch(changeIsAuth(true));
    }
  }, [isSuccess]);

  if (isLoading) {
    return (
      <PageLoader />
    );
  }

  return (
    <Suspense fallback={<PageLoader />}>
      <BrowserRouter>
        {false ? (
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
