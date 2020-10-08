import React, { FC, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes, { InferProps } from 'prop-types';

import { useAuth } from '../auth';
import Loading from '../components/Loading';

const Home = lazy(() => import('./Home'));
const Login = lazy(() => import('./Login'));
const ProjectsList = lazy(() => import('./ProjectsList'));

const srPropTypes = {
  isLogged: PropTypes.bool.isRequired,
};

type SRProps = InferProps<typeof srPropTypes>;

const ScenesRoutes: FC<SRProps> = ({ isLogged }) => {
  const HomeComponent = isLogged ? ProjectsList : Home;
  return (
    <Suspense fallback={Loading}>
      <Switch>
        <Route path="/" component={HomeComponent} />
        <Route path="/login" component={Login} />
      </Switch>
    </Suspense>
  );
};

ScenesRoutes.propTypes = srPropTypes;

const Scenes: FC = () => {
  const { email, token, isLoading } = useAuth();
  const isLogged = Boolean(email && token);
  if (isLoading) {
    return <Loading />;
  }
  return <ScenesRoutes isLogged={isLogged} />;
};

export default Scenes;
