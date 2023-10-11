const AdminAddS = () => {
    return ( 
        <div className="body">
        <div className="form students">
            <h1>Add Student</h1>
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
                <div className="radio">
                    <label htmlFor="">Subjects</label>
                    <br />

                    <div className="subject">
                        <input type="checkbox" id="math" name="math"/>
                        <label for="math">Math</label>
                    </div>

                    <div className="subject">
                        <input type="checkbox" id="art" name="art"/>
                        <label for="art">Art</label>
                    </div>

                    <div className="subject">
                        <input type="checkbox" id="geography" name="geography"/>
                        <label for="geography">Geography</label>
                    </div>

                    <div className="subject">
                        <input type="checkbox" id="history" name="history"/>
                        <label for="history">History</label>
                    </div>

                    <div className="subject">
                        <input type="checkbox" id="biology" name="biology"/>
                        <label for="biology">Biology</label>
                    </div>

                    <div className="subject">
                        <input type="checkbox" id="chemistry" name="chemistry"/>
                        <label for="chemistry">Chemistry</label>
                    </div>

                    <div className="subject">
                        <input type="checkbox" id="physics" name="physics"/>
                        <label for="physics">Physics</label>
                    </div>

                    <div className="subject">
                        <input type="checkbox" id="spanish" name="spanish"/>
                        <label for="spanish">Spanish</label>
                    </div>

                    <div className="subject">
                        <input type="checkbox" id="pe" name="pe"/>
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