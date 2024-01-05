import React from "react";
import {useState} from "react";
import "../forms.css";
import App from "./App.jsx";
import app from "./App.jsx";

function educationForm() {
    const [school, setSchool] = useState("");
    const [degree, setDegree] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [schoolLocation, setLocation] = useState("");

    function cancelForm(e) {
        e.preventDefault();
        //todo figure out how to reset menuList and possibly store it in a different file
        app.resetMenuList();
    }

    return (
        <div className={"form-container"}>
            <form className={"education-form"}>
                <label htmlFor="school">School</label>
                <input
                    type={"text"}
                    id={"school"}
                    name={"school"}
                    placeholder={"Your school.."}
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                ></input>

                <label htmlFor="degree">Degree</label>
                <input
                    type={"text"}
                    id={"degree"}
                    name={"degree"}
                    placeholder={"Your degree.."}
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                ></input>

                <div className={"date-container"}>
                    <label htmlFor="startDate">Start Date</label>
                    <input
                        type={"date"}
                        id={"startDate"}
                        name={"startDate"}
                        placeholder={"Your start date.."}
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    ></input>

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

                <label htmlFor="schoolLocation">School Location</label>
                <input
                    type={"text"}
                    id={"schoolLocation"}
                    name={"schoolLocation"}
                    placeholder={"Your school location.."}
                    value={schoolLocation}
                    onChange={(e) => setLocation(e.target.value)}
                ></input>
                <div className={"button-container"}>
                    <button className={"submit-button"} type={"submit"}>
                        Submit
                    </button>
                    <button className={"cancel-button"} type={"cancel"} onClick={(e) => {
                        cancelForm(e)
                    }}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default educationForm;
