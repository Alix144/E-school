import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import axios from 'axios';

const StudentHwDetail = () => {
    const navigate = useNavigate(); 
    const [hw, setHw] = useState({})
    const [addingDate, setAddingDate] = useState();
    const [deadline, setDeadline] = useState();
    const {id} = useParams();

    const sendRequest = async() => {
        try {
          const res = await axios.get(`http://localhost:4000/school/hwDetails/${id}`)
          const data = await res.data.homework;
          console.log(data)
          if(!data){
            return console.log("whattttt")
          }
          return data;

        } catch (err) {
          console.log(err)
        }
      }

      useEffect(() => {
          sendRequest().then(data=>setHw(data));

          if (hw.addingDate && hw.deadline) {
            setAddingDate(format(parseISO(hw.addingDate), 'MMMM dd, yyyy'));
            setDeadline(format(parseISO(hw.deadline), 'MMMM dd, yyyy'));
          }
        //   setAddingDate(hw.addingDate.substring(0, 10))
        //   setDeadline(hw.deadline.substring(0, 10))
      },[])

    return ( 
        <div className="form students">
            <h1>Homework</h1>
            
                <div className="output">
                    <h3>Subject:</h3>
                    <p>{hw.subject}</p> 
                </div>
                <div className="output">
                    <h3>Topic:</h3>
                    <p>{hw.topic}</p>
                </div>
                <div className="">
                    <h3>Description:</h3>
                    <p>{hw.description && hw.description}</p> 
                </div>
                <div className="output">
                    <h3>Date:</h3>
                    <p>{addingDate}</p> 
                </div>
                <div className="output">
                    <h3>Deadline:</h3>
                    <p>{deadline}</p>
                </div>
                <div className="output">
                    <h3>File:</h3>
                    <p><a href="">Download</a></p> 
                </div>

        </div>
     );
}
 
export default StudentHwDetail;