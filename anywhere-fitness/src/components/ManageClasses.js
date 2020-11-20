import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchClientsClasses, deleteClass, toggleFetching } from '../actions/index'

import ClassFormContainer from './ClassFormContainer'


const ManageClasses = (props) => {

    const history = useHistory()

    useEffect(() => {
        props.fetchClientsClasses()
    }, [props.isFetching])

    const editClass = e => {
        e.preventDefault()
        console.log('clicking')
    }

    return (
        <div className='container'>
            <ClassFormContainer />
            <div className='shadowBox'>
                <h3>Manage Classes</h3>  
                {props.classesData && props.classesData.map((singleClass) => (
                    <div className='classTile' key={singleClass.id}>
                        <div className='classTileInfo'>
                            <p><span className='boldText'>{singleClass.class_name}</span> @ {singleClass.location}</p>
                            <p>{singleClass.date} <span className='boldText'>&#9830;</span> {singleClass.time} <span className='boldText'>&#9830;</span> Duration: {singleClass.duration}</p>           
                        </div>
                        <div className='classTileButtons'>
                            <button className='button' onClick={() => {
                                console.log('clicking', singleClass.id)
                                props.toggleFetching(true)
                                props.deleteClass(singleClass.id)
                                }}><span>Delete</span></button>
                            <button className='button' onClick={() => {
                                history.push(`/edit-class/${singleClass.id}`)
                            }}><span>Edit</span></button>
                                
                        </div>
                    </div>
                    // GET attending from classID, display list of attending students
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
        userData: state.clients.userData,
        errorMessage: state.clients.errorMessage,
        punchcardData: state.clients.punchcardData,  
    }

}

export default connect(mapStateToProps, { fetchClientsClasses, deleteClass, toggleFetching })(ManageClasses)