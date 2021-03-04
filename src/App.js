import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contents from "./component/contents/contents";
import Detail from "./component/detail/detail";

function App({ youtube }) {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/react_clone_youtube/">
            <Contents youtube={youtube} />
          </Route>
          <Route path="/react_clone_youtube/detail">
            <Detail youtube={youtube} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
