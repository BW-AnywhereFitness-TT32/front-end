import React from 'react'
import { useParams } from 'react-router-dom'
import EditClassContainer from './EditClassContainer'

const EditClass = () => {
    const classId = useParams()
    console.log('classId: ', classId)

    return (
        <div className='container'>
            <EditClassContainer classId={classId} />
        </div>
    )
}

export default EditClass
