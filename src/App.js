import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contents from "./component/contents/contents";
import Detail from "./component/detail/detail";

function App({ youtube }) {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/">
            <Contents youtube={youtube} />
          </Route>
          <Route path="/detail">
            <Detail youtube={youtube} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
