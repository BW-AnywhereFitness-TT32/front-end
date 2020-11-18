import React from 'react';

export default function ClassForm(props){
  // props for ClassForm
  const { values, update, submit } = props;

  const onChange = evt => {
    const { name, value } = evt.target;
    update(name, value);
 }

 const onSubmit = evt => {
   evt.preventDefault();
   submit();
}

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>

        <label>Username
          <input
          type='text'
          name='username'
          onChange={onChange}
          value={values.username}
          placeholder='johndoe'
          maxLength='12'
          ></input>
        </label>

        <label>Type
          <select name='type' value={values.type} onChange={onChange}>
            <option value=''></option>
            <option value='1'>Hot Yoga</option>
            <option value='2'>Weight Training</option>
            <option value='3'>RIPPED</option>
            <option value='4'>Elite Endurance</option>
            <option value='5'>Booty Blaster</option>
            <option value='6'>Water Polo</option>
          </select>
        </label>

        <label>Start Time
          <select name='startTime' value={values.startTime} onChange={onChange}>
            <option value=''></option>
            <option value=''>7:00am</option>
            <option value=''>8:00am</option>
            <option value=''>9:00am</option>
            <option value=''>10:00am</option>
            <option value=''>11:00am</option>
          </select>
        </label>

        <label>Duration
          <select name='duration' value={values.duration} onChange ={onChange}>
          <option value=''></option>
          <option value=''>1 Hour</option>
          <option value=''>2 Hours</option>
          <option value=''>3 Hours</option>
          </select>
        </label>

        <label>Intensity Level
          <select name='intensityLevel' value={values.intensityLevel} onChange={onChange}>
            <option value=''></option>
            <option value=''>Beginner</option>
            <option value=''>Intermediate</option>
            <option value=''>Advanced</option>
            <option value=''>Pro</option>
          </select>
        </label>

        <label>Location
          <select name='location' value={values.location} onChange={onChange}>
            <option value=''></option>
            <option value=''>Los Angeles</option>
            <option value=''>Chicago</option>
            <option value=''>New York City</option>
            <option value=''>Seattle</option>
          </select>
        </label>

        <label>Maximum Class Size
          <select name='maxClassSize' value={values.maxClassSize} onChange={onChange}>
            <option value=''></option>
            <option value=''>5</option>
            <option value=''>10</option>
            <option value=''>15</option>
            <option value=''>20</option>
            <option value=''>25</option>
          </select>
        </label>


        <div className='submit'>
          <button>Submit</button>
        </div>

      </div>

    </form>
  )
}
