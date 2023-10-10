import AdminTeachers from "../components/admin/AdminTeachers";
import AdminStudents from "../components/admin/AdminStudents";
import AdminAddT from "../components/admin/AdminAddT";
import AdminAddS from "../components/admin/AdminAddS";
import AdminEditT from "../components/admin/AdminEditT";
import AdminEditS from "../components/admin/AdminEditS";

import TeacherStudents from "../components/teacher/TeacherStudents";
import TeacherHW from "../components/teacher/TeacherHW";
import TeacherHwGrade from "../components/teacher/TeacherHwGrade";
import TeacherAddHw from "../components/teacher/TeacherAddHw";

import StudentHW from "../components/student/StudentHW";
import StudentTeachers from "../components/student/StudentTeachers";
import Announcments from "../components/student/Announcements";
import StudentsHwSubmit from "../components/student/StudentsHwSubmit";
import AnnouncmentsDetail from "../components/student/AnnouncementDetail";

import { useDispatch, useSelector } from "react-redux";

const Body = () => {
    const role = useSelector(state => state.role.role);

    return ( 
    
        <div className="body">

            {(role === "student") && 
            <>
                <h1>Student</h1>
                <StudentHW/>
                <StudentTeachers/>
                <Announcments/>
            </>
            }

            {(role === "teacher") &&
            <>
                <TeacherHW/>
                <TeacherStudents/>
            </>
             }

            {(role === "admin") &&
            <>
                <AdminTeachers/>
                <AdminStudents/>
            </>
            }

        </div>
     );
}
 
export default Body;