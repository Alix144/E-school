import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import axios from 'axios';

const SendSolution = ({hwId, subject, topic}) => {

    const [file, setFile] = useState("")
    const [error, setError] = useState('');
    const id = localStorage.getItem('userId');

    const navigate = useNavigate(); 

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log('hiii')
        if(!file){
            return setError("Please Upload Your Homework!")
        }

        try {
            const currentDate = new Date();

            const year = currentDate.getFullYear();
            const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based
            const day = String(currentDate.getDate()).padStart(2, '0');
          
            const date = `${year}-${month}-${day}`;
            const userId = localStorage.getItem('userId')

            const formData = new FormData();
            formData.append("hw", hwId);
            formData.append("submittedDate", date);
            formData.append("userId", userId);
            formData.append("file", file);

            const res = await axios.post("http://localhost:4000/school/submit/hw", formData)
            console.log(res)
            navigate("/body")
            alert("Homework Has Been Added Successfully")

        } catch (err) {
            console.log(err.response.data.message)
            setError(err.response.data.message)   
        }
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
                    <form action="" onSubmit={handleSubmit}>
                        <h3>File:</h3>
                        <input type="file" onChange={(e)=>setFile(e.target.files[0])}/>
                        {error && <p className='err'>{error}</p> }
                        <button type='submit' onClick={()=>console.log("ehehehe")}>Submit</button>
                    </form>
                   
                </div>
                

        </div>
     );
}
 
export default SendSolution;