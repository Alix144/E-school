import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import axios from 'axios';
import SendSolution from './SendSolution';

const StudentHwDetail = () => {
    const navigate = useNavigate(); 
    const [hw, setHw] = useState({})
    const [file, setFile] = useState(null)
    const [addingDate, setAddingDate] = useState();
    const [deadline, setDeadline] = useState();
    const {id} = useParams();

    const [showChild, setShowChild] = useState(false);

    const handleClick = () => {
        setShowChild(!showChild);
    }

    const sendRequest = async() => {
        try {
          const res = await axios.get(`http://localhost:4000/school/hwDetails/${id}`)
          const data = await res.data.homework;
          console.log(data)
          if(data.file){
            setFile(data.file)
          }
          setAddingDate(format(parseISO(data.addingDate), 'MMMM dd, yyyy'))
          setDeadline(format(parseISO(data.deadline), 'MMMM dd, yyyy'))
          return data;

        } catch (err) {
          console.log(err)
        }
      }

      const showFile = async() => {
        window.open(`http://localhost:4000/files/${file}`, "_blank", "noreferrer");
      }

      useEffect(() => {
          sendRequest().then(data=>setHw(data))
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
                {file &&
                <div className="output">
                    <h3>File:</h3>
                    <p><a href="" onClick={showFile}>Download</a></p> 
                </div>}

                <button onClick={handleClick}>Send Solution</button>
                {showChild && (
                <div>
                    <SendSolution 
                          hwId={hw._id}
                          subject= {hw.subject}
                          topic={hw.topic}
                    />
                    <button onClick={handleClick}>Go Back</button>
                </div>
            ) }
        </div>
     );
}
 
export default StudentHwDetail;