import React from "react";
import {useState} from "react";
import "../forms.css";


function EducationForm(actions, toggleSetter) {
    const [school, setSchool] = useState("");
    const [degree, setDegree] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [schoolLocation, setLocation] = useState("");
    const [placeHolder, setPlaceholder] = useState("Your school..");

//todo figure out destructuring and also figure out why all info is being stored in actions
    console.log(actions)
    return (
        <div className={"form-container"}>

            <form className={"education-form"} onSubmit={(e) => {
                e.preventDefault()
                //submit.submit


            }}>
                <label htmlFor="school">School</label>
                <input
                    type={"text"}
                    id={"school"}
                    name={"school"}
                    placeholder={placeHolder}
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
                    <button className={"submit-button"} type={"submit"} onClick={() => {
                        //submit function
                        actions.actions[0](actions.id);
                        actions.toggleSetter(false);
                    }}>
                        Submit
                    </button>
                    <button className={"cancel-button"} onClick={() => {
                        //refresh function

                        actions.actions[1](actions.id);
                        actions.toggleSetter(false);
                    }}>
                        Cancel
                    </button>


                </div>
            </form>
        </div>

    );
}

export default EducationForm;
