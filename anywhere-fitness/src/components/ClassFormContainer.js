import React, { useState, useEffect } from 'react';
import ClassForm from './ClassForm.js'
import '../App.css';
import axios from 'axios';

const initialFormValues = {
  username: '',
  type: '',
  startTime: '',
  duration: '',
  intensityLevel: '',
  location: '',
  maxClassSize: ''
}

function App() {
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

  const submitForm = () => {
    const newClass = {
      username: formValues.username.trim(),
      type: formValues.type(),
      startTime:formValues.startTime(),
      duration: formValues.duration(),
      intensityLevel: formValues.intensityLevel(),
      location: formValues.location(),
      maxClassSize: formValues.maxClassSize()
    };

    if(!newClass.username || !newClass.type ||!newClass.startTime || !newClass.duration || !newClass.intensityLevel || !newClass.location || !newClass.maxClassSize) return;

    axios
    .post('https://anywhere-fitness-tt32.herokuapp.com/api/classes', newClass)
    .then((res) => {
      // what goes here?
    })
    .catch((err) => {
      console.log('it no work')
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

export default App;
