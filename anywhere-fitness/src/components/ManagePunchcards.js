import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchClientsClasses, fetchAllUsers, toggleFetching, generateAllPunchcards } from '../actions/index'
import { axiosWithAuth } from '../utils/axiosWithAuth'

import PunchcardTile from './PunchcardTile'

const initialFormValues = {
    name: '',
    activityType: ''
}

const initialStatusMessage = {
    name: '',
    message: ''
}


const ManagePunchcards = (props) => {
    const { isFetching, fetchAllUsers, generateAllPunchcards } = props    
    const [formValues, setFormValues] = useState(initialFormValues)
    const [statusMessage, setStatusMessage] = useState(initialStatusMessage)
 
    useEffect(() => {
        fetchAllUsers()
    }, [isFetching])


    useEffect(() => {
        props.allUsers.map(user => {
            generateAllPunchcards(user)                  
        })
    }, [props.allUsers])

    const handleChange = (e) => {
        e.preventDefault()
        setFormValues({
            name: e.target.name,
            activityType: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log('inside submit', formValues.name, formValues.activityType)
        console.log(`/users/${formValues.name}/punchcards/${formValues.activityType}/add`)
        axiosWithAuth()
            .put(`/users/${formValues.name}/punchcards/${formValues.activityType}/add`)
            .then(res => {
                console.log(res.data)
                setStatusMessage({name: formValues.name, message: `Success! Classes Attended: ${res.data.classes_attended}`})
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div className='container'>
            <div className='shadowBox'>
                <h3>Manage Punchcards</h3>
            {/* GET all users, then for each user GET all punchcards */}
            {/* Display punchcards per user with title */}
            {/* Add form at the bottom that allows instructor to add a punch to a type of activity for a given user ID */}
                {/* {props.allPunchcards.forEach(function(obj, index) {
                    for (var key in obj) {
                        console.log('Mapping over', key, obj[key])
                        obj[key].map(punch => (
                            <PunchcardTile punchcard={punch} key={punch.id} />
                        ))
                    }
                    
                })} */}
                {statusMessage === '' ? null : <p>{statusMessage.message}</p> }
                {props.allUsers.map(user => {
                    return (
                        <div key={user.id}>
                            <h4>{user.username}</h4>
                            <form>
                                <select name={user.id} onChange={handleChange}>
                                    <option value='1'>Hot Yoga</option>
                                    <option value='2'>Weight Training</option>
                                    <option value='3'>RIPPED</option>
                                    <option value='4'>Elite Endurance</option>

                                    <option value='5'>Booty Blaster</option>

                                    <option value='6'>Water Polo</option>
                                </select>
                                <button className='button' onClick={onSubmit}><span>Add Punch</span></button>
                            </form>
                            
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.clients.isLoading,
        isFetching: state.clients.isFetching,
        classesData: state.clients.classesData,
        userData: state.clients.userData,
        allUsers: state.clients.allUsers,
        errorMessage: state.clients.errorMessage,
        punchcardData: state.clients.punchcardData,  
        allPunchcards: state.clients.allPunchcards
    }

}

export default connect(mapStateToProps, { fetchClientsClasses, fetchAllUsers, toggleFetching, generateAllPunchcards })(ManagePunchcards)