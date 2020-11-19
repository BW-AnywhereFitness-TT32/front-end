import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchClientsClasses, fetchAllUsers, toggleFetching } from '../actions/index'
import { axiosWithAuth } from '../utils/axiosWithAuth'

import PunchcardTile from './PunchcardTile'

const ManagePunchcards = (props) => {
    const { isFetching, fetchAllUsers } = props

    const [userPunch, setUserPunch] = useState([])
    

    useEffect(() => {
        fetchAllUsers()
    }, [isFetching])

    console.log('all users', props.allUsers)

    useEffect(() => {
        props.allUsers.map(user => {
            generatePunchcards(user)                  
        })
    }, [props.allUsers])

    const generatePunchcards = singleUser => {
        axiosWithAuth() 
            .get(`/users/${singleUser.id}/punchcards`)
            .then(res => {
                console.log(res.data)
                setUserPunch([ ...userPunch, res.data ])
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
    }

}

export default connect(mapStateToProps, { fetchClientsClasses, fetchAllUsers, toggleFetching })(ManagePunchcards)