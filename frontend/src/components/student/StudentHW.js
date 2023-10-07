const StudentHW = () => {
    return ( 
        <div className="teachers box ">
            <h1>Homeworks</h1>
            <div className="table-div">
            <table>
                <tr className="th">
                    <th>Subject</th>
                    <th>Topic</th>
                    <th>Deadline</th>
                    <th>Grade</th>
                </tr>
                <tr>
                    <td>Math</td>
                    <td>Limits</td>
                    <td>13-03-2023</td>
                    <td>-</td>
                </tr>

                <tr>
                    <td>Physics</td>
                    <td>light</td>
                    <td>19-03-2023</td>
                    <td>89</td>
                </tr>



            </table>
            </div>

        </div>
     );
}
 
export default StudentHW;