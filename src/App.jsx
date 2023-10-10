import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import AllComponent from "./Components/AllComponent";
import Register from "./Pages/Register/Register";
import { useStateValue } from "./Utils/StateProvider";
import { useEffect } from "react";
import { auth } from "./Firebase/Firebase";
import Rooms from "./Pages/Rooms/Rooms";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //The user is just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //The user was logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AllComponent />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Rooms" element={<Rooms />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
