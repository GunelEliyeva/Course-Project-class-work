import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/about'
import Course from '../pages/course'
import Home from '../pages/home';
import Element from '../pages/element';
import News from '../pages/news';
import Contact from '../pages/contact';
import AddCourse from '../pages/add-course';

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/add'  element={<AddCourse/>}/>
            <Route path='/'  element={<Home/>}/>
            <Route path='/'  element={<About/>}/>
            <Route path='/'  element={<Course/>}/>
            <Route path='/'  element={<Element/>}/>
            <Route path='/'  element={<News/>}/>
            <Route path='/'  element={<Contact/>}/>

        </Routes>
    </div>
  )
}

export default Routing