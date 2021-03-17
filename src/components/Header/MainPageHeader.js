import React, { useRef, useEffect, useContext } from "react";
import useParallax from "../../custom-hooks/useParallax";
import s from "./header.module.css";

import searchLogo from "../../assets/search_icon.svg";
import clearLogo from "../../assets/clear_icon.svg";
import travelAppLogo from "../../assets/travel_app_logo.png";

import TravelAppContext from "../context/context";

import {
  handleLanguageChange,
  handleSearchTextChange,
  handleSearchTextSubmit,
  handleSearchTextClear,
} from "../handlers/handlers";

function MainPageHeader() {
  const inputRef = useRef(null);
  const currentBgPosition = useParallax();
  const { searchText, language, dispatch, showModal, modalType } = useContext(
    TravelAppContext
  );
  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        handleSearchTextSubmit(event, dispatch);
      }
    });
  }, [dispatch]);

  return (
    <header style={currentBgPosition}>
      {showModal && (
        <div className={s.modal}>
          <div className={s.subscriptionForm}>
            <h1>
              {`${modalType === "register" ? "Registration Form" : "Login"}`}
            </h1>
            <form action="">
              {modalType === "register" && (
                <input type="text" placeholder="John Smith"></input>
              )}
              <input
                type="email"
                name="email"
                placeholder=" johnsmith@gmail.com"
              />
              <input type="password" name="password" placeholder=" ********" />
              {modalType === "register" && (
                <input
                  type="file"
                  name="photo"
                  style={{ cursor: "pointer" }}
                  accept="image/*"
                />
              )}
              <div className={s.buttons}>
                <button type="submit">{`${
                  modalType === "register" ? "Register" : "Logn in"
                }`}</button>
                <button
                  style={{ background: "rgba(250, 19, 65, 0.932)" }}
                  onClick={(event) => {
                    event.preventDefault();
                    dispatch({ type: "CLOSE_MODAL" });
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className={s.rowOne}>
        <img src={travelAppLogo} alt="travel-logo" />
        <div className={s.headerButtons}>
          <select
            name="languages"
            id="languages"
            value={language}
            onChange={(event) => {
              handleLanguageChange(event, dispatch);
            }}
          >
            <option value="EN">EN</option>
            <option value="РУС">РУС</option>
            <option value="TÜR">TÜR</option>
          </select>
          <button
            onClick={(event) => {
              event.preventDefault();
              dispatch({ type: "OPEN_MODAL", paylod: "register" });
            }}
          >{`${
            language === "EN"
              ? "Register"
              : language === "РУС"
              ? "Регистрация"
              : "Kayıt ol"
          }`}</button>
          <button
            onClick={(event) => {
              event.preventDefault();
              dispatch({ type: "OPEN_MODAL", paylod: "signIn" });
            }}
          >{`${
            language === "EN"
              ? "Sign in"
              : language === "РУС"
              ? "Войти"
              : "Oturum aç"
          }`}</button>
        </div>
      </div>

      <div className={s.rowTwo} />
      <div className={s.rowThree}>
        <button
          onClick={(event) => {
            handleSearchTextSubmit(event, dispatch);
          }}
          style={{
            borderTopLeftRadius: "15px",
            borderBottomLeftRadius: "15px",
          }}
        >
          <img src={clearLogo} alt="search-icon" />
        </button>
        <input
          type="text"
          placeholder={`${
            language === "EN"
              ? "Italy , Rome"
              : language === "РУС"
              ? "Италия , Рим"
              : "İtalya , Roma"
          }`}
          ref={inputRef}
          value={searchText}
          onChange={(event) => {
            handleSearchTextChange(event, dispatch);
            handleSearchTextSubmit(event, dispatch);
          }}
        />

        <button
          onClick={(event) => {
            handleSearchTextClear(event, dispatch);
          }}
          style={{
            borderTopRightRadius: "15px",
            borderBottomRightRadius: "15px",
          }}
        >
          <img src={searchLogo} alt="clear-icon" />
        </button>
      </div>
    </header>
  );
}

export default MainPageHeader;
