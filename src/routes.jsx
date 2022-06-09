import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Translate from './Pages/Translate/Translate'
import Classes from './Pages/Classes/Classes'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/translate" component={Translate} />
        <Route path="/class" component={Classes} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
