// import Navbar from "./componets/topnav/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import EveraskedQ from "./componets/sidenav/EveraskedQ";
import Home from "./componets/topnav/Home";
import Login from "./componets/topnav/Login";
import Profile from "./componets/topnav/Profile";
import Sign from "./componets/topnav/Sign";
import Question from "./componets/sidenav/Question";

function App() {
  return (
    <div className="App">
          <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/Home" element={<Navigate to="Home"/>}/>
          <Route path="/" element={<Home/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Sign" element={<Sign/>} />
          <Route path="/EveraskedQ" element={<EveraskedQ/>} />
          <Route path="/Question" element={<Question/>}/>
        </Route>
      </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
