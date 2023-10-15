import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TeacherHW = () => {

    const navigate = useNavigate(); 

    return ( 
        <div className="teachers box">
            <h1>Homeworks</h1>
            <div className="table-div">
            <table>
                <thead>
                <tr className="th">
                    <th>Subject</th>
                    <th>Topic</th>
                    <th>Date</th>
                </tr>
                </thead>

                <tbody>

                {/* {students && students.slice().reverse().map((student, index) => (
                    <tr key={index}>
                        <td>Math</td>
                        <td>Limits</td>
                        <td>13-03-2023</td>
                    </tr>
                 ))} */}
                 
                </tbody>

                <button onClick={()=>{navigate("/add/hw")}}>New Homework</button>
            </table>
            </div>

        </div>
     );
}
 
export default TeacherHW;