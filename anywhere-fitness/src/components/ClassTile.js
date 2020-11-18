import React from 'react'
import { connect } from 'react-redux'
import { toggleReserveClientsClasses, toggleFetching } from '../actions'


const ClassTile = (props) => {
    const { singleClass } = props


    return (
        <div className='classTile'>
            <div className='classTileInfo'>
                <p><span className='boldText'>{singleClass.class_name}</span> @ {singleClass.location}</p>
                <p>{singleClass.date} <span className='boldText'>&#9830;</span> {singleClass.time} <span className='boldText'>&#9830;</span> Duration: {singleClass.duration}</p>           
            </div>
            <div>
                <button className='button' onClick={() => {
                    props.toggleFetching(true)
                    props.toggleReserveClientsClasses(singleClass)
            }}><span>Add/Remove</span></button>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        isLoading: state.clients.isLoading,
        classesData: state.clients.classesData,
        userData: state.clients.userData,
        errorMessage: state.clients.errorMessage,
        punchcardData: state.clients.punchcardData,  
    }

}

export default connect(mapStateToProps, { toggleReserveClientsClasses, toggleFetching })(ClassTile)