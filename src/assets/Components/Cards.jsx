import React, { useState } from 'react'
import Card from "./Card"


const Cards =({courses, category}) => {
  let allCourses = [];
  

  const [likedCourses, setLikedCourses] = useState([]);


  const getCourses = () =>  {
   
    if(category === "All") {
      Object.values(courses).forEach( (array) =>{
        array.forEach((courseData) => {
          allCourses.push(courseData);
        })
        
      })
      return allCourses;
    }
    else{
      return courses[category];
    }

}


  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {
        getCourses().map( (course) => {
          return <Card key={course.id} 
          course = {course}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
          />
        })
      }
    </div>
  )
}

export default Cards
