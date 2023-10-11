import AdminTeachers from "./admin/AdminTeachers";
import AdminStudents from "./admin/AdminStudents";
import AdminAddT from "./admin/AdminAddT";
import AdminAddS from "./admin/AdminAddS";
import AdminEditT from "./admin/AdminEditT";
import AdminEditS from "./admin/AdminEditS";


const Admin = () => {
    return ( 
        <div className="body">
            <AdminTeachers/>
            <AdminStudents/>
        </div>
     );
}
 
export default Admin;