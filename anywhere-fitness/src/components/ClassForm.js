import React from 'react';
import { connect } from 'react-redux'
import { toggleFetching } from '../actions/index'



const ClassForm = (props) => {
  // props for ClassForm
  const { values, update, submit } = props;

  const onChange = evt => {
    const { name, value } = evt.target;
    update(name, value);
 }

 const onSubmit = evt => {
   evt.preventDefault();
   props.toggleFetching(true)
   submit();
}

  return (
    <form onSubmit={onSubmit}>
        <label><p>Class Name</p>
          <input
          type='text'
          name='class_name'
          onChange={onChange}
          value={values.class_name}
          placeholder='Weights with Whitney'
          ></input>
        </label>

        <label><p>Type</p>
          <select name='type_id' value={values.type_id} onChange={onChange}>
              <option value=''></option>
              <option value='1'>Hot Yoga</option>
              <option value='2'>Weight Training</option>
              <option value='3'>RIPPED</option>
              <option value='4'>Elite Endurance</option>
              <option value='5'>Booty Blaster</option>
              <option value='6'>Water Polo</option>
          </select>
        </label>

        <label><p>Date</p>
          <select name='date' value={values.date} onChange ={onChange}>
            <option value=''></option>
            <option value='2020-11-20'>Nov 20, 2020</option>
            <option value='2020-11-21'>Nov 21, 2020</option>
            <option value='2020-11-22'>Nov 22, 2020</option>
            <option value='2020-11-23'>Nov 23, 2020</option>
            <option value='2020-11-24'>Nov 24, 2020</option>
            <option value='2020-11-25'>Nov 25, 2020</option>
            <option value='2020-11-26'>Nov 26, 2020</option>

          </select>
        </label>

        <label><p>Start Time</p>
          <select name='time' value={values.time} onChange={onChange}>
            <option value=''></option>
            <option value='07:00'>7:00am</option>
            <option value='08:00'>8:00am</option>
            <option value='09:00'>9:00am</option>
            <option value='10:00'>10:00am</option>
            <option value='11:00'>11:00am</option>
            <option value='12:00'>12:00pm</option>
            <option value='13:00'>1:00pm</option>
            <option value='14:00'>2:00pm</option>
            <option value='15:00'>3:00pm</option>
            <option value='16:00'>4:00pm</option>
          </select>
        </label>

        <label><p>Duration</p>
          <select name='duration' value={values.duration} onChange ={onChange}>
          <option value=''></option>
            <option value='1 Hour'>1 Hour</option>
            <option value='2 Hours'>2 Hours</option>
            <option value='3 Hours'>3 Hours</option>
          </select>
        </label>

        <label><p>Intensity Level</p>
          <select name='intensity' value={values.intensity} onChange={onChange}>
            <option value=''></option>
            <option value='1'>Beginner</option>
            <option value='2'>Intermediate</option>
            <option value='3'>Advanced</option>
          </select>
        </label>

        <label><p>Location</p>
          <select name='location' value={values.location} onChange={onChange}>
            <option value=''></option>
            <option value='East Park'>East Park</option>
            <option value='The Nations Yard'>The Nations Yard</option>
            <option value='SoBro Studio'>SoBro Studio</option>
            <option value='Percy Priest Lake'>Percy Priest Lake</option>
          </select>
        </label>

        <label><p>Maximum Class Size</p>
          <select name='capacity' value={values.capacity} onChange={onChange}>
            <option value=''></option>
            <option value='5'>5</option>
            <option value='10'>10</option>
            <option value='15'>15</option>
            <option value='20'>20</option>
            <option value='25'>25</option>
          </select>
        </label>


        <button className='button'><span>Submit</span></button>

    </form>
  )
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

export default connect(mapStateToProps, { toggleFetching })(ClassForm)