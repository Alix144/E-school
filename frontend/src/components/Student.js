import StudentHW from "./student/StudentHW";
import StudentTeachers from "./student/StudentTeachers";
import Announcments from "./student/Announcements";
import StudentsHwSubmit from "./student/StudentsHwSubmit";
import AnnouncmentsDetail from "./student/AnnouncementDetail";

const Student = () => {
    return ( 
        <div className="body">
            <StudentHW/>
            <StudentTeachers/>
            <Announcments/>
        </div>
     );
}
 
export default Student;