import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./header.module.css";

const Header = (props) => {
  const searchRef = useRef();
  const [inputValue, setInputValue] = useState();
  const history = useHistory();

  const changeSearch = (e) => {
    setInputValue(e.target.value);
  };
  const goToHome = (video) => {
    history.push({
      pathname: "/",
      state: { video: video },
    });
  };
  const clickSearchBtn = async (e) => {
    e.preventDefault();
    let val = searchRef.current.value;
    await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${val}&maxResults=20&key=${process.env.REACT_APP_KEY}`
    ) //
      .then((res) => res.json())
      .then((result) => goToHome(result))
      .catch((err) => console.log(err));
  };

  return (
    <header className={styles.container}>
      <Link to="/">
        <div className={styles.imgContainer}>
          <img src="./images/logo.png" alt="logo" />
          <h3 className={styles.title}>Youtube</h3>
        </div>
      </Link>
      <form className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search..."
          ref={searchRef}
          value={inputValue}
          onChange={changeSearch}
        />
        <div className={styles.searchBox}>
          <button onClick={clickSearchBtn}>
            <img src="./images/search.png" alt="search" />
          </button>
        </div>
      </form>
    </header>
  );
};

export default Header;
