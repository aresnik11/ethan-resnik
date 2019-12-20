import React from 'react'
import resume from '../Ethan-Resnik-Resume.pdf'

const Contact = () => {
    return (
        <div>
            <h2 className="heading">Contact</h2>
            <iframe src={resume} title="Ethan Resnik Resume"></iframe>
        </div>
    )
}

export default Contact