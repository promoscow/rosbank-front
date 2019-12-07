import React, { Suspense } from "react";
import { Route, Switch, useLocation, BrowserRouter } from "react-router-dom";

import { TransitionGroup, CSSTransition } from "react-transition-group";

const FormPage = React.lazy(() => import("../pages/introdution/"));
const ResultPage = React.lazy(() => import("../pages/result/"));
const StepsPage = React.lazy(() => import("../pages/steps/"));

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="*">
          <AnimatedRouter />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

function AnimatedRouter() {
  const location = useLocation();

  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames={"fade"}
        >
          <Switch location={location}>
            <Route exact path="/" component={FormPage} />
            <Route exact path="/result" component={ResultPage} />
            <Route exact path="/loading" component={StepsPage} />

            <Route component={() => <div>Страница не найдена</div>} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Suspense>
  );
}

export default Router;
