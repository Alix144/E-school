import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const AdminEditT = () => {
    const [error, setError] = useState('');
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const navigate = useNavigate(); 

    const id = useParams().id 

    const fetchDetails = async() => {
        try {
            const res = await axios.get(`http://localhost:4000/user/${id}`)
            const data = await res.data;
            console.log(data)
            return data;
        } catch (err) {
            console.log(err)
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        if(!name || name.trim() === ""){
            return setError("Please Fill All In The Fields!")
        }

        try {
            const res = await axios.put(`http://localhost:4000/user/edit/${id}`,{
                name,
                subject,
                role: "teacher"
            })
            const data = await res.data;
            navigate("/body")
            return data;
            
        } catch (err) {
            console.log(err.response.data.message)
            setError(err.response.data.message)
        }
    }

    const handleDelete = async() => {
        try {
            const res = axios.delete(`http://localhost:4000/user/delete/${id}`)
            const data = await res.data;
            console.log(res)
            navigate("/body")
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=>{ 
        fetchDetails()
        .then((data)=>{
            setName(data.users.name);
            setEmail(data.users.email);
            setSubject(data.users.subject)
            setError("")
        })
    },[id])

    return ( 
        <div className="body">
        <div className="form teachers">
            <h1>Edit Teacher</h1>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" value={email} readOnly/>
                </div>
                <div>
                    <label htmlFor="">Subject</label>
                    <select id="subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)}>
                        <option value="Math">Math</option>
                        <option value="Physics">Physics</option>
                        <option value="Biology">Biology</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Geography">Geography</option>
                        <option value="History">History</option>
                        <option value="Art">Art</option>
                        <option value="Spanish">Spanish</option>
                        <option value="PE">PE</option>
                    </select>
                </div>
                {error && <p className='err'>{error}</p> }
                <button className="delete" onClick={handleDelete}>Delete Teacher</button>

                <button >Edit</button>
            </form>
        </div>
        </div>
     );
}
 
export default AdminEditT;