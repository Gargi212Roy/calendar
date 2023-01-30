import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
// lookat the route we are currently on
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "blue"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in JS
// const headingStyle = { color: "red", backgroundColor: "black" };
export default Header;
// asynchronous--> not in sync --> sync meaning: executed in order. when one line ain't executde don't go to the next line --> eg: while fetching the api we can move ahead with the next line
