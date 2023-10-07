const AdminAddT = () => {
    return ( 
        <div className="form teachers">
            <h1>Add Teacher</h1>
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
                    <label htmlFor="">Password</label>
                    <input type="password" />
                </div>
                <div>
                    <label htmlFor="">Subject</label>
                    <input type="text" />
                </div>

                <button>Add</button>
            </form>
        </div>
     );
}
 
export default AdminAddT;