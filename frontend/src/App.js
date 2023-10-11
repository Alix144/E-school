import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

import Header from "./components/Header";
import Body from "./pages/Body.js"
import LandingPage from "./pages/LandingPage"
import Login from "./pages/Login.js"

import Student from './components/Student';
import Teacher from './components/Teacher';


import Admin from './components/Admin';
import AdminAddT from "./components/admin/AdminAddT";
import AdminAddS from './components/admin/AdminAddS';
import AdminEditT from './components/admin/AdminEditT';
import AdminEditS from './components/admin/AdminEditS';


function App() {

  const role = useSelector(state => state.role.role);

  return (
    
    <div className="App">

      <BrowserRouter>
            <Header/>

            <Routes>
              <Route path="/" element={<LandingPage />}/>
              <Route path="/login" element={<Login />}/>

            

              {(role === "student") && 
              <Route path="/body" element={<Student />}/>
              }

              {(role === "teacher") &&
                <Route path="/body" element={<Teacher />}/>
              }

              {(role === "admin") &&
                <>
                  <Route path="/body" element={<Admin />}/>
                  <Route path="/add/teacher" element={<AdminAddT />}/>
                  <Route path="/add/student" element={<AdminAddS />}/>
                  <Route path="/edit/teacher/:id" element={<AdminEditT />}/>
                  <Route path="/edit/student/:id" element={<AdminEditS />}/>
                </>
              }

              {/* <Route path="/body" element={<Body />}/> */}
            </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
