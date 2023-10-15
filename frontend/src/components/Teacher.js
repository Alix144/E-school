import TeacherStudents from "./teacher/TeacherStudents";
import TeacherHW from "./teacher/TeacherHW";
import TeacherHwGrade from "./teacher/TeacherHwGrade";
import TeacherAddHw from "./teacher/TeacherAddHw";
import TeacherComingHw from "./teacher/TeacherComingHw";

const Teacher = () => {
    return ( 
        <div className="body">
            <TeacherStudents/>
            <TeacherHW/>
            <TeacherComingHw/>
        </div>
     );
}
 
export default Teacher;