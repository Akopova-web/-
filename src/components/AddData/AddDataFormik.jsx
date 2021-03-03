//Добавление строки в таблицу с валидацией и использованием библиотеки Formik
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import './AddData.css';

export const SignupForm = (props) => {
  const toggleDisplay = () => {
    let addingForm = document.querySelector('.form_block');
    addingForm.classList.toggle('open');
  }

  const formik = useFormik({
    initialValues: {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    },
    validationSchema: Yup.object({
      id: Yup.number()
        .max(3, 'Must be 3 symbols or less')
        .required('Required'),
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      phone: Yup.number()
        .required('Required')
    }),
    onSubmit: values => {
      props.addNewPerson(values);
    }
  });
  return (
    <div className="form_block">
      <button className="addButton" onClick={toggleDisplay}>Add person</button>
      <form onSubmit={formik.handleSubmit} className="form">
        <div className="form_element">
          <input id="input_id"
            onChange={formik.handleChange}
            name="id"
            placeholder={"Id"}
            value={formik.values.id}
            onBlur={formik.handleBlur}>
          </input>
        </div>
        {formik.touched.id && formik.errors.id
          ? <span>{formik.errors.id}</span>
          : null}
        <div>
          <input
            id="input_firstName"
            onChange={formik.handleChange}
            name="firstName"
            placeholder={"FirstName"}
            value={formik.values.firstName}
            onBlur={formik.handleBlur}>
          </input>
        </div>
        {formik.touched.firstName && formik.errors.firstName ? (
          <span>{formik.errors.firstName}</span>
        ) : null}
        <div>
          <input
            id="input_lastName"
            onChange={formik.handleChange}
            name="lastName"
            placeholder={"LastName"}
            value={formik.values.lastName}
            onBlur={formik.handleBlur}>
          </input>
        </div>
        {formik.touched.lastName && formik.errors.lastName ? (
          <span>{formik.errors.lastName}</span>
        ) : null}
        <div>
          <input
            id="input_email"
            onChange={formik.handleChange}
            name="email"
            placeholder={"Email"}
            type="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}>
          </input>
        </div>
        {formik.touched.email && formik.errors.email ? (
          <span>{formik.errors.email}</span>
        ) : null}
        <div>
          <input
            id="input_phone"
            onChange={formik.handleChange}
            name="phone"
            placeholder={"Phone"}
            value={formik.values.phone}
            onBlur={formik.handleBlur}>
          </input>
        </div>
        {formik.touched.phone && formik.errors.phone ? (
          <span>{formik.errors.phone}</span>
        ) : null}
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};