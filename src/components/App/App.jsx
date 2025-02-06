import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuthSelector } from '../../hooks/useAuthSelector';

import SharedLayout from '@components/ui/SharedLayout';
import PrivateRoute from '@components/PrivateRoute';
import RestrictedRoute from '@components/RestrictedRoute.jsx';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const WelcomePage = lazy(() => import('../../pages/WelcomePage/WelcomePage'));
const SigninPage = lazy(() => import('../../pages/SigninPage/SigninPage'));
const SignupPage = lazy(() => import('../../pages/SignupPage/SignupPage'));

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuthSelector();

  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);
  return (
    <>
      {isRefreshing ? (
        <p style={{ fontSize: '60px' }}>...Loading</p>
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route
              index
              element={
              <HomePage/>
                // <PrivateRoute component={<HomePage />} redirectTo="/welcome" />
              }
            />

            <Route
              path="/home"
              element={
                <PrivateRoute component={<HomePage />} redirectTo="/signin" />
              }
            />

            <Route
              path="/welcome"
              element={
                <RestrictedRoute
                  component={<WelcomePage />}
                  redirectTo="/home"
                />
              }
            />

            <Route
              path="/signup"
              element={
                <RestrictedRoute
                  component={<SignupPage />}
                  redirectTo="/home"
                />
              }
            />

            <Route
              path="/signin"
              element={
                <RestrictedRoute
                  component={<SigninPage />}
                  redirectTo="/home"
                />
              }
            />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
