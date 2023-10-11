const AdminEditT = () => {
    return ( 
        <div className="body">
        <div className="form teachers">
            <h1>Edit Teacher</h1>
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
                    <label htmlFor="">Subject</label>
                    <input type="text" />
                </div>

                <button className="delete">Delete Teacher</button>

                <button>Edit</button>
            </form>
        </div>
        </div>
     );
}
 
export default AdminEditT;