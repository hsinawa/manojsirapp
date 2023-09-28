import { CircularProgress } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { GetAllReviewAction } from '../Actions/reviewAction';
import {GetAllReviewReducer} from '../Reducers/reviewReducer'
import textData from "../Static/staticText.json";


//MUI Icon
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const AdminReviewScreen = () => {

    const dispatch = useDispatch();

    useEffect( ()=>{
dispatch(GetAllReviewAction())
    } , [dispatch] )

    const {loadingReviews,reviews,errorReviews} = useSelector( state=>state.GetAllReviewReducer )
var cnt=0;
    return(
        <div>
          {loadingReviews&&(<CircularProgress/>)}
          {errorReviews&&(<h3 style={{color:'red'}} >OOPS! Something Went Wrong</h3>)}
          <br/><br/>
          <table class="table">
        <thead>
          {textData?.Reviews?.admin?.table?.map((j) => {
            return <th> {j} </th>;
          })}
        </thead>
        <tbody>
          {reviews &&
            reviews.map((i) => {
                return (
                  <tr>
                    <td
                      data-label={`${textData?.Reviews?.admin?.table[0]}`}
                    >
                      {" "}
                      {++cnt}{" "}
                    </td>
                    <td
                      data-label={`${textData?.Reviews?.admin?.table[1]}`}
                    >
                      {" "}
                      {i.name}{" "}
                    </td>
                    <td
                      data-label={`${textData?.Reviews?.admin?.table[2]}`}
                    >
                       {i.isValid ? (
                        <CheckIcon style={{ color: "green" }} />
                      ) : (
                        <ClearIcon style={{ color: "red" }} />
                      )}
                    </td>
                  
                    <td
                      data-label={`${textData?.Reviews?.admin?.table[3]}`}
                    >
                     { new Date(`${i.createdAt}`)?.toString()?.substr(0,15) }
                    </td>
                 
                    
                    <td
                      data-label={`${textData.Students.Table.tableEntries[4]}`}
                    ><a href={`/reviewdescription/${i._id}`}  > 
                      
                       Edit Here <RemoveRedEyeIcon style={{verticalAlign:'-6px'}} />
                        </a>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
        </div>
    )
}

export default AdminReviewScreen