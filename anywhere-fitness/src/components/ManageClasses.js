import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchClientsClasses, deleteClass, toggleFetching } from '../actions/index'

import ClassFormContainer from './ClassFormContainer'


const ManageClasses = (props) => {

    useEffect(() => {
        props.fetchClientsClasses()
    }, [props.isFetching])

    return (
        <div className='container'>
            <div className='shadowBox'>
                <h3>Manage Classes</h3>  
                {props.classesData && props.classesData.map((singleClass) => (
                    <div className='classTile' key={singleClass.id}>
                        <div className='classTileInfo'>
                            <p><span className='boldText'>{singleClass.class_name}</span> @ {singleClass.location}</p>
                            <p>{singleClass.date} <span className='boldText'>&#9830;</span> {singleClass.time} <span className='boldText'>&#9830;</span> Duration: {singleClass.duration}</p>           
                        </div>
                        <div>
                            <button className='button' onClick={() => {
                                props.toggleFetching(true)
                                props.deleteClass(singleClass.id)
                                }}><span>Delete</span></button>
                        </div>
                    </div>
                    // GET attending from classID, display list of attending students
                ))}         
            </div>
            <ClassFormContainer />
            <div className='shadowBox'>
                <p>hi!</p>
                <p>hi!</p>
                <p>hi!</p>

                <p>hi!</p>

                <p>hi!</p>

                <p>hi!</p>

                <p>hi!</p>

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
        errorMessage: state.clients.errorMessage,
        punchcardData: state.clients.punchcardData,  
    }

}

export default connect(mapStateToProps, { fetchClientsClasses, deleteClass, toggleFetching })(ManageClasses)