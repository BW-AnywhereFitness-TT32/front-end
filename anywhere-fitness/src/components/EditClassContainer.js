import React, { useState, useEffect } from 'react';
import ClassForm from './ClassForm.js'
import { useHistory } from 'react-router-dom'
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

const EditClassContainer = (props) => {
  const [users, setUsers] = useState([])

  // State holds values of the form
  const [formValues, setFormValues] = useState(initialFormValues);

    const { userId } = props;
    const history = useHistory()

    useEffect(() => {
        axiosWithAuth()
        .get(`/classes/${userId.id}`)
        .then(res => {
            setFormValues({
                ...formValues,
                class_name: res.data.class_name
            })
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

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
      .put(`/classes/${userId.id}`, newClass)
      .then((res) => {
        console.log(res.data)
        history.push('/manage-classes')
      })
      .catch((err) => {
        console.log(err.message)
      })
  };

  return (
    <div className="shadowBox">
      <h3>Edit Class</h3>
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

export default connect(mapStateToProps, { toggleFetching })(EditClassContainer)