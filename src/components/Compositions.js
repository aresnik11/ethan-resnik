import React from 'react'
import Winter from '../assets/Winter_Flashbacks.mp3'

const Compositions = () => {
    return (
        <div>
            <h1 className="heading">Orchestra</h1>
            <h2 className="subheading">Snow Pond Overture</h2>
            <p><a href="https://youtu.be/O1Q97hqC7is" target="_blank" rel="noopener noreferrer">Performance by the New England Music Camp Symphony Orchestra</a></p>
            <iframe title="Snow Pond Overture" width="560" height="315" src="https://www.youtube.com/embed/O1Q97hqC7is" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
            <br/><br/>
            <h2 className="subheading">Rush</h2>
            <p><a href="https://youtu.be/6ulRo1zm8ic" target="_blank" rel="noopener noreferrer">Reading by the Juilliard Pre-College Symphony</a></p>
            <iframe title="Rush" width="560" height="315" src="https://www.youtube.com/embed/6ulRo1zm8ic" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
            <br/><br/>
            <h2 className="subheading">Piano Concerto No. 1 in E-Flat Major</h2>

            <br/>

            <h1 className="heading">Concert Band</h1>
            <h2 className="subheading">Arrival</h2>
            <p><a href="https://youtu.be/sUVj3l9MF70" target="_blank" rel="noopener noreferrer">Performance by the Akron Symphonic Winds</a></p>
            <iframe title="Arrival - Akron Symphonic Winds" width="560" height="315" src="https://www.youtube.com/embed/sUVj3l9MF70" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
            <br/><br/><br/>
            <p><a href="https://youtu.be/bAgi4O8INDU" target="_blank" rel="noopener noreferrer">Performance by the Byram Hills High School Wind Symphony</a></p>
            <iframe title="Arrival - Byram Hills High School" width="560" height="315" src="https://www.youtube.com/embed/bAgi4O8INDU" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
            <br/><br/>
            <h2 className="subheading">Flight 737</h2>
            <h2 className="subheading">Soldier March</h2>

            <br/>

            <h1 className="heading">String Orchestra</h1>
            <h2 className="subheading">Blue Moonlight</h2>

            <br/>

            <h1 className="heading">Chamber Music</h1>
            <h2 className="subheading">Lake Kawaguchi at Dawn - Flute and Piano</h2>
            <p><a href="https://youtu.be/C-6KkAABLbQ" target="_blank" rel="noopener noreferrer">Live Performance</a></p>
            <iframe title="Lake Kawaguchi at Dawn" width="560" height="315" src="https://www.youtube.com/embed/C-6KkAABLbQ" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
            <br/><br/>
            <h2 className="subheading">Dance of the Phantoms - String Quartet</h2>
            <p><a href="https://youtu.be/WUO8FuzWgH4" target="_blank" rel="noopener noreferrer">Live Performance</a></p>
            <iframe title="Dance of the Phantoms" width="560" height="315" src="https://www.youtube.com/embed/WUO8FuzWgH4" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
            <br/><br/>
            <h2 className="subheading">Winter Flashbacks - Cello and Piano</h2>
            <p>Live Performance</p>
            <audio controls>
                <source src={Winter} type="audio/mpeg" />
            </audio>
            <br/><br/>
            <h2 className="subheading">Night in the Rainforest - Clarinet in Bb/Bass Clarinet, Violin 1, Violin 2, Piano</h2>
            <p><a href="https://youtu.be/n2ue2kSdeEs" target="_blank" rel="noopener noreferrer">Live Recording</a></p>
            <iframe title="Night in the Rainforest" width="560" height="315" src="https://www.youtube.com/embed/n2ue2kSdeEs" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
            <br/><br/>
            <h2 className="subheading">Reflective Sunset - Clarinet in A, Two Violins, and Piano</h2>
            <h2 className="subheading">Reflections - String Trio</h2>
            <h2 className="subheading">Graduation Eve - Oboe/Soprano Saxophone and Piano</h2>
            <p>Live Recording</p>
            <h2 className="subheading">Duet for Clarinet and Bassoon</h2>

            <br/>

            <h1 className="heading">Solo</h1>
            <h2 className="subheading">Une Promenade à travers le Metropolitan - Solo Piano</h2>
            <p><a href="https://youtu.be/gQd35r2Xr6g" target="_blank" rel="noopener noreferrer">Live Recording</a></p>
            <iframe title="Une Promenade à travers le Metropolitan" width="560" height="315" src="https://www.youtube.com/embed/gQd35r2Xr6g" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
            <br/><br/>
            <h2 className="subheading">Waltz No. 5 in F Minor - Solo Piano</h2>
            <p><a href="https://youtu.be/6MFtip48FCk" target="_blank" rel="noopener noreferrer">Live Recording</a></p>
            <iframe title="Waltz No. 5 in F Minor" width="560" height="315" src="https://www.youtube.com/embed/6MFtip48FCk" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
            <br/><br/>
            <h2 className="subheading">Two Pieces for Solo Piano - "Water" and "Sunrise"</h2>
            <h2 className="subheading">Atonal Piano</h2>
            <h2 className="subheading">Prelude No. 2 in C-Sharp Minor - Solo Piano</h2>
            <p><a href="https://youtu.be/-TG9E_bUNas" target="_blank" rel="noopener noreferrer">Live Performance</a></p>
            <iframe title="Prelude No. 2 in C-Sharp Minor" width="560" height="315" src="https://www.youtube.com/embed/6MFtip48FCk" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
            <br/><br/>
            <h2 className="subheading">Nocturne No. 1 in E-Flat Major</h2>
            <p><a href="https://youtu.be/rjBdftbZ-ig" target="_blank" rel="noopener noreferrer">Live Recording</a></p>
            <iframe title="Nocturne No. 1 in E-Flat Major" width="560" height="315" src="https://www.youtube.com/embed/rjBdftbZ-ig" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
            <br/><br/>
            <h2 className="subheading">Strange Night - Solo Violin</h2>
            <h2 className="subheading">Saxophone Piece</h2>
            <h2 className="subheading">Prelude No. 4 in E-Flat Major - Piano</h2>
            <h2 className="subheading">Prelude No. 3 in A-Flat Major - Piano</h2>
            <h2 className="subheading">Prelude No. 1 in E Minor - Piano</h2>
        </div>
    )
}

export default Compositions