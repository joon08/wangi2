import React from 'react'
import FooterNav from './components/FooterNav/index'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import menus from '$conf/menus'

function App() {
  return (
    <div className='App' style={{height:"100%"}}>
      <Router>
        <Switch>
          {menus.map(menu => {
            return <Route {...menu} key={menu.path} />
          })}
        </Switch>
        <Route path='/' component={FooterNav} />
        <Redirect from='/' to='/home' />
      </Router>
    </div>
  )
}

export default App
