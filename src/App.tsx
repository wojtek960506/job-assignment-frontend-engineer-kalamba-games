import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Article from "./Article";
import ArticleList from "./ArticleList";
import { Login } from "./login";
import Profile from "./Profile";
import { MainLayout } from "./main-layout";
import { PublicRoute } from "./routes";

function App(): JSX.Element {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <PublicRoute path="/login" component={Login} />
          <Route path="/profile/:username" exact component={Profile} />
          <Route path="/profile/:username/favorites" exact component={Profile} />
          <Route path="/:slug" exact component={Article} />
          <Route path="/" component={ArticleList} />
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App;
