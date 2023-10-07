const StudentTeachers = () => {
    return ( 
        <div className="students box teach">
            <h1>My Teachers</h1>
            <div className="table-div">
            <table>
                <tr className="th">
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Message</th>
                </tr>
                <tr>
                    <td>Arife</td>
                    <td>asd@hotmail.com</td>
                    <td>Math</td>
                    <td><a href="">Message</a></td>
                </tr>
                <tr>
                    <td>ali</td>
                    <td>asd@hotmail.com</td>
                    <td>PE</td>
                    <td><a href="">Message</a></td>
                </tr>


            </table>
            </div>

        </div>
     );
}
 
export default StudentTeachers;