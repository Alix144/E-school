import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TeacherStudents = () => {
    const navigate = useNavigate();  
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
        <div className="students box teach">
            <h1>My Students</h1>
            <div className="table-div">
            <table>
                <thead>
                <tr className="th">
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                </tr>
                </thead>

                <tbody>

                {students && students.slice().reverse().map((student, index) => (
                    <tr key={index}>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td><a href="">Message</a></td>
                    </tr>
                 ))}
                </tbody>

            </table>
            </div>

        </div>
     );
}
 
export default TeacherStudents;