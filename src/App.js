import React from 'react';
import {Route,NavLink,Switch,Redirect} from 'react-router-dom'
import logo from './logo.svg';
import './css/App.css';
import './rem'
import Home from './views/Home'
import Login from './views/Login'
import Xiang from './views/Xiang'
class App extends React.Component {
 
  state={
     
  }

  render(){

    return(
      <div className="app">
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/xiang" component={Xiang} />
            <Route path="/" render={()=><Redirect to="/home"/>} />
        </Switch>
      </div>
    )
    
  }

  

}

export default App;

