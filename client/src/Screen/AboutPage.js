import React from 'react'


//Static Files
import textData from '../Static/staticText.json';


const DesignTexts = {
    Headers:{
        float:'left',
        marginLeft:'3%'
    }
}

const AboutUs = () => {
    return(
        <React.Fragment>
            <h1
            style={DesignTexts.Headers}
            > {textData.about.name} </h1>
        </React.Fragment>
    )
}

export default AboutUs