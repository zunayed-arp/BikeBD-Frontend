import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AddService from './pages/Dashboard/AddService/AddService';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import PlaceOrder from './pages/Dashboard/PlaceOrder/PlaceOrder';
import MyOrders from './pages/Dashboard/MyOrders/MyOrders';
import Explore from './pages/Explore/Explore/Explore';
import ManageAllOrders from './pages/Dashboard/ManageAllOrders/ManageAllOrders';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/addProducts">
              <AddService></AddService>
            </Route>

            <Route path="/products/:id">
              <PlaceOrder></PlaceOrder>
            </Route>

            <Route path="/myOrders">
              <MyOrders></MyOrders>
            </Route>

            <Route path="/explore">
              <Explore></Explore>
            </Route>

            <Route path="/manage">
              <ManageAllOrders></ManageAllOrders>
            </Route>

            <Route path="/dashboard">
            <Dashboard></Dashboard>
            </Route>


          </Switch>

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
