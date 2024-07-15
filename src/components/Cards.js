import React, { useState } from 'react';
import Card from './Card';
const Cards = (props) => {

  let category = props.category;

  let courses = props.courses;
  console.log("prinitng data");
  console.log(courses);

  const [likedCourses, setLikedCourses] = useState([]);

  function getCourses() {
    if(category === "All"){
      let allCourses = [];
      Object.values(courses).forEach( array =>{
          array.forEach(courseData => {
              allCourses.push(courseData);
          })
      })
  
      return allCourses;

    }
    else{
      // yahan pe sirf specif category ka data send krenge , as courses has 4 arrays
      return courses[category];
    }

  }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {
            getCourses().map( (course) => {

                return <Card key={course.id} 
                course={course}
                likedCourses={likedCourses}
                setLikedCourses={setLikedCourses}  
                />
            } )
        }
    </div>




  )
}

export default Cards;