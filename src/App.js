
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import AddServices from './Components/AddServices/AddServices';
import Booking from './Components/Booking/Booking';
import AllOrder from './Components/Booking/OrderPackage/AllOrder/AllOrder';
import MyOrder from './Components/Booking/OrderPackage/MyOrder/MyOrder';
import AuthProvider from './Components/Context/AuthProvider';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="">

    <AuthProvider>
<BrowserRouter>
  <Header></Header>
  <Switch>


    <Route exact path="/">
      <Home></Home>
    </Route>
    <Route exact path="/home">
      <Home></Home>
    </Route>
   
    <Route exact path="/AddServices">
   
   <AddServices></AddServices>
    </Route>
    <Route exact path="/AllOrder">
      <AllOrder></AllOrder>
    </Route>
<Route exact path="/myOrder">
  <MyOrder></MyOrder>
</Route>

    <Route exact path="/booking/:serviceId">
      <Booking></Booking>
    </Route>
    

<Route>
  <Login></Login>
</Route>

  </Switch>
</BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
