import React, { Fragment } from "react";

const WelcomeMessage = imgPath => {
  return (
    <Fragment>
      <h1>Welcome To</h1>
      <img src={imgPath} alt="app logo" />
    </Fragment>
  );
};

export default WelcomeMessage;
