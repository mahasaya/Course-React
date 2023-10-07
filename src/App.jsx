import { useState } from 'react';
import './App.css'
import React from 'react'
import { toast } from "react-toastify";
import { apiUrl, filterData } from "./data";
import Navbar from "./assets/Components/Navbar";
import Filter  from "./assets/Components/Filter";
import Cards from "./assets/Components/Cards";
import { useEffect } from 'react';
import Spinner from "./assets/Components/Spinner"

const App = () => {

  const [courses, setCourses] = useState(null);

  useEffect ( () => {
    const fetchData = async() => {
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();
        //save data into a variable
        
        setCourses (output.data); 
      }
      catch(error){
        toast.error("something went wroung")
      }
    }
    fetchData();
  }, []);

  

  return (
    <div className='min-h-screen flex flex-col'>
      
      <div>
        <Navbar/>
      </div>
      

      <div className='bg-blue-900'>
        
        <div>
          <Filter
            filterData = {filterData}
          />
        </div>
     

        <div className='w-11/12 max-w-[1200px] 
          mx-auto flex justify-center items-center min-h-[50vh]'>
          {
            courses === null ? (
              <Spinner/>
              ) :(<Cards 
              courses={courses} 
            />)
          }
        </div>
      </div>
     
      

    </div>
  );
};

export default App
