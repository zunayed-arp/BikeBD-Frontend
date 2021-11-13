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
import UpdateForm from './pages/Dashboard/UpdateForm/UpdateForm';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './pages/NotFound/NotFound';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          {/* <Navigation></Navigation> */}
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
            <PrivateRoute path="/addProducts">
              <AddService></AddService>
            </PrivateRoute>

            <PrivateRoute path="/products/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>

            <PrivateRoute exact path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>

            <Route path="/explore">
              <Explore></Explore>
            </Route>

            <Route exact path="/manage">
              <ManageAllOrders></ManageAllOrders>
            </Route>

            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>

            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>



            <Route exact path="/updateForm/:id">
              <UpdateForm></UpdateForm>
            </Route>


            <Route exact path="*">
              <NotFound></NotFound>
            </Route>


          </Switch>
          {/* <Footer></Footer> */}
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
