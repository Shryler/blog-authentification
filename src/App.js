import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseScreen from "./screens/BaseScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import AdminScreen from "./screens/AdminScreen";
import LoggedScreen from "./screens/LoggedScreen";
import AccountScreen from "./screens/AccountScreen";

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseScreen />}>
          <Route index element={<HomeScreen />}></Route>
          <Route path="/login" element={<LoginScreen />}></Route>
          <Route path="/admin" element={<AdminScreen />}></Route>
          <Route path="/logged" element={<LoggedScreen />}></Route>
          <Route path="/account" element={<AccountScreen />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
