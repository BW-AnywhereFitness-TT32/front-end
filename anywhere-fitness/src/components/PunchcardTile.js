import React from 'react'
import { connect } from 'react-redux'


const getPunchcardType = punchcardId => {
    switch (punchcardId) {
        case 1:
            return <p className='boldText'>Hot Yoga</p>
        case 2:
            return <p className='boldText'>Weight Training</p>
        case 3:
            return <p className='boldText'>RIPPED</p>
        case 4:
            return <p className='boldText'>Elite Endurance</p>
        case 5:
            return <p className='boldText'>Booty Blaster</p>
        case 6:    
            return <p className='boldText'>Water Polo</p>                  
        default:
            return <p className='boldText'>Uncategorized</p>
    }
}

const renderStars = attendedNum => {
    let starString = ''
    for (let i = 0; i < attendedNum; i++) {
        starString+='⭐️'
    }
    return <p>{starString}</p>
}



const PunchcardTile = (props) => {
    const { punchcard } = props

    return (
        <div className='classTile'>
            {getPunchcardType(punchcard.type_id)}
            {renderStars(punchcard.classes_attended)}
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

export default connect(mapStateToProps, { })(PunchcardTile)
