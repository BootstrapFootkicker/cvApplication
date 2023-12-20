import React from "react";
import ReactDOM from "react-dom/client";
// eslint-disable-next-line no-unused-vars
import App from "./components/App.jsx";
import "./index.css";
import PersonalDetails from "./components/PersonalDetails.jsx";
import EducationForm from "./components/EducationForm.jsx";
import ExperienceForm from "./components/ExperienceForm.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*<App />*/}
    <PersonalDetails />
    <EducationForm />
    <ExperienceForm />
  </React.StrictMode>,
);
