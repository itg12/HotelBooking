import Home from "./screens/Home";
import Login from './screens/Login';
import Signup from './screens/Signup';
import Rooms from './screens/Rooms';
import Bookings  from "./screens/Bookings";
import Facilities from './screens/Facilities';
import Restraunt from './screens/Restraunt';
import BookRoom from './screens/BookRoom';
import RoomDetails from './screens/RoomDetails';



import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>      
      <Router>
        <Routes>
          <Route path='/' exact element = {<Home/>} />
          <Route path='/login' exact element = {<Login/>} />
          <Route path='/signup' exact element = {<Signup/>} />
          <Route path='/rooms' exact element = {<Rooms/>} />
          <Route path='/bookings' exact element = {<Bookings/>} />
          <Route path='/facilities' exact element = {<Facilities/>} />
          <Route path='/restraunt' exact element = {<Restraunt/>} />
          <Route path='/BookRoom' exact element = {<BookRoom/>} />
          <Route path='/rooms/detail/:id' exact element = {<RoomDetails/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
