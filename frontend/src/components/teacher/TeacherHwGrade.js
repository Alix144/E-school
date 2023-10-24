import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const TeacherHwGrade = () => {
    const navigate = useNavigate(); 
    const {id} = useParams();
    const [error, setError] = useState('');
    const [grade, setGrade] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault()

        if(!grade){
            return setError("Please Add a Grade Value!")
        }

        try {
          const res = await axios.post(`http://localhost:4000/school/grade/${id}`,{
            grade
          })

          navigate("/body")
          alert("Homework Has Been Added Successfully")

        } catch (err) {
          console.log(err)
        }

      }

    //   const showFile = async() => {
    //     window.open(`http://localhost:4000/files/${file}`, "_blank", "noreferrer");
    //   }

    //   useEffect(() => {
          
    //   },[])

    return ( 
        <div className="form students">
            <h1>Home Work</h1>
            <form action="" onSubmit={handleSubmit}>

                <div className="output">
                    <h3>Name:</h3>
                    <p>Ali</p> 
                </div>

                <div className="output">
                    <h3>Topic:</h3>
                    <p>Limits</p> 
                </div>
                <div className="output">
                    <h3>Subject:</h3>
                    <p>Math</p> 
                </div>
                <div className="output">
                    <h3>Date:</h3>
                    <p>20-04-2023</p> 
                </div>
                <div className="output">
                    <h3>File:</h3>
                    <p><a href="">Download</a></p> 
                </div>


                <div>
                    <label htmlFor="">Grade</label>
                    <input type="number" max={100} min={0} value={grade} onChange={(e)=>setGrade(e.target.value)}/>
                    {error && <p className='err'>{error}</p> }
                    <button type="submit">Send Grade</button>
                </div>
                
            </form>
        </div>
     );
}
 
export default TeacherHwGrade;