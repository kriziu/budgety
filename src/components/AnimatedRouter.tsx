import { FC } from 'react';

import { Route, Switch, useLocation } from 'react-router';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Overview from '../pages/Overview';
import Budgets from '../pages/Budgets';
import Payments from '../pages/Payments';
import Statistics from '../pages/Statistics';

import '../constant/style/animations.css';
import AllMoney from './AllMoney';

const AnimatedRouter: FC = (): JSX.Element => {
  const location = useLocation();

  return (
    <>
      <AllMoney />
      <TransitionGroup component={null}>
        <CSSTransition timeout={200} classNames="fade" key={location.key}>
          <Switch location={location}>
            <Route exact path="/overview">
              <Overview />
            </Route>
            <Route exact path="/budgets">
              <Budgets />
            </Route>
            <Route exact path="/payments">
              <Payments />
            </Route>
            <Route exact path="/statistics">
              <Statistics />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default AnimatedRouter;
