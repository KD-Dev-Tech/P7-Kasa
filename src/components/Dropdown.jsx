import { useState } from "react";
import PropTypes from "prop-types";


 function Dropdown({ title, description }) {
  Dropdown.propTypes = {
  title: PropTypes.string,
  description: PropTypes.node,
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
    {Array.isArray(description) ? <ul>{description}</ul> : <p>{description}</p>}
     
    </div>
  </>;
}
export default Dropdown;