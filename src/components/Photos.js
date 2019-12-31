import React from "react";
import performance from '../assets/performance.jpeg'
import performance2 from '../assets/performance2.jpeg'
import npr_article from '../assets/npr_article.jpeg'
import piano_performance from '../assets/piano_performance.jpeg'
import performance3 from '../assets/performance3.jpeg'
import performance4 from '../assets/performance4.jpg'
import poster from '../assets/poster.jpg'
import ethan_music from '../assets/ethan_music.jpg'
import npr from '../assets/npr.jpg'
import about from '../assets/about.jpg'
import homepage from '../assets/homepage.jpg'
import Gallery from 'react-grid-gallery';

const Photos = () => {
    const images = [
        {
            src: performance,
            thumbnail: performance,
            thumbnailWidth: 450,
            thumbnailHeight: 245
        },
        {
            src: ethan_music,
            thumbnail: ethan_music,
            thumbnailWidth: 450,
            thumbnailHeight: 534
        },
        {
            src: performance2,
            thumbnail: performance2,
            thumbnailWidth: 450,
            thumbnailHeight: 245
        },
        {
            src: piano_performance,
            thumbnail: piano_performance,
            thumbnailWidth: 450,
            thumbnailHeight: 298
        },
        {
            src: performance4,
            thumbnail: performance4,
            thumbnailWidth: 450,
            thumbnailHeight: 245
        },
        {
            src: npr_article,
            thumbnail: npr_article,
            thumbnailWidth: 450,
            thumbnailHeight: 534
        },
        {
            src: npr,
            thumbnail: npr,
            thumbnailWidth: 450,
            thumbnailHeight: 534
        },
        {
            src: about,
            thumbnail: about,
            thumbnailWidth: 450,
            thumbnailHeight: 245
        },
        {
            src: performance3,
            thumbnail: performance3,
            thumbnailWidth: 450,
            thumbnailHeight: 245
        },
        {
            src: homepage,
            thumbnail: homepage,
            thumbnailWidth: 450,
            thumbnailHeight: 298
        },
        {
            src: poster,
            thumbnail: poster,
            thumbnailWidth: 450,
            thumbnailHeight: 534
        }
    ]
    return (
        <div className="white-container">
            <h1 className="heading">Take a Look!</h1>
            <br/>
            <Gallery
                images={images}
                enableImageSelection={false}
                backdropClosesModal={true}
                rowHeight={300}
            />
        </div>
    )
}

export default Photos