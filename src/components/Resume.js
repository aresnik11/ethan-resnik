import React from 'react'
import resume from '../assets/Ethan-Resnik-Resume.pdf'
import { Button } from 'semantic-ui-react'

const Resume = () => {
    return (
        <>
            <iframe src={resume} title="Ethan Resnik Resume" id="resume"></iframe>
            <br/><br/><br/>
            <Button
                color='black'
                content="View Resume"
                size="big"
                as="a"
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
            />
        </>
    )
}

export default Resume