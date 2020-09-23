import React from "react";
import performance from "../assets/performance.jpg";
import composing from "../assets/composing.jpeg";
import ethan_piano from "../assets/ethan_piano.jpg";
import performance2 from "../assets/performance2.jpg";
import tchaikovsky_concerto_performance from "../assets/tchaikovsky_concerto_performance.jpeg";
import npr_article from "../assets/npr_article.jpeg";
import benefit_concert from "../assets/benefit_concert.jpeg";
import snow_pond_overture_performance from "../assets/snow_pond_overture_performance.jpeg";
import asw_performance from "../assets/asw_performance.jpg";
import american_composers_concert from "../assets/american_composers_concert.jpg";
import npr_from_the_top from "../assets/npr_from_the_top.jpg";
import arrival_performance from "../assets/arrival_performance.jpeg";
import north_shore_symphony_orchestra_performance from "../assets/north_shore_symphony_orchestra_performance.jpg";
import Gallery from "react-grid-gallery";

const Photos = () => {
  const images = [
    {
      src: arrival_performance,
      thumbnail: arrival_performance,
      thumbnailWidth: 1334,
      thumbnailHeight: 750,
      caption: 'World premiere of "Arrival" - April, 2019',
    },
    {
      src: tchaikovsky_concerto_performance,
      thumbnail: tchaikovsky_concerto_performance,
      thumbnailWidth: 1334,
      thumbnailHeight: 750,
      caption:
        "Tchaikovsky's Piano Concerto No. 1 - Finale - Performance with the North Shore Symphony Orchestra - November, 2018",
    },
    {
      src: npr_article,
      thumbnail: npr_article,
      thumbnailWidth: 750,
      thumbnailHeight: 1334,
    },
    {
      src: benefit_concert,
      thumbnail: benefit_concert,
      thumbnailWidth: 1334,
      thumbnailHeight: 750,
      caption:
        "Conclusion of 9/11 Benefit Concert, which raised over $2,100 for the Wounded Warrior Project - September 11, 2017",
    },
    {
      src: ethan_piano,
      thumbnail: ethan_piano,
      thumbnailWidth: 1200,
      thumbnailHeight: 1600,
      caption: "",
    },
    {
      src: performance2,
      thumbnail: performance2,
      thumbnailWidth: 1600,
      thumbnailHeight: 1067,
      caption: "",
    },

    {
      src: npr_from_the_top,
      thumbnail: npr_from_the_top,
      thumbnailWidth: 1200,
      thumbnailHeight: 1600,
      caption: "NPR's From The Top, Episode 377, Live Show - November, 2019",
    },
    {
      src: composing,
      thumbnail: composing,
      thumbnailWidth: 1334,
      thumbnailHeight: 750,
      caption: "",
    },
    {
      src: performance,
      thumbnail: performance,
      thumbnailWidth: 1600,
      thumbnailHeight: 781,
      caption: "",
    },
    {
      src: asw_performance,
      thumbnail: asw_performance,
      thumbnailWidth: 1334,
      thumbnailHeight: 750,
      caption:
        "Commission by the Akron Symphonic Winds - Young Composer's Competition Winner - September, 2019",
    },
    {
      src: snow_pond_overture_performance,
      thumbnail: snow_pond_overture_performance,
      thumbnailWidth: 1334,
      thumbnailHeight: 750,
      caption:
        'World premiere of "Snow Pond Overture", performed by the New England Music Camp Symphony Orchestra, Snow Pond Center for the Arts - August, 2019',
    },
    {
      src: north_shore_symphony_orchestra_performance,
      thumbnail: north_shore_symphony_orchestra_performance,
      thumbnailWidth: 1600,
      thumbnailHeight: 1200,
      caption:
        "Performance with the North Shore Symphony Orchestra - November, 2018",
    },
    {
      src: american_composers_concert,
      thumbnail: american_composers_concert,
      thumbnailWidth: 1275,
      thumbnailHeight: 1650,
      caption: "Concert of American Composers - January, 2020",
    },
  ];

  return (
    <div className="white-container">
      <h1 className="heading">Take a Look!</h1>
      <Gallery
        images={images}
        enableImageSelection={false}
        backdropClosesModal={true}
        rowHeight={300}
      />
    </div>
  );
};

export default Photos;
