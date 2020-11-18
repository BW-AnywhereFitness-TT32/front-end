import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchClientsClasses, fetchCurrentClient } from '../actions'
import { axiosWithAuth } from '../utils/axiosWithAuth'

import ClassTile from './ClassTile'

const Dashboard = (props) => {

    useEffect(() => {
        props.fetchClientsClasses()
        props.fetchCurrentClient()        
    }, [])

    useEffect(() => {
        props.fetchCurrentClient()
    }, [props.isFetching])


    return (
        <div className='container'>
            <div className='shadowBox'>
                <h2>My Classes</h2>
                {props.clientData.classes.length === 0 ? <p>Sign up for a class below!</p> : props.clientData.classes.map((singleClass) => (
                    <ClassTile singleClass={singleClass} key={singleClass.id} />
                ))}       
            </div>
            <div className='shadowBox'>
                <h2>Upcoming Classes</h2>
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
        clientData: state.clients.clientData,
        punchCardData: state.clients.punchCardData,  
    }

}

export default connect(mapStateToProps, { fetchClientsClasses, fetchCurrentClient })(Dashboard)
