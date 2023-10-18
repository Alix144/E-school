import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import axios from 'axios';

const StudentHW = () => {
    const navigate = useNavigate(); 
    const [hw, setHws] = useState()
    const id = localStorage.getItem('userId');

    const sendRequest = async() => {
        try {
          const res = await axios.get(`http://localhost:4000/school/student/${id}`)
          const data = await res.data.homework;
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
            <h1>Homeworks</h1>
            <div className="table-div">
            <table>
                <thead>
                <tr className="th">
                    <th>Subject</th>
                    <th>Topic</th>
                    <th>Date</th>
                    <th>Deadline</th>
                </tr>
                </thead>

                <tbody>

                {hw && hw.map((hw, index) =>{
                 const addingDate = format(parseISO(hw.addingDate), 'MMMM dd, yyyy');
                 const deadline = format(parseISO(hw.deadline), 'MMMM dd, yyyy');
                 return (    
                    <tr key={index} onClick={()=>{navigate(`/hwDetails/${hw._id}`)}}>
                        <td>{hw.subject}</td>
                        <td>{hw.topic}</td>
                        <td>{addingDate}</td>
                        <td>{deadline}</td>
                    </tr>
                 )
                 })}
                 
                </tbody>

            </table>
            </div>

        </div>
     );
}
 
export default StudentHW;