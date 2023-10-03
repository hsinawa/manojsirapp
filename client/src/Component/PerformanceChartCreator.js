import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllTestGraphAction } from "../Actions/testAction";
import { GetAllTestReducer } from "../Reducers/testReducer";
import textData from "../Static/staticText.json";

//MUI
import Alert from "@mui/material/Alert";

//Chart JS
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';


  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
 

const Styles = {
  Box: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10px",
  },
};

const PerformnaceChart = () => {
  const dispatch = useDispatch();
  const student = JSON.parse(localStorage.getItem("student"));
  const studentid = student?._id?.toString();
  const stand = student?.standard?.toString();

  const lables2 = ['Origin'];
  const data2 = [0];
  useEffect(() => {
    dispatch(GetAllTestGraphAction({ stand }));
  }, [dispatch]);

  const { loading, tests, error } = useSelector(
    (state) => state.GetAllTestReducer
  );
  
  if (tests && tests?.length > 0) {
    tests.map((i) => {
      lables2.push(i.name);
    });

    tests.map((i) => {
      i?.students?.map((j) => {
        if (j.iDofStudent == studentid) {
          data2.push(j?.PercentageObtained);
        }
      });
    });
  }

  const labels = lables2;
   const data = {
    labels,
        datasets: [
          {
            label: 'Percentage Obtained',
            data: data2,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          }
          
        ],
      };

  return (
    <div>
      {loading && <CircularProgress />}
      {error && <Alert severity="error"> {textData.Messages.error} </Alert>}
      {tests && tests.length == 0 && (
        <Alert severity="info" style={Styles.Box}>
          {" "}
          {textData.Messages.testMessage}{" "}
        </Alert>
      )}
      <br />
{tests&&tests.length>0&&(
<section style={Styles.Box} >
<Line options={options} data={data} />
</section>
)}
      
    </div>
  );
};

export default PerformnaceChart;
