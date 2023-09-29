import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from "react-redux";
import {GetTestDescriptionAction} from '../Actions/testAction'

//Static
import '../Styles/Test.css'

const TestDescriptionScreen = () => {

    const {testid} = useParams()
   
    const dispatch = useDispatch();

    useEffect( ()=>{
        dispatch(GetTestDescriptionAction({testid}))
    } ,[dispatch] )

    return(
        <div>
            <br/>
            <div className="test-description">
      <h2 className="title">Test Description</h2>
      <div className="gridtest">
        <div className="label">Name of Test:</div>
        <div className="value">Sample Test</div>

        <div className="label">Date:</div>
        <div className="value">October 15, 2023</div>

        <div className="label">Subject:</div>
        <div className="value">Mathematics</div>

        <div className="label">Additional Comments:</div>
        <div className="value">
          This is a practice test f.
        </div>
      </div>
    </div>
        </div>
    )
}

export default TestDescriptionScreen