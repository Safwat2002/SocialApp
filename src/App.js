import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login, Messenger, Profile, Register } from "./pages";
import PrivateRoute from "./utils/PrivateRoute";
function App() {

  const userData = useSelector(state=>state.user.userData);

  return (
  
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={userData ? <Home /> : <Login />} />
          <Route path="/profile" element={userData ? <Profile /> : <Login />} />
          <Route path="/login" element={<PrivateRoute> <Login /> </PrivateRoute>} />
          <Route path="/register" element={userData ? <Home /> : <Register />} />
          <Route path="/messenger" element={userData ? <Messenger /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
