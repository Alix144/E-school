const TeacherHwGrade = () => {
    return ( 
        <div className="form students">
            <h1>Home Work</h1>
            <form action="">

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
                    <h3>Deadline:</h3>
                    <p>25-04-2023</p> 
                </div>
                <div className="output">
                    <h3>File:</h3>
                    <p><a href="">Download</a></p> 
                </div>


                <div>
                    <label htmlFor="">Grade</label>
                    <input type="number" max={100} min={0}/>
                </div>


                <button>Send Grade</button>
            </form>
        </div>
     );
}
 
export default TeacherHwGrade;