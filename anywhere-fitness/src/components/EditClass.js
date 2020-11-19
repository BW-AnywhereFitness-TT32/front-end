import React from 'react'
import { useParams } from 'react-router-dom'
import EditClassContainer from './EditClassContainer'

const EditClass = () => {
    const userId = useParams()
    console.log('userId: ', userId)

    return (
        <div className='container'>
            <EditClassContainer userId={userId} />
        </div>
    )
}

export default EditClass
