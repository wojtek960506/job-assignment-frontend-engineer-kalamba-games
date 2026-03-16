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
          <Route exact path="/" component={ArticleListPage} />
          <PublicRoute path="/login" component={Login} />
          <Route path="/profile/:username" component={ProfilePage} />
          <Route path="/:slug" component={Article} />
          
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App;
