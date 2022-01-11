
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
import PriveatRout from './Components/Privet/Priveat';
import AllServiceShow from './Components/Services/AllServiceShow/AllServiceShow';

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
   
    <PriveatRout exact path="/AddServices">
   
   <AddServices></AddServices>
    </PriveatRout>



    <Route exact path="/AllServicesShow">
      <AllServiceShow></AllServiceShow>
    </Route>
    <PriveatRout exact path="/AllOrder">
      <AllOrder></AllOrder>
    </PriveatRout>
<PriveatRout exact path="/myOrder">
  <MyOrder></MyOrder>
</PriveatRout>

    <PriveatRout exact path="/booking/:serviceId">
      <Booking></Booking>
    </PriveatRout>
    

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
