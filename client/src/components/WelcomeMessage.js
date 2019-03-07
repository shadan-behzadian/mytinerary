import React, { Fragment } from "react";

const styles = {
  heading: {
    color: "#fff",
    textAlign: "center",
    marginBottom: theme.margin * 2
  },
  logo: {
    width: 250,
    heading: 250,
    objectFit: "cover"
  }
};

const WelcomeMessage = imgPath => {
  return (
    <Fragment>
      <h1 style={styles.heading}>Welcome To</h1>
      <img src={imgPath} alt="app logo" style={styles.logo} />
    </Fragment>
  );
};

export default WelcomeMessage;
