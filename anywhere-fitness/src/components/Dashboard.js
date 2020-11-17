import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchClasses } from '../actions/coursesActions'

import ClassTile from './ClassTile'

const Dashboard = (props) => {

    useEffect(() => {
        props.fetchClasses()
    }, [])

    return (
        <div className='container'>
            <div className='shadowBox'>
                <h2>Personalized Content</h2>
                <p>This section will be conditionally rendered based on the user's id type</p>
                <p>Users will see classes they've signed up for and instructors will see their offered classes</p>
            </div>
            <div className='shadowBox'>
                <h2>Upcoming Classes</h2>
                {props.classesData.map((singleClass) => (
                    <ClassTile singleClass={singleClass} key={singleClass.class_name} />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        classesData: state.classesData,
        errorMessage: state.errorMessage
    }

}

export default connect(mapStateToProps, { fetchClasses })(Dashboard)
