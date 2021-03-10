import React from "react";
import s from "./card.module.css";
import { Link } from "react-router-dom";

const Card = ({ imgUrl, country, capital }) => {
  return (
    <div className={s.outside_wrap}>
      <Link to='/country'> 
      <div className={s.wrapper} style={{ backgroundImage: `url(${imgUrl})` }}>
        <div className={s.inner}>
          <div className={s.country}>
            <span className={s.location}>{country}</span>
          </div>
          <div className={s.capital}>
            <span className={s.location}>{capital}</span>
          </div> 
        </div>
      </div>
    </Link>
    </div>
  );
};

export default Card;
