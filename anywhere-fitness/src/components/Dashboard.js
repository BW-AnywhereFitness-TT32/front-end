import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fetchClientsClasses, fetchCurrentClient, toggleFetching, fetchFilteredClasses } from '../actions'
import { axiosWithAuth } from '../utils/axiosWithAuth'

import ClassTile from './ClassTile'
import PunchcardTile from './PunchcardTile'

const getUserType = userId => {
    switch (userId) {
        case 1: 
            return 'Administrator'
        case 2:
            return 'Instructor'
        case 3: 
            return 'Client'
    }
}

const Dashboard = (props) => {
    const [ selectedValue, setSelectedValue ] = useState(0)
    const history = useHistory()
    const { fetchClientsClasses, fetchCurrentClient, fetchFilteredClasses, toggleFetching } = props

    useEffect(() => {
        fetchClientsClasses()
        fetchCurrentClient()        
    }, [])

    useEffect(() => {
        fetchCurrentClient()
    }, [props.isFetching])

    const handleChange = (e) => {
        e.preventDefault()
        setSelectedValue(`${e.target.name}=${e.target.value}`)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        toggleFetching(true)
        if (selectedValue.slice(-1) == 0) {
            fetchClientsClasses()
        } else {
            fetchFilteredClasses(selectedValue)
        }

    }

    return (
        <div className='container'>
            <h3>{props.userData.username}'s {getUserType(props.userData.role_id)} Dashboard</h3>
            {props.userData.role_id === 2 
                ? <div className='shadowBox'>
                    <h3>Instructor Dashboard</h3>
                    <div style={{ margin: '0 auto' }}>
                        <button className='button' onClick={() => history.push('/manage-punchcards')}><span>Punchcards</span></button>
                        <button className='button' onClick={() => history.push('/manage-classes')}><span>Classes</span></button>
                    </div>
                </div> 
                : null
            }

            <div className='shadowBox'>
                <h3>My Classes</h3>
                {props.userData.classes.length === 0 ? <p>Sign up for a class below!</p> : props.userData.classes.map((singleClass) => (
                    <ClassTile singleClass={singleClass} key={singleClass.id} />
                ))}
                <h3>My Punchcards</h3> 
                {props.punchcardData.length === 0 ? <p>Take classes to earn stars!</p> : props.punchcardData.map((punchcard) => (
                    <PunchcardTile punchcard={punchcard} key={punchcard.id} />
                ))}      
            </div>
            
            <div className='shadowBox'>
                <h3>Upcoming Classes</h3>
                <form>
                    <select name='intensity' onChange={handleChange}>
                        <option value='0'>Intensity Level</option>
                        <option value='1'>Easy</option>
                        <option value='2'>Medium</option>
                        <option value='3'>Hard</option>
                    </select>
                    <button onClick={onSubmit}>Submit</button>
                </form>
                
                {props.classesData && props.classesData.map((singleClass) => (
                    <ClassTile singleClass={singleClass} key={singleClass.class_name} />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.clients.isLoading,
        isFetching: state.clients.isFetching,
        classesData: state.clients.classesData,
        errorMessage: state.clients.errorMessage,
        userData: state.clients.userData,
        punchcardData: state.clients.punchcardData,  
    }

}

export default connect(mapStateToProps, { fetchClientsClasses, fetchCurrentClient, toggleFetching, fetchFilteredClasses })(Dashboard)