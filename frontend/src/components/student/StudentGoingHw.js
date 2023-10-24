import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import axios from 'axios';

const StudentGoingHw = () => {

    const navigate = useNavigate(); 
    const [hw, setHws] = useState()
    const id = localStorage.getItem('userId');

    const sendRequest = async() => {
        try {
          const res = await axios.get(`http://localhost:4000/school/studentHw/${id}`)
          const data = await res.data.homeworks;
          console.log(data)
          return data;
    
        } catch (err) {
          console.log(err)
        }
      }

      useEffect(() => {
          sendRequest().then(data=>setHws(data.reverse()))
      },[])
      
    return ( 
        <div className="teachers box">
            <h1>Going Homeworks</h1>
            <div className="table-div">
            <table>
                <thead>
                <tr className="th">
                    <th>Subject</th>
                    <th>Topic</th>
                    <th>Date</th>
                    <th>Grade</th>
                </tr>
                </thead>

                <tbody>


                {hw && hw.map((hw, index) =>{
                 const date = format(parseISO(hw.submittedDate), 'MMMM dd, yyyy');
                 return (    
                    <tr key={index}>
                        <td>{hw.hw.subject}</td>
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
 
export default StudentGoingHw;