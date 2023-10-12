const AdminEditS = () => {
    return ( 
        <div className="body">
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
                <div className="radio">
                    <label htmlFor="">Subjects</label>
                    <br />

                    <div className="subject">
                        <input type="checkbox" id="math" name="math"/>
                        <label htmlFor="math">Math</label>
                    </div>

                    <div className="subject">
                        <input type="checkbox" id="art" name="art"/>
                        <label htmlFor="art">Art</label>
                    </div>

                    <div className="subject">
                        <input type="checkbox" id="geography" name="geography"/>
                        <label htmlFor="geography">Geography</label>
                    </div>

                    <div className="subject">
                        <input type="checkbox" id="history" name="history"/>
                        <label htmlFor="history">History</label>
                    </div>

                    <div className="subject">
                        <input type="checkbox" id="biology" name="biology"/>
                        <label htmlFor="biology">Biology</label>
                    </div>

                    <div className="subject">
                        <input type="checkbox" id="chemistry" name="chemistry"/>
                        <label htmlFor="chemistry">Chemistry</label>
                    </div>

                    <div className="subject">
                        <input type="checkbox" id="physics" name="physics"/>
                        <label htmlFor="physics">Physics</label>
                    </div>

                    <div className="subject">
                        <input type="checkbox" id="spanish" name="spanish"/>
                        <label htmlFor="spanish">Spanish</label>
                    </div>

                    <div className="subject">
                        <input type="checkbox" id="pe" name="pe"/>
                        <label htmlFor="pe">PE</label>
                    </div>
                </div>

                <button className="delete">Delete Student</button>

                <button>Edit</button>
            </form>
        </div>
        </div>
     );
}
 
export default AdminEditS;