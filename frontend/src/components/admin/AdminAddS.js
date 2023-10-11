import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminAddS = () => {

    const [error, setError] = useState('');
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [subjects, setSubjects] = useState([])

    const navigate = useNavigate(); 

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

        if(!name || !email || !password){
            return setError("Please Fill In All The Fields!")
        }

        try {
            const res = await axios.post("http://localhost:4000/user/signup", {
                name,
                email,
                password,
                role: "student",
                subjects
            })

            // const data = await res.data;

            navigate("/body")
            alert("Student Has Been Added Successfully")

        } catch (err) {
            console.log(err.response.data.message)
            setError(err.response.data.message)   
        }
        console.log(error)
    }

    return ( 
        <div className="body">
        <div className="form students">
            <h1>Add Student</h1>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="radio">
                    <label htmlFor="">Subjects</label>
                    <br />

                    <div className="subject">
                        <input type="checkbox" id="math" name="math" checked={subjects.includes('Math')} onChange={() => handleCheckboxChange('Math')}/>
                        <label for="math">Math</label>
                    </div>

                    <div className="subject">
                        <input type="checkbox" id="art" name="art" checked={subjects.includes('Art')} onChange={() => handleCheckboxChange('Art')}/>
                        <label for="art">Art</label>
                    </div>

                    <div className="subject">
                        <input type="checkbox" id="geography" name="geography" checked={subjects.includes('Geography')} onChange={() => handleCheckboxChange('Geography')}/>
                        <label for="geography">Geography</label>
                    </div>

                    <div className="subject">
                        <input type="checkbox" id="history" name="history" checked={subjects.includes('History')} onChange={() => handleCheckboxChange('History')}/>
                        <label for="history">History</label>
                    </div>

                    <div className="subject">
                        <input type="checkbox" id="biology" name="biology" checked={subjects.includes('Biology')} onChange={() => handleCheckboxChange('Biology')}/>
                        <label for="biology">Biology</label>
                    </div>

                    <div className="subject">
                        <input type="checkbox" id="chemistry" name="chemistry" checked={subjects.includes('Chemistry')} onChange={() => handleCheckboxChange('Chemisry')}/>
                        <label for="chemistry">Chemistry</label>
                    </div>

                    <div className="subject">
                        <input type="checkbox" id="physics" name="physics" checked={subjects.includes('Physics')} onChange={() => handleCheckboxChange('Physics')}/>
                        <label for="physics">Physics</label>
                    </div>

                    <div className="subject">
                        <input type="checkbox" id="spanish" name="spanish" checked={subjects.includes('Spanish')} onChange={() => handleCheckboxChange('Spanish')}/>
                        <label for="spanish">Spanish</label>
                    </div>

                    <div className="subject">
                        <input type="checkbox" id="pe" name="pe" checked={subjects.includes('PE')} onChange={() => handleCheckboxChange('PE')}/>
                        <label for="pe">PE</label>
                    </div>

                </div>

                <button>Add</button>
            </form>
        </div>
        </div>
     );
}
 
export default AdminAddS;