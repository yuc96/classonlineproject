import React, { useState } from 'react';
import Welcome from './WelcomeApp';
import EasyFeatures from './EasyFeatures';
import InfoAboutTeachers from './InfoAboutTeachers';

const AboutUs =()=>{
    return(
        <>
        <Welcome/>
        <EasyFeatures/>
        <InfoAboutTeachers/>
        </>
    )
}
export default AboutUs;