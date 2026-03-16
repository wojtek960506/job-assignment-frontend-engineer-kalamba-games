import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Article from "./Article";
import { ArticleListPage } from "./article";
import { Login } from "./login";
import { ProfilePage } from "./profile";
import { MainLayout } from "./main-layout";
import { PublicRoute } from "./routes";

function App(): JSX.Element {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <PublicRoute path="/login" component={Login} />
          <Route path="/profile/:username" exact component={ProfilePage} />
          <Route path="/:slug" exact component={Article} />
          <Route path="/" component={ArticleListPage} />
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App;
