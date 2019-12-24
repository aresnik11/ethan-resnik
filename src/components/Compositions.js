import React from 'react'
import Winter from '../assets/Winter_Flashbacks.mp3'

const Compositions = () => {
    return (
        <div>
            <h1 className="heading">Orchestra</h1>
            <h2>Snow Pond Overture</h2>
            <p><a href="https://youtu.be/O1Q97hqC7is" target="_blank" rel="noopener noreferrer">Performance by the New England Music Camp Symphony Orchestra</a></p>
            <iframe title="Snow Pond Overture" width="560" height="315" src="https://www.youtube.com/embed/O1Q97hqC7is" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
            <h2>Rush</h2>
            <p>Reading by the Juilliard Pre-College Symphony</p>
            <h2>Piano Concerto No. 1 in E-Flat Major</h2>

            <br/>

            <h1 className="heading">Concert Band</h1>
            <h2>Arrival</h2>
            <p><a href="https://youtu.be/sUVj3l9MF70" target="_blank" rel="noopener noreferrer">Performance by the Akron Symphonic Winds</a></p>
            <iframe title="Arrival - Akron Symphonic Winds" width="560" height="315" src="https://www.youtube.com/embed/sUVj3l9MF70" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
            <p><a href="https://youtu.be/bAgi4O8INDU" target="_blank" rel="noopener noreferrer">Performance by the Byram Hills High School Wind Symphony</a></p>
            <iframe title="Arrival - Byram Hills High School" width="560" height="315" src="https://www.youtube.com/embed/bAgi4O8INDU" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
            <h2>Flight 737</h2>
            <h2>Soldier March</h2>

            <br/>

            <h1 className="heading">String Orchestra</h1>
            <h2>Blue Moonlight</h2>

            <br/>

            <h1 className="heading">Chamber Music</h1>
            <h2>Lake Kawaguchi at Dawn - Flute and Piano</h2>
            <p><a href="https://youtu.be/C-6KkAABLbQ" target="_blank" rel="noopener noreferrer">Live Performance</a></p>
            <iframe title="Lake Kawaguchi at Dawn" width="560" height="315" src="https://www.youtube.com/embed/C-6KkAABLbQ" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
            <h2>Dance of the Phantoms - String Quartet</h2>
            <p>Recording</p>
            <h2>Winter Flashbacks - Cello and Piano</h2>
            <p>Live Performance</p>
            <audio controls>
                <source src={Winter} type="audio/mpeg" />
            </audio>
            <h2>Night in the Rainforest - Clarinet in Bb/Bass Clarinet, Violin 1, Violin 2, Piano</h2>
            <p>Live Recording</p>
            <h2>Reflective Sunset - Clarinet in A, Two Violins, and Piano</h2>
            <h2>Reflections - String Trio</h2>
            <h2>Graduation Eve - Oboe/Soprano Saxophone and Piano</h2>
            <p>Live Recording</p>
            <h2>Duet for Clarinet and Bassoon</h2>

            <br/>

            <h1 className="heading">Solo</h1>
            <h2>Une Promenade à travers le Metropolitan - Solo Piano</h2>
            <p><a href="https://youtu.be/gQd35r2Xr6g" target="_blank" rel="noopener noreferrer">Live Recording</a></p>
            <iframe title="Une Promenade à travers le Metropolitan" width="560" height="315" src="https://www.youtube.com/embed/gQd35r2Xr6g" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
            <h2>Waltz No. 5 in F Minor - Solo Piano</h2>
            <p><a href="https://youtu.be/6MFtip48FCk" target="_blank" rel="noopener noreferrer">Live Recording</a></p>
            <iframe title="Waltz No. 5 in F Minor" width="560" height="315" src="https://www.youtube.com/embed/6MFtip48FCk" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
            <h2>Two Pieces for Solo Piano - "Water" and "Sunrise"</h2>
            <h2>Atonal Piano</h2>
            <h2>Prelude No. 2 in C-Sharp Minor - Solo Piano</h2>
            <p><a href="https://youtu.be/-TG9E_bUNas" target="_blank" rel="noopener noreferrer">Live Performance</a></p>
            <iframe title="Prelude No. 2 in C-Sharp Minor" width="560" height="315" src="https://www.youtube.com/embed/6MFtip48FCk" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
            <h2>Nocturne No. 1 in E-Flat Major</h2>
            <p><a href="https://youtu.be/rjBdftbZ-ig" target="_blank" rel="noopener noreferrer">Live Recording</a></p>
            <iframe title="Nocturne No. 1 in E-Flat Major" width="560" height="315" src="https://www.youtube.com/embed/rjBdftbZ-ig" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
            <h2>Strange Night - Solo Violin</h2>
            <h2>Saxophone Piece</h2>
            <h2>Prelude No. 4 in E-Flat Major - Piano</h2>
            <h2>Prelude No. 3 in A-Flat Major - Piano</h2>
            <h2>Prelude No. 1 in E Minor - Piano</h2>
        </div>
    )
}

export default Compositions