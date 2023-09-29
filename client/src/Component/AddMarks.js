import React, { useState } from 'react';

const AddResultsTest = ( {i} ) =>{
    const [data, setData] = useState(
        i[0]?.students
    );
    const handleMarksChange = (event, index) => {
        const { name, value } = event.target;
        const updatedData = [...data];
        updatedData[index] = { ...updatedData[index], [name]: value };
        setData(updatedData);
      };
 
     
        return(
            <div>
        <div className="marks-container">
      <h2 className="marks-title">Marks Input</h2>
      <table className="marks-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Marks Scored</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person, index) => (
            <tr key={index} className="marks-row">
              <td>{person.NameOfStudent}</td>
              <td>
                <input
                  type="number"
                  name="marksScored"
                  value={person.MarksScored}
                  onChange={(e) => handleMarksChange(e, index)}
                  className="marks-input"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   
            </div>
        )
    }

    export default AddResultsTest;