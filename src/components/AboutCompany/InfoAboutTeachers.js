import React from 'react';
import '../../assets/AboutCompanyCss/InfoAboutTeachers.css'
const InfoAboutTeachers = () => {

  
  return (
    <div className="teacher-profile">
      <div className="teacher-info">
        <h2>¿Comó Contactar con un profesor?</h2>
        <img src={''} alt={`Profile of `} />
        {/* Display teacher's information, videos, and reviews */}
        {/* You can use other React components or HTML elements here */}
        <div class="teacher-reviews">
          <h3>Reviews</h3>
          {/* Display reviews */}
          {/* Example: reviews.map((review, index) => (<div key={index}>{review}</div>)) */}
        </div>
        <div class="teacher-videos">
          <h3>Demo Videos</h3>
          {/* Display demo videos */}
          {/* Example: demoVideos.map((video, index) => (<video key={index} src={video} controls />)) */}
        </div>
        <div class="teacher-schedule">
          <h3>Schedule</h3>
          {/* Display teacher's schedule */}
          {/* Example: schedule.map((slot, index) => (<div key={index}>{slot.day} - {slot.time}</div>)) */}
        </div>
      </div>
      <div class="teacher-interaction">
        {/* Interaction section (messaging, asking questions, etc.) */}
        {/* Example: input fields for messaging, post questions, etc. */}
      </div>
    </div>
  );
};

export default InfoAboutTeachers;
