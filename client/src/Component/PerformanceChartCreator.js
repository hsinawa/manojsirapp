import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllTestGraphAction } from "../Actions/testAction";
import { GetAllTestReducer } from "../Reducers/testReducer";
import textData from "../Static/staticText.json";

//MUI
import Alert from "@mui/material/Alert";

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

  const lables = [];
  const data = [];
  useEffect(() => {
    dispatch(GetAllTestGraphAction({ stand }));
  }, [dispatch]);

  const { loading, tests, error } = useSelector(
    (state) => state.GetAllTestReducer
  );
  console.log(tests);
  if (tests && tests?.length > 0) {
    tests.map((i) => {
      lables.push(i.name);
    });

    tests.map((i) => {
      i?.students?.map((j) => {
        if (j.iDofStudent == studentid) {
          data.push(j?.PercentageObtained);
        }
      });
    });
  }

  console.log(lables, "-----", data);

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
    </div>
  );
};

export default PerformnaceChart;
