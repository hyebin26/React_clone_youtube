import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contents from "./component/contents/contents";
import Detail from "./component/detail/detail";

function App({ youtube }) {
  return (
    <>
      <BrowserRouter basename="/react_clone_youtube">
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
