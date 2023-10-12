import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const AdminEditS = () => {
    const [error, setError] = useState('');
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subjects, setSubjects] = useState([])
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

    const handleCheckboxChange = (subject) => {
        setSubjects(prevSubjects => {
            if (prevSubjects.includes(subject)) {
                return prevSubjects.filter(item => item !== subject);
            } else {
                return [...prevSubjects, subject];
            }
        });
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        if(!name || name.trim() === ""){
            return setError("Please Fill All In The Fields!")
        }

        try {
            const res = await axios.put(`http://localhost:4000/user/edit/${id}`,{
                name,
                subjects,
                role: "student"
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
            setSubjects(data.users.subjects)
            setError("")
        })
    },[id])

    return ( 
        <div className="body">
        <div className="form students">
            <h1>Edit Student</h1>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" value={email} readOnly/>
                </div>
                <div className="radio">
                    <label htmlFor="">Subjects</label>
                    <br />

                    <div className="subject">
                        <input type="checkbox" id="math" name="math" checked={subjects.includes('Math')} onChange={() => handleCheckboxChange('Math')}/>
                        <label htmlFor="math">Math</label>
                    </div>

                    <div className="subject">
                        <input type="checkbox" id="art" name="art" checked={subjects.includes('Art')} onChange={() => handleCheckboxChange('Art')}/>
                        <label htmlFor="art">Art</label>
                    </div>

                    <div className="subject">
                        <input type="checkbox" id="geography" name="geography" checked={subjects.includes('Geography')} onChange={() => handleCheckboxChange('Geography')}/>
                        <label htmlFor="geography">Geography</label>
                    </div>

                    <div className="subject">
                        <input type="checkbox" id="history" name="history" checked={subjects.includes('History')} onChange={() => handleCheckboxChange('History')}/>
                        <label htmlFor="history">History</label>
                    </div>

                    <div className="subject">
                        <input type="checkbox" id="biology" name="biology" checked={subjects.includes('Biology')} onChange={() => handleCheckboxChange('Biology')}/>
                        <label htmlFor="biology">Biology</label>
                    </div>

                    <div className="subject">
                        <input type="checkbox" id="chemistry" name="chemistry" checked={subjects.includes('Chemistry')} onChange={() => handleCheckboxChange('Chemistry')}/>
                        <label htmlFor="chemistry">Chemistry</label>
                    </div>

                    <div className="subject">
                        <input type="checkbox" id="physics" name="physics" checked={subjects.includes('Physics')} onChange={() => handleCheckboxChange('Physics')}/>
                        <label htmlFor="physics">Physics</label>
                    </div>

                    <div className="subject">
                        <input type="checkbox" id="spanish" name="spanish" checked={subjects.includes('Spanish')} onChange={() => handleCheckboxChange('Spanish')}/>
                        <label htmlFor="spanish">Spanish</label>
                    </div>

                    <div className="subject">
                        <input type="checkbox" id="pe" name="pe" checked={subjects.includes('PE')} onChange={() => handleCheckboxChange('PE')}/>
                        <label htmlFor="pe">PE</label>
                    </div>
                </div>

                {error && <p className='err'>{error}</p> }

                <button className="delete" onClick={handleDelete}>Delete Student</button>
                <button type='submit'>Edit</button>
            </form>
        </div>
        </div>
     );
}
 
export default AdminEditS;