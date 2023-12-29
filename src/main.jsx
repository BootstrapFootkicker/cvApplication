import React from "react";
import ReactDOM from "react-dom/client";
// eslint-disable-next-line no-unused-vars
import App from "./components/App.jsx";
import {
    faGraduationCap,
    faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./index.css";
import PersonalDetails from "./components/PersonalDetails.jsx";
import EducationForm from "./components/EducationForm.jsx";
import ExperienceForm from "./components/ExperienceForm.jsx";
import InfoTab from "./components/InfoTab.jsx";
import Dropdown from "./components/Dropdown.jsx";

const menuList = ["Menu 1", "Menu 2", "Menu 3"];

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/*<App />*/}
        <PersonalDetails/>
        <EducationForm/>
        <ExperienceForm/>

        <Dropdown sectionName={"Education"} icon={faGraduationCap} menuList={menuList}/>
        {/*<Dropdown sectionName={"Experience"} icon={faBriefcase} menuList ={menuList}/>*/}
    </React.StrictMode>,
);
