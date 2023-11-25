import React from 'react'
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Rating from '@mui/material/Rating';
import testimonials from '../Images/testimonials.png'
import '../Styles/testimonialsStyle.css'


const Testimonials = () => {
    const testimonialsData = [
        {
            id: 1,
            name: "Mahima Negi",
            value:5,
            comment:
            "Manoj Sir, an outstanding science teacher, helped me score 95 in my 10th boards with his clear and engaging teaching style!"
          },
          
        {
          id: 2,
          name: "Pranav Rajput",
          value:4.8,
          comment:
            "Manoj Sir, an institute of unparalleled excellence, sets the standard in the realm of science education.",
        },
     
        {
          id: 3,
          name: "Awanish Mishra",
          value:5,
          comment:
            "Amazing Institute, Highly recommended! The roadmap given by Manoj sir helped me achieve my goal. ",
        },
      ];
      
      const TestimonialSlider = () => {
        const [activeIndex, setActiveIndex] = React.useState(0);
      
        const handlePrev = () => {
          setActiveIndex((prevIndex) =>
            prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
          );
        };
      
        const handleNext = () => {
          setActiveIndex((prevIndex) =>
            prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
          );
        };
      
        return (
          <>
           <h2 style={{color:'#082567', textAlign:'left', marginLeft:'5%'}} > What Others say </h2>
          <a href='/reviews' style={{textDecoration:'none'}} >
          <h4 style={{color:'#4682B4', textAlign:'left', marginLeft:'5%', marginTop:'10px'}} > See More </h4>
              </a>
            <Box sx={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={12} sm={6}>
              <img src={testimonials} id="image-about" alt='Src:Google' title='Src:Google' />
              </Grid>
      
                <Grid item xs={12} sm={6}>
                  <div className="testimonial-slider">
                    <div className="testimonial">
                      <p>{testimonialsData[activeIndex].comment}</p>
                      <Rating name="read-only" value={testimonialsData[activeIndex].value} readOnly />
                      <p className="testimonial-name">
                        - {testimonialsData[activeIndex].name}
                      </p>
                    </div>
                    <div className="slider-controls">
                      <button className="prev-button" onClick={handlePrev}>
                        &#8249;
                      </button>
                      <button className="next-button" onClick={handleNext}>
                        &#8250;
                      </button>
                    </div>
                  </div>
                </Grid>
               
              </Grid>
            </Box>
          </>
        );
      };
      
    return(
        <div>
           <TestimonialSlider />
        </div>
    )
}

export default Testimonials