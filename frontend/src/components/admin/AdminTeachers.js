import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminTeachers = () => {

    const [teachers, setTeachers] = useState()
    const [students, setStudents] = useState()

    const sendRequest = async() => {
        try {
          const res = await axios.get("http://localhost:4000/user/teachers")
          const data = await res.data.teachers;
          return data;
    
        } catch (err) {
          console.log(err)
        }
      }

    const stuNum = async() => {
        try {
          const res = await axios.get("http://localhost:4000/user/students")
          const data = await res.data.students;
          return data;
    
        } catch (err) {
          console.log(err)
        }
      }
    
      useEffect(() => {
          sendRequest().then(data=>setTeachers(data))
          stuNum().then(data=>setStudents(data));
      },[])


    return ( 
        <div className="teachers box">
            <h1>Teachers</h1>
            <div className="table-div">
            <table>
                <thead>
                <tr className="th">
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Number Of Students</th>
                </tr>
                </thead>

                {/* <tbody>
                {teachers && teachers.slice().reverse().map((teacher, index) => (
                   
                    <tr key={index}>
                        <td>{teacher.name}</td>
                        <td>{teacher.email}</td>
                        <td>{teacher.subject}</td>

                        { students && students.map((student, index) => {
                             let studentNum = 0;
                            if(student.subjects.includes(teachers.subject)){
                                studentNum ++;
                            }
                        })
                        
                        }

                        <td>{studentNum}</td>
                    </tr>
                 ))}
                </tbody> */}

                <tbody>
                    {teachers && teachers.slice().reverse().map((teacher, index) => {
                      let studentNum = 0;
                    
                    {students && students.forEach((student) => {
                          if (student.subjects.includes(teacher.subject)) {
                            studentNum++;
                          }
                        });}
                    
                      return (
                        <tr key={index}>
                          <td>{teacher.name}</td>
                          <td>{teacher.email}</td>
                          <td>{teacher.subject}</td>
                          <td>{studentNum}</td>
                        </tr>
                      );
                    })}
                </tbody>

            </table>
            </div>

            <button>Add Teacher</button>
        </div>
     );
}
 
export default AdminTeachers;