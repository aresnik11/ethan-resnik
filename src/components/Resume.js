import React from 'react'
import resume from '../assets/ethan_resnik_resume.pdf'
import { Button } from 'semantic-ui-react'

const Resume = () => {
    return (
        <>
            <Button
                color='black'
                content="View Resume"
                size="big"
                as="a"
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
            />
            <br/><br/><br/>
            <iframe src={resume} title="Ethan Resnik Resume" id="resume"></iframe>
        </>
    )
}

export default Resume