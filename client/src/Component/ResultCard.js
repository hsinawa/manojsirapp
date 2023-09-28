import React from 'react';
import '../Styles/testimonialsStyle.css';

//MUI
import Rating from '@mui/material/Rating';

const ReviewCard = ({i}) => {
    return(
        <div  >
              <div className="testimonial-slider" style={{width:'350px', marginLeft:'auto', marginRight:'auto'}}  >
                    <div className="testimonial"  >
                      <p style={{height:'100px', textAlign:'center', overflow:'auto'}} > {i.comment} </p>
                      <Rating name="read-only" value={i?.rating} readOnly />
                      <p className="testimonial-name">
                        - {i.name}
                      </p>
                      <p style={{color:'#909090'}} >
                          {i.schoolName}
                      </p>
                    </div>
                
                  </div>
        </div>
    )
}

export default ReviewCard