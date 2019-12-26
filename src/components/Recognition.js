import React from 'react'
import npr from '../assets/npr.jpg'
import asw from '../assets/asw.jpg'
import north_south from '../assets/north_south.jpg'
import nyssma from '../assets/nyssma.jpg'
import fine_arts from '../assets/fine_arts_festival.png'
import ny_festival from '../assets/ny_concert_festival.jpg'
import NEMC from '../assets/NEMC.jpg'

const Recognition = () => {
    return (
        <>
            <br/>
            <div className="rec-grid">
                <div>
                    <div>
                        <h2 className="small-subheading">NPR’s From The Top</h2>
                        <img src={npr} alt="NPR From the Top" className="photo-medium" />
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className="small-subheading">Akron Symphonic Winds Young Composer’s Competition Winner</h2>
                        <img src={asw} alt="Akron Symphonic Winds" className="photo-medium" />
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className="small-subheading">North/South Consonance Call For Scores - Selected Composition</h2>
                        <img src={north_south} alt="North/South Consonance Call For Scores" className="photo-medium" />
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className="small-subheading">NYSSMA Call for Compositions - Honorable Mention</h2>
                        <img src={nyssma} alt="NYSSMA" className="photo-medium" />
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className="small-subheading">Yonkers Philharmonic Concerto Competition Finalist</h2>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className="small-subheading">American Protege</h2>
                        <p>International Piano and Strings Competition - 2nd Place</p>
                        <p>International Concerto Competition - 2nd Place</p>
                        <p>International Music Talent Competition- 1st Place</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className="small-subheading">American Fine Arts Festival Concerto Competition - 1st Place</h2>
                        <img src={fine_arts} alt="American Fine Arts Festival Concerto Competition" className="photo-medium" />
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className="small-subheading">Concert Festival</h2>
                        <p>Concerto Competition Grand Prix Winner</p>
                        <p>Solo Recital Competition Winner/Guest Artist</p>
                        <img src={ny_festival} alt="Concert Festival" className="photo-large" />
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className="small-subheading">Byram Hills High School Director’s Award</h2>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className="small-subheading">New England Music Camp Phi Mu Alpha Outstanding Musician Award</h2>
                        <img src={NEMC} alt="New England Music Camp Phi Mu Alpha Outstanding Musician Award" className="photo-medium" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Recognition