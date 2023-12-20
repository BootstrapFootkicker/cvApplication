import React from "react";
import { useState } from "react";
import "../PersonalDetails.css";

function ExperienceForm() {
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [workLocation, setLocation] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className={"form-container"}>
      <form className={"education-form"}>
        <div className={"input-group"}>
          <label htmlFor="companyName">Company Name</label>
          <input
            type={"text"}
            id={"companyName"}
            name={"companyName"}
            placeholder={"Your company name.."}
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          ></input>
        </div>

        <div className={"input-group"}>
          <label htmlFor="position">Position</label>
          <input
            type={"text"}
            id={"position"}
            name={"position"}
            placeholder={"Your position.."}
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          ></input>
        </div>

        <div className="date-container">
          <div className={"input-group"}>
            <label htmlFor="startDate">Start Date</label>
            <input
              type={"date"}
              id={"startDate"}
              name={"startDate"}
              placeholder={"Your start date.."}
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            ></input>
          </div>

          <div className={"input-group"}>
            <label htmlFor="endDate">End Date</label>
            <input
              type={"date"}
              id={"endDate"}
              name={"endDate"}
              placeholder={"Your end date.."}
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            ></input>
          </div>
        </div>

        <div className={"input-group"}>
          <label htmlFor="workLocation">Work Location</label>
          <input
            type={"text"}
            id={"workLocation"}
            name={"workLocation"}
            placeholder={"Your work location.."}
            value={workLocation}
            onChange={(e) => setLocation(e.target.value)}
          ></input>
        </div>

        <div className={"input-group"}>
          <label htmlFor="description">Description</label>
          <input
            type={"text"}
            id={"description"}
            name={"description"}
            placeholder={"Your description.."}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>
        </div>
      </form>
    </div>
  );
}

export default ExperienceForm;
