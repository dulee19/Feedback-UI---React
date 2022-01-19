import React from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{title}</h2>
      </div>
    </header>
  );
};

Header.defaultProps = {
  title: "Feedback UI",
  bgColor: "rgba(0,0,0,.4)",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

const headerStyle = {
  background: "rgba(0,0,0,.4)",
  color: "#ff6e95",
};

export default Header;
