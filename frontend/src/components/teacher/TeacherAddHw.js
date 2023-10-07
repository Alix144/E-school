const TeacherAddHw = () => {
    return ( 
        <div className="form teachers">
            <h1>Add Homework</h1>
            <form action="">
                <div>
                    <label htmlFor="">Topic</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Deadline</label>
                    <input type="date" />
                </div>
                <div>
                    <label htmlFor="">Description</label>
                    <textarea name="" id="" cols="5" rows="4"></textarea>
                </div>
                <div>
                    <label htmlFor="">File</label>
                    <input type="file" />
                </div>

                <button>Add</button>
            </form>
        </div>
     );
}
 
export default TeacherAddHw;