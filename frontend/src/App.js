import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {authActions, roleActions } from './store';

import Header from "./components/Header";
import Body from "./pages/Body.js"
import LandingPage from "./pages/LandingPage"
import Login from "./pages/Login.js"

import Student from './components/Student';
import StudentHwDetail from './components/student/StudentHwDetail';
import SendSolution from './components/student/SendSolution';

import Teacher from './components/Teacher';
import TeacherAddHw from './components/teacher/TeacherAddHw';

import Admin from './components/Admin';
import AdminAddT from "./components/admin/AdminAddT";
import AdminAddS from './components/admin/AdminAddS';
import AdminEditT from './components/admin/AdminEditT';
import AdminEditS from './components/admin/AdminEditS';


function App() {

  const role = useSelector(state => state.role.role);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {

    if(localStorage.getItem("userId")){
      dispatch(authActions.login());
    }

    const savedRole = localStorage.getItem('role');
      if (savedRole) {
        if(savedRole === "admin"){
          dispatch(roleActions.admin())
        }else if(savedRole === "teacher"){
            dispatch(roleActions.teacher())
        }else if(savedRole === "student"){
          dispatch(roleActions.student())
      }
      }
    }, [dispatch])

  return (
    
    <div className="App">

      <BrowserRouter>
            <Header/>

            <Routes>

              { (!isLoggedIn) &&
              <>
              <Route path="/" element={<LandingPage />}/>
              <Route path="/login" element={<Login />}/>
              </>
              }

              {(role === "student" && isLoggedIn) && 
              <>
                <Route path="/body" element={<Student />}/>
                <Route path="/sendsolution" element={<SendSolution />}/>
                <Route path="/hwDetails/:id" element={<StudentHwDetail />}/>
              </>
              }

              {(role === "teacher" && isLoggedIn) &&
                <>
                  <Route path="/body" element={<Teacher />}/>
                  <Route path="/add/hw" element={<TeacherAddHw />}/>
                </>
              }

              {(role === "admin" && isLoggedIn) &&
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
