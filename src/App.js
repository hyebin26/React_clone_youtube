import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contents from "./component/contents/contents";
import Detail from "./component/detail/detail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Contents />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
