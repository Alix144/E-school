import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminStudents = () => {
    const [students, setStudents] = useState()
    
    const sendRequest = async() => {
        try {
          const res = await axios.get("http://localhost:4000/user/students")
          const data = await res.data.students;
          return data;
    
        } catch (err) {
          console.log(err)
        }
      }

      useEffect(() => {
          sendRequest().then(data=>setStudents(data))
      },[])

    return ( 
        <div className="students box">
            <h1>Students</h1>
            <div className="table-div">
            <table>
                <thead>
                    <tr className="th">
                        <th>Name</th>
                        <th>Email</th>
                        <th>Subjects</th>
                    </tr>
                </thead>

                <tbody>
                {students && students.slice().reverse().map((students, index) => (
                    <tr key={index}>
                        <td>{students.name}</td>
                        <td>{students.email}</td>
                        <td>{students.subjects.length}</td>
                    </tr>
                 ))}
                </tbody>

            </table>
            </div>

            <button>Add Student</button>
        </div>
     );
}
 
export default AdminStudents;