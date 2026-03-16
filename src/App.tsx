import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { ArticlePage, ArticleListPage } from "./article";
import { LoginPage } from "./login";
import { ProfilePage } from "./profile";
import { MainLayout } from "./main-layout";
import { PublicRoute } from "./routes";

function App(): JSX.Element {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={ArticleListPage} />
          <PublicRoute path="/login" component={LoginPage} />
          <Route path="/profile/:username" component={ProfilePage} />
          <Route path="/:slug" component={ArticlePage} />
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App;
