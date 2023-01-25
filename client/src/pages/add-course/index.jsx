import React from 'react'
import Helmet from "helmet";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import "./index.scss";

 
const SignupSchema = Yup.object().shape({
  imgurl: Yup.string()
    .min(2, 'Too Short!')
    .max(5000, 'Too Long!')
    .required('Required'),
    advanced: Yup.string()
    .min(2, 'Too Short!')
    .max(50000, 'Too Long!')
    .required('Required'),
    capable: Yup.string()
    .min(2, 'Too Short!')
    .max(500000, 'Too Long!')
    .required('Required'),
    imageurl: Yup.string()
    .min(2, 'Too Short!')
    .max(500000, 'Too Long!')
    .required('Required'),
    name: Yup.string()
    .min(2, 'Too Short!')
    .max(500000, 'Too Long!')
    .required('Required'),
  
    username: Yup.string()
    .min(2, 'Too Short!')
    .max(500000, 'Too Long!')
    .required('Required'),
  
    author: Yup.string()
    .min(2, 'Too Short!')
    .max(500000, 'Too Long!')
    .required('Required'),

    price: Yup.number()
    .min(2, 'Too Short!')
    .max(5000000, 'Too Long!')
    .required('Required'),
  
});

const AddCourse = () => {
  return (
    
    <div className='add-page'>
           <Helmet>
          <title>Add Course</title>
          <meta name="description" content="My add page" />
        </Helmet>
        
      <h1>Add Course</h1>
      <Formik
        initialValues={{
          imgurl: "",
          advanced: "",
          capable: "",
          imageurl: "",
          name: "",
          username: "",
          author: "",
          price: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, {resetForm}) => {
            axios.post("http://localhost:8080/courses/", values)
         resetForm()
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field  name="imgurl" placeholder='Enter yout course ...' className={errors.imgurl && touched.imgurl ?   "border-red": null} />
            {errors.imgurl && touched.imgurl ? (
              <div style={{ color: "red" }}>{errors.imgurl}</div>
            ) : null}<br></br><br></br>

            <Field name="advanced" placeholder='Enter yout course ...' className={errors.advanced && touched.advanced ?  "border-red": null} />
            {errors.advanced && touched.advanced ? (
              <div style={{ color: "red" }}>{errors.advanced}</div>
            ) : null}<br></br><br></br>

            <Field name="capable" placeholder='Enter yout course ...' className={errors.capable && touched.capable ? "border-red": null}/>
            {errors.capable && touched.capable ? (
              <div style={{ color: "red" }}>{errors.capable}</div>
            ) : null}<br></br><br></br>

            <Field name="imageurl"  placeholder='Enter yout course ...' className={errors.imageurl && touched.imageurl ? "border-red": null}/>
            {errors.imageurl && touched.imageurl ? (
              <div style={{ color: "red" }}>{errors.imageurl}</div>
            ) : null}<br></br><br></br>

            <Field name="name"  placeholder='Enter yout course ...' className={errors.name && touched.name ? "border-red": null}/>
            {errors.name && touched.name ? (
              <div style={{ color: "red" }}>{errors.name}</div>
            ) : null}<br></br><br></br>

            <Field name="username" placeholder='Enter yout course ...' className={errors.username && touched.username ? "border-red": null}/>
            {errors.username && touched.username ? (
              <div style={{ color: "red" }}>{errors.username}</div>
            ) : null}<br></br><br></br>

            <Field name="author" placeholder='Enter yout course ...' className={errors.author && touched.author ? "border-red": null}/>
            {errors.author && touched.author ? (
              <div style={{ color: "red" }}>{errors.author}</div>
            ) : null}<br></br><br></br>

            <Field name="price" placeholder='Enter yout course ...' className={errors.price && touched.price ? "border-red": null}/>
            {errors.price && touched.price ? (
              <div style={{ color: "red" }}>{errors.price}</div>
            ) : null}<br></br><br></br>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik> 
    </div>
  )
}

export default AddCourse