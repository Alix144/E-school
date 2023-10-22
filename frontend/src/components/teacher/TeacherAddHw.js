import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TeacherAddHw = () => {

    const [topic, setTopic] = useState('');
    const [deadline, setDeadline] = useState("")
    const [description, setDescription] = useState("")
    const [file, setFile] = useState("")
    const [error, setError] = useState('');
    const id = localStorage.getItem('userId');

    const navigate = useNavigate(); 

    const handleSubmit = async(e) => {
        e.preventDefault()

        if(!topic || !deadline){
            return setError("Please Fill In Both Topic and Deadline fields")
        }

        try {
            const currentDate = new Date();

            const year = currentDate.getFullYear();
            const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based
            const day = String(currentDate.getDate()).padStart(2, '0');
          
            const addingDate = `${year}-${month}-${day}`;

            const formData = new FormData();
            formData.append("topic", topic);
            formData.append("description", description);
            formData.append("addingDate", addingDate);
            formData.append("deadline", deadline);
            formData.append("file", file);
            formData.append("assignedBy", id);

            const res = await axios.post("http://localhost:4000/school/add/hw", formData)

            // const res = await axios.post("http://localhost:4000/school/add/hw", {
            //     topic,
            //     description,
            //     addingDate,
            //     deadline,
            //     file,
            //     assignedBy: id,
            // })

            navigate("/body")
            alert("Homework Has Been Added Successfully")

        } catch (err) {
            console.log(err.response.data.message)
            setError(err.response.data.message)   
        }
    }

    return ( 
        <div className="form teachers">
            <h1>Add Homework</h1>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Topic</label>
                    <input type="text" value={topic} onChange={(e)=>setTopic(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="">Deadline</label>
                    <input type="date" value={deadline} onChange={(e)=>setDeadline(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="">Description</label>
                    <textarea name="" id="" cols="5" rows="4" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
                </div>
                <div>
                    <label htmlFor="">File</label>
                    <input type="file" onChange={(e)=>setFile(e.target.files[0])}/>
                </div>

                {error && <p className='err'>{error}</p> }
                <button type="submit">Add</button>
            </form>
        </div>
     );
}
 
export default TeacherAddHw;