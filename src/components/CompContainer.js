import React from 'react'
import CompMenu from './CompMenu'
import Compositions from './Compositions'

const CompContainer = () => {
    return (
        <div className="comp-grid">
            <CompMenu />
            <Compositions />
        </div>
    )
}

export default CompContainer