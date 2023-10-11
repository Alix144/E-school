import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminAddT = () => {

    const [error, setError] = useState('');
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [subject, setSubject] = useState("")

    const navigate = useNavigate(); 

    const handleSubmit = async(e) => {
        e.preventDefault()

        if(!name || !email || !password || !subject){
            return setError("Please Fill In All The Fields!")
        }

        try {
            const res = await axios.post("http://localhost:4000/user/signup", {
                name,
                email,
                password,
                role: "teacher",
                subject
            })

            // const data = await res.data;

            navigate("/body")
            alert("Teacher Has Been Added Successfully")

        } catch (err) {
            console.log(err.response.data.message)
            setError(err.response.data.message)   
        }
        console.log(error)
    }

    return ( 
        <div className="body">
        <div className="form teachers">
            <h1>Add Teacher</h1>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="">Subject</label>
                    <select id="subject" name="subject" onChange={(e) => setSubject(e.target.value)}>
                        <option value="">Select a subject</option>
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
                <button type='submit'>Add</button>
            </form>
        </div>
        </div>
     );
}
 
export default AdminAddT;