import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import axios from 'axios';

const SendSolution = ({subject, topic}) => {
    const navigate = useNavigate(); 
    const [file, setFile] = useState(null)
    const [addingDate, setAddingDate] = useState();
    const [deadline, setDeadline] = useState();
    const {id} = useParams();

    const [showChild, setShowChild] = useState(false);

    const handleClick = () => {
        setShowChild(!showChild);
    }

    return ( 
        <div className="form students">
            <h1>Send Homework</h1>
            
                <div className="output">
                    <h3>Subject:</h3>
                    <p>{subject}</p> 
                </div>
                <div className="output">
                    <h3>Topic:</h3>
                    <p>{topic}</p>
                </div>

                <div className="output">
                    <form action="">
                        <h3>File:</h3>
                        <input type="file" />
                    </form>
                    <button>Back</button>
                    <button>Submit</button>
                </div>
                

        </div>
     );
}
 
export default SendSolution;