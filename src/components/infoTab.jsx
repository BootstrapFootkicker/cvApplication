import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import "../PersonalDetails.css";

// eslint-disable-next-line react/prop-types
function InfoTab({ sectionName, icon }) {
  return (
    <button className={"info-tab"}>
      <FontAwesomeIcon icon={icon} />
      <p>{sectionName}</p>
      <FontAwesomeIcon icon={faChevronDown} />
    </button>
  );
}

export default InfoTab;
