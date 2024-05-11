// import StudentData from "./components/childrenComponents/StudentData";
import Home from "./components/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar.jsx";
import PlayGround from "./components/PlayGround.jsx";
import NotFound from "./components/NotFound";
import Message from "./components/Message.jsx";
import ListGroup from "./components/ListGroup.jsx";
import StudentInfo from "./components/childrenComponents/StudentInfo.jsx";
import { students } from "./data.js";
import Login from "./components/Login.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import Registration from "./components/Registration.jsx";
import DashBoard from "./components/DashBoard.jsx";
import StudentData from "./components/StudentData.jsx";
import { ToastContainer } from "react-toastify";
import Users from "./components/Users.jsx";
import Posts from "./components/Posts.jsx";
import { createContext, useState } from "react";
import Page from "./components/stateExample/Page.jsx";

export const AppContext = createContext();

const App = () => {
  const [user, setUser] = useState({});
  const newProducts = ["Laptop", "Mouse", "Keyboard", "Battery", "Charger"];
  const [products, setProducts] = useState(newProducts);

  return (
    <>
      <AppContext.Provider value={{ user, setUser, products, setProducts }}>
        <BrowserRouter>
          <ToastContainer theme="dark" />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/students"
              element={<ListGroup list={students} title={"Students"} />}
            />
            <Route path="/students/:id" element={<StudentData />} />
            <Route path="/playground" element={<PlayGround />} />
            <Route path="/Message" element={<Message />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/studentInfo" element={<StudentInfo />} />
            <Route path="/Posts" element={<Posts />} />
            <Route path="/Page" element={<Page />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/dashboard" element={<PrivateRoute />}>
              <Route index element={<DashBoard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
};

export default App;
