import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import Login from "./05-pages/login"
import Register from "./05-pages/register"
import ForgotPassword from "./05-pages/forgotPassword"

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/register' component={Register}></Route>
        <Route exact path='/forgot-password' component={ForgotPassword}></Route>
        {/* for other routes and homepage redirect to register */}
        <Route>
          <Redirect to='/register' />
        </Route>
      </Switch>
    </div>
  )
}

export default App
