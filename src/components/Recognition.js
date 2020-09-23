import React from "react";
import npr_from_the_top from "../assets/npr_from_the_top.jpg";
import asw from "../assets/asw.jpg";
import north_south_consonance from "../assets/north_south_consonance.jpg";
import next_notes from "../assets/next_notes.png";
import susquehanna from "../assets/susquehanna.jpg";
import nyssma from "../assets/nyssma.jpg";
import yonkers_philharmonic from "../assets/Yonkers-Philharmonic-Orchestra.png";
import american_protege from "../assets/american_protege.png";
import fine_arts_festival from "../assets/fine_arts_festival.png";
import concert_festival from "../assets/ny_concert_festival.jpg";
import byram_hills_hs from "../assets/bhhs.png";
import sousa_award from "../assets/sousa_award.jpg";
import NEMC from "../assets/NEMC.jpg";
import nemc_logo from "../assets/nemc_logo.jpg";

const Recognition = () => {
  return (
    <div className="rec-grid">
      <div>
        <h2 className="small-subheading">NPR's From The Top</h2>
        <img
          src={npr_from_the_top}
          alt="NPR From the Top"
          className="photo-medium"
        />
      </div>
      <div>
        <h2 className="small-subheading">
          Akron Symphonic Winds Young Composer's Competition Winner
        </h2>
        <img src={asw} alt="Akron Symphonic Winds" className="photo-medium" />
      </div>
      <div>
        <h2 className="small-subheading">
          North/South Consonance Call For Scores - Selected Composition
        </h2>
        <img
          src={north_south_consonance}
          alt="North/South Consonance"
          className="photo-medium"
        />
      </div>
      <div>
        <h2 className="small-subheading">
          NextNotes High School Music Creator Awards - Honorable Mention
        </h2>
        <img
          src={next_notes}
          alt="NextNotes High School Music Creator Awards"
          className="photo-medium"
        />
      </div>
      <div>
        <h2 className="small-subheading">
          Susquehanna University Composition Competition Winner
        </h2>
        <img
          src={susquehanna}
          alt="Susquehanna University"
          className="photo-medium"
        />
      </div>
      <div>
        <h2 className="small-subheading">
          NYSSMA Call for Compositions - Honorable Mention
        </h2>
        <img src={nyssma} alt="NYSSMA" className="photo-medium" />
      </div>
      <div>
        <h2 className="small-subheading">
          Yonkers Philharmonic Concerto Competition Finalist
        </h2>
        <img
          src={yonkers_philharmonic}
          alt="Yonkers Philharmonic"
          className="photo-medium"
        />
      </div>
      <div>
        <h2 className="small-subheading">American Protégé</h2>
        <p>International Piano and Strings Competition - 2nd Place</p>
        <p>International Concerto Competition - 2nd Place</p>
        <p>International Music Talent Competition - 1st Place</p>
        <img
          src={american_protege}
          alt="American Protégé"
          className="photo-small"
        />
      </div>
      <div>
        <h2 className="small-subheading">
          American Fine Arts Festival Concerto Competition - 1st Place
        </h2>
        <img
          src={fine_arts_festival}
          alt="American Fine Arts Festival"
          className="photo-medium"
        />
      </div>
      <div>
        <h2 className="small-subheading">Concert Festival</h2>
        <p>Concerto Competition Grand Prix Winner</p>
        <p>Solo Recital Competition Winner/Guest Artist</p>
        <img
          src={concert_festival}
          alt="Concert Festival"
          className="photo-large"
        />
      </div>
      <div>
        <h2 className="small-subheading">
          Byram Hills High School Director's Award
        </h2>
        <img
          src={byram_hills_hs}
          alt="Byram Hills High School"
          className="photo-small"
        />
      </div>
      <div>
        <h2 className="small-subheading">John Philip Sousa Band Award</h2>
        <img
          src={sousa_award}
          alt="John Philip Sousa Band Award"
          className="photo-small"
        />
      </div>
      <div>
        <h2 className="small-subheading">
          New England Music Camp Phi Mu Alpha Outstanding Musician Award
        </h2>
        <img
          src={nemc_logo}
          alt="New England Music Camp"
          className="photo-small"
        />
        <img
          src={NEMC}
          alt="New England Music Camp Phi Mu Alpha Outstanding Musician Award"
          className="photo-medium"
        />
      </div>
    </div>
  );
};

export default Recognition;
