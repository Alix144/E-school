import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import axios from 'axios';

const TeacherComingHw = () => {

    const navigate = useNavigate(); 
    const [hw, setHws] = useState()
    const id = localStorage.getItem('userId');

    const sendRequest = async() => {
        try {
          const res = await axios.get(`http://localhost:4000/school/teacher/coming/${id}`)
          const data = await res.data.comingHws;
          console.log(data)
          return data;
    
        } catch (err) {
          console.log(err)
        }
      }

      useEffect(() => {
          sendRequest().then(data=>setHws(data))
      },[])

    return ( 
        <div className="teachers box">
            <h1>Coming Homeworks</h1>
            <div className="table-div">
            <table>
                <thead>
                <tr className="th">
                    <th>Student</th>
                    <th>Topic</th>
                    <th>Date</th>
                    <th>Grade</th>
                </tr>
                </thead>

                <tbody>

                {hw && hw.map((hw, index) =>{
                 const date = format(parseISO(hw.submittedDate), 'MMMM dd, yyyy');
                 return (    
                    <tr key={index} onClick={()=>{navigate(`/grade/${hw._id}`)}}>
                        <td>{hw.submittedBy.name}</td>
                        <td>{hw.hw.topic}</td>
                        <td>{date}</td>
                        {hw.grade ?
                            <td>{hw.grade}</td>:
                            <td>-</td>
                        }
                    </tr>
                 )
                 })}

                </tbody>
            </table>
            </div>

        </div>
     );
}
 
export default TeacherComingHw;