import TeacherStudents from "./teacher/TeacherStudents";
import TeacherHW from "./teacher/TeacherHW";
import TeacherHwGrade from "./teacher/TeacherHwGrade";
import TeacherAddHw from "./teacher/TeacherAddHw";

const Teacher = () => {
    return ( 
        <div className="body">
            <TeacherHW/>
            <TeacherStudents/>
        </div>
     );
}
 
export default Teacher;