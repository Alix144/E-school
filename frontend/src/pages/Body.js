import AdminTeachers from "../components/AdminTeachers";
import AdminStudents from "../components/AdminStudents";

const Body = () => {
    return ( 
        <div className="body">
            <AdminTeachers/>
            <AdminStudents/>
        </div>
     );
}
 
export default Body;