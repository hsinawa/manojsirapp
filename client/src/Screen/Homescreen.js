import React from 'react'
import '../Styles/homescreen.css';
import TypingText from '../Component/typingText';

//Static Files
import background from '../Images/bg.gif';
import textData from '../Static/staticText.json'
import AboutUs from './AboutPage';
import DataTablePage from './dataTablePage';
import ContactUsScreen from '../Component/contactScree';
import Testimonials from '../Component/testimonials';



const HomeScreen = () => {
    return(
        <React.Fragment>
           <div class="container">
  <img src={background} alt="Background Image" className='bgiimage' />
 <h1 className='centered' > Concept Classes </h1>
<TypingText text={textData.slogan}  />
</div>
<br/><br/>
<AboutUs />
<br/><br/>
<DataTablePage />
<br/><br/><br/><br/>
<Testimonials/>
<br/><br/>
<ContactUsScreen />
        </React.Fragment>
    )
}

export default HomeScreen