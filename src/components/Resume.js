import React from 'react'
import resume from '../assets/Ethan-Resnik-Resume.pdf'

const Resume = () => {
    return (
        <>
            <iframe src={resume + '#view=FitH'} title="Ethan Resnik Resume" id="resume"></iframe>
        </>
    )
}

export default Resume