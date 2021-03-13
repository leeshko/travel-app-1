import React from "react";
import s from "./countryPage.module.css";

import ShortInfo from "../ShortInfo/ShortInfo";
import Widgets from "../Widgets/Widgets";
import MapWidget from "./map/Map";
import PhotoVideo from "../PhotoVideo/PhotoVideo";

import TravelAppContext from "../context/context";
import chooseCountryInfo from "../handlers/chooseCountryInfo";

const CountryPage = () => {
  const { countryToDisplay, language } = React.useContext(TravelAppContext);

  let country = chooseCountryInfo(countryToDisplay);

  return (
    <div>
      <div className={s.main}>
        <Widgets coordinates={country.coordinates} />
        <ShortInfo
          {...country}
          language={language}
          picture={country.pictures[0].original}
        />

        <div className={s.mapBox}>
          <div className={s.map}>
            <MapWidget coordinates={country.coordinates} />
          </div>
          <div className={s.text}>some text</div>
        </div>
    
        <PhotoVideo />
      </div>
    </div>
  );
};

export default CountryPage;
