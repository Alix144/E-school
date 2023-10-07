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

const Body = () => {
    return ( 
        <div className="body">
            <StudentHW/>
            <StudentTeachers/>
            <Announcments/>
        </div>
     );
}
 
export default Body;