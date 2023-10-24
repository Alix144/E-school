const StudentTeachers = () => {
    return ( 
        <div className="students box teach">
            <h1>My Teachers</h1>
            <div className="table-div">
            <table>
                <thead>
                <tr className="th">
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Message</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Arife</td>
                    <td>not-working@hotmail.com</td>
                    <td>Math</td>
                    <td><a href="">Message</a></td>
                </tr>
                <tr>
                    <td>ali</td>
                    <td>asd@hotmail.com</td>
                    <td>PE</td>
                    <td><a href="">Message</a></td>
                </tr>
                </tbody>

            </table>
            </div>

        </div>
     );
}
 
export default StudentTeachers;