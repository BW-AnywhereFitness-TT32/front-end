import React, { useState, useEffect } from 'react';
import ClassForm from './ClassForm.js'
import '../App.css';
import { connect } from 'react-redux'
import { toggleFetching } from '../actions/index'
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';

const initialFormValues = {
  class_name: '',
  type_id: '',
  date: '',
  time: '',      
  duration: '',
  intensity: '',
  location: '',
  capacity: ''
}

const App = (props) => {
  const [users, setUsers] = useState([])

  // State holds values of the form
  const [formValues, setFormValues] = useState(initialFormValues);

  // Update form function
  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  }

  const submitForm = e => {
    const newClass = {
      class_name: formValues.class_name.trim(),
      type_id: formValues.type_id,
      date: formValues.date,
      time: formValues.time,      
      duration: formValues.duration,
      intensity: formValues.intensity,
      location: formValues.location,
      capacity: formValues.capacity
    };

    if(!newClass.class_name || !newClass.type_id ||!newClass.time || !newClass.duration || !newClass.intensity || !newClass.location || !newClass.capacity) return;

    axiosWithAuth()
      .post('/classes', newClass)
      .then((res) => {
        console.log(res.data)
        props.toggleFetching(false)
        setFormValues(initialFormValues)
      })
      .catch((err) => {
        console.log(err.message)
      })
  };

  return (
    <div className="shadowBox">
      <h3>Create a New Class</h3>
      <p>Don't bother, it doesn't work yet</p>
      <ClassForm
      values={formValues}
      update={updateForm}
      submit={submitForm}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
      isLoading: state.clients.isLoading,
      isFetching: state.clients.isFetching,
      classesData: state.clients.classesData,
      userData: state.clients.userData,
      errorMessage: state.clients.errorMessage,
      punchcardData: state.clients.punchcardData,  
  }

}

export default connect(mapStateToProps, { toggleFetching })(App)