const StudentsHwSubmit = () => {
    return ( 
        <div className="form students">
            <h1>Homework</h1>
            <form action="">

                <div className="output">
                    <h3>Subject:</h3>
                    <p>Math</p> 
                </div>
                <div className="output">
                    <h3>Topic:</h3>
                    <p>Limits</p> 
                </div>
                <div className="">
                    <h3>Description:</h3>
                    <p>Limits is one of the important topics please solved this equation</p> 
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
                    <label htmlFor="">File:</label>
                    <input type="file"/>
                </div>


                <button>Send Homework</button>
            </form>
        </div>
     );
}
 
export default StudentsHwSubmit;