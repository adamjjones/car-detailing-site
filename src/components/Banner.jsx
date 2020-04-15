import React from 'react';
import Main from './img/Main-logo.png'

console.log("rendered")

const Banner = () => {
  return (
    <div className="banner">
      <img className="logo" src={Main} alt="" />
      <span className="greeting">So-Fresh Hand Car Wash</span>
    </div>
  );
}

export default Banner;