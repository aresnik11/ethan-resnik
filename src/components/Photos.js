import React from "react";
import performance from '../assets/performance.jpeg'
import performance2 from '../assets/performance2.jpeg'
import npr_article from '../assets/npr_article.jpeg'
import piano_performance from '../assets/piano_performance.jpeg'
import performance3 from '../assets/performance3.jpeg'
import performance4 from '../assets/performance4.png'

const Photos = () => {
    return (
        <>
            <h1 className="heading">Take a Look!</h1>
            <br/>
            <img src={performance} alt="Performance" className="photo-large" />
            <br/><br/>
            <img src={performance2} alt="Performance" className="photo-large" />
            <br/><br/>
            <img src={npr_article} alt="NPR From the Top Article" className="photo-small" />
            <br/><br/>
            <img src={piano_performance} alt="Piano Performance" className="photo-large" />
            <br/><br/>
            <img src={performance3} alt="Performance" className="photo-large" />
            <br/><br/>
            <img src={performance4} alt="Performance" className="photo-large" />
        </>
    )
}

export default Photos