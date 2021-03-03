import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home.jsx';
import About from './About.jsx';
import Desserts from './Desserts.jsx';
import Gifts from './Gifts.jsx';
import Delivery from './Delivery.jsx';
import Navbar from './Navbar.jsx';
import {Switch,Route,Redirect} from 'react-router-dom';
function App() { 
  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/desserts" component={Desserts}/>
    <Route exact path="/gifts" component={Gifts}/>
    <Route exact path="/delivery" component={Delivery}/>
    <Route exact path="/about" component={About}/>
    <Redirect to="/" />

     
    </Switch> 
    </>
  );
}

export default App;
