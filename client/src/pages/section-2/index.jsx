import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./index.scss";
import { useParams } from 'react-router-dom';


const SectionTwo = () => {
    const [course, setCourse] = useState([]);
    const { _id } = useParams();
  
    const getData = async () => {
      let data = await axios.get("http://localhost:8080/courses");
      setCourse(await data.data);
    };
    useEffect(() => {
      getData();
    }, []);
  
    const handleSort = () => {
      axios.get("http://localhost:8080/courses").then((data) => {
        let sort = data.data.sort((a, b) => Number(a.price) - Number(b.price));
        setCourse([...sort]);
      });
    };
  
    const misoutSort = () => {
      axios.get("http://localhost:8080/courses").then((data) => {
        let sort = data.data.sort((a, b) => Number(b.price) - Number(a.price));
        setCourse([...sort]);
      });
    };
  
    // const handleDelete = async (_id) => {
    //  await axios.delete(`http://localhost:8080/courses/${_id}`)
    //  let res=await a
    // };
  
    return (
      <div id="section-2">
        <div className='bos'></div>
        <h1>Popular Courses</h1>
      
        <div className="section2-add">
        
          <button onClick={() => misoutSort()} className="btn-max">max to min</button>
          <button onClick={() => handleSort()} className="btn-min">min to max</button>
        </div>
  
        <div className="map-course">
          
          {course.map((element) => {
            return (
              <div className="all">
                  <div className="card">
                    <div className="card-img">
                      <img src={element.imgurl} alt="" />
                    </div>
                    <div className="cardtext">
                      <h3>{element.advanced}</h3>
                      <h4>{element.capable}</h4>
                    </div>
                    <div className='text-foter'>
                      <img src={element.imageurl}/>
                      <div> 
                        <span>{element.name}</span>
                        <span className='span'>{element.username}</span>
                        <span className='author'>{element.author}</span>
                      </div>
                      <div className='qiymet'><h5>{element.price}</h5></div>

                    </div>
                  </div>
                    <div >
                      <button className="delete-btn" /*onClick={() => handleDelete()}*/>Delete</button>
                    </div>
              </div>
            );
          })}

        </div>
      </div>
  
)}

export default SectionTwo