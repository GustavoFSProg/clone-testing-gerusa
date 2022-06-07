import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Translate from './Pages/Translate/Translate'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/translate" exact component={Translate} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
