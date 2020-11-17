import React from 'react'


const ClassTile = (props) => {
    const { singleClass } = props

    return (
        <div>
            <p>{singleClass.class_name}</p>
        </div>
    )
}

export default ClassTile
