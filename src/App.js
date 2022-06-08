import logo from './logo.svg';
import { Routes, Route, useNavigate } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<SignUp/>}></Route>
        <Route exact path="/sign-in" element={<SignIn/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
