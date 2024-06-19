import { useState } from "react";
import PropTypes from "prop-types";

 function Dropdown({ title, children }) {
Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [chevron] = useState("fa-solid fa-chevron-up");

  

  const toggleDisplay = () => {
    setIsDisplayed(previous => !previous);
  };

  return <>
    <button>
      <p>{title}</p>
      <i onClick={toggleDisplay} className={`${chevron} ${isDisplayed ? 'rotate' : ''}`}></i>
    </button>
    <div className={`dropdown-content ${isDisplayed ? 'show' : ''}`}>
      {children}
    </div>
  </>;
}
export default Dropdown;