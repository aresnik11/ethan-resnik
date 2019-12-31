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
            thumbnailHeight: 247,
            caption: 'World premiere of "Arrival", performed by the Byram Hills High School Wind Symphony - April, 2019'
        },
        {
            src: ethan_music,
            thumbnail: ethan_music,
            thumbnailWidth: 450,
            thumbnailHeight: 534,
            caption: 'Orchestra reading of "Rush" by the Juilliard Pre-College Symphony - December, 2019'
        },
        {
            src: piano_performance,
            thumbnail: piano_performance,
            thumbnailWidth: 450,
            thumbnailHeight: 298,
            caption: 'Conclusion of 9/11 Benefit Concert, which raised over $2,100 for the Wounded Warrior Project - September 11, 2017'
        },
        {
            src: performance2,
            thumbnail: performance2,
            thumbnailWidth: 450,
            thumbnailHeight: 245,
            caption: 'Tchaikovsky’s Piano Concerto No. 1 - Finale - Performance with the North Shore Symphony Orchestra - November, 2018'
        },
        {
            src: performance4,
            thumbnail: performance4,
            thumbnailWidth: 450,
            thumbnailHeight: 247,
            caption: 'Commission by the Akron Symphonic Winds - Young Composer\'s Competition Winner - September, 2019'
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
            thumbnailHeight: 534,
            caption: 'NPR\'s From The Top, Episode 377, Live Show - November, 2019'
        },
        {
            src: about,
            thumbnail: about,
            thumbnailWidth: 450,
            thumbnailHeight: 247,
            caption: 'World premiere of "Arrival" - April, 2019'
        },
        {
            src: performance3,
            thumbnail: performance3,
            thumbnailWidth: 450,
            thumbnailHeight: 245,
            caption: 'World premiere of "Snow Pond Overture", performed by the New England Music Camp Symphony Orchestra, Snow Pond Center for the Arts - August, 2019'
        },
        {
            src: homepage,
            thumbnail: homepage,
            thumbnailWidth: 450,
            thumbnailHeight: 298,
            caption: 'Performance with the North Shore Symphony Orchestra - November, 2018'
        },
        {
            src: poster,
            thumbnail: poster,
            thumbnailWidth: 450,
            thumbnailHeight: 534,
            caption: 'Concert of American Composers - January, 2020'
        }
    ]
    return (
        <div className="white-container">
            <h1 className="heading">Take a Look!</h1>
            <div className="photo-gallery">
                <Gallery
                    images={images}
                    enableImageSelection={false}
                    backdropClosesModal={true}
                    rowHeight={300}
                />
            </div>
            
        </div>
    )
}

export default Photos