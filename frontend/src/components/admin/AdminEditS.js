const AdminEditS = () => {
    return ( 
        <div className="form students">
            <h1>Edit Student</h1>
            <form action="">
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" />
                </div>
                <div>
                    <label htmlFor="">Subjects</label>
                    <input type="text" />
                </div>

                <button className="delete">Delete Student</button>

                <button>Edit</button>
            </form>
        </div>
     );
}
 
export default AdminEditS;