import React, {useEffect} from "react";
import {useState} from "react";
import "../styles/forms.css";


export function EducationForm({
                                  formType,
                                  formInfo,
                                  formId,
                                  elementInfo,
                                  setFormToggle
                              }
) {

    const [school, setSchool] = useState("");
    const [degree, setDegree] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [schoolLocation, setLocation] = useState("");
    const [placeHolder, setPlaceholder] = useState("Your school..");


    useEffect(() => {
        if (formType === "edit") {
            setSchool(formInfo.school || "");
            setDegree(formInfo.degree || "");
            setStartDate(formInfo.startDate || "");
            setEndDate(formInfo.endDate || "");
            setLocation(formInfo.schoolLocation || "");
            setPlaceholder(formInfo.school || "");
        }
    }, [formType, formInfo]);


    return (

        <div className={"form-container"}>

            <form
                className={"education-form"}
                onSubmit={(e) => {
                    e.preventDefault();
                    if (formType === "edit") {
                        console.log(formId, 'edit Id', "EDIT!")
                        elementInfo.actions.editMenuItem(elementInfo.buttonId, formId, {
                            school: school,
                            degree: degree,
                            startDate: startDate,
                            endDate: endDate,
                            schoolLocation: schoolLocation,
                            formType: formType,
                        }, 'education');
                        elementInfo.actions.removeMenuItem(formId, elementInfo.actions.setMenuList);

                    } else {
                        console.log(formId, 'edit Id', "submit!", formType)
                        elementInfo.actions.formSubmit(formId, school, {
                            school: school,
                            degree: degree,
                            startDate: startDate,
                            endDate: endDate,
                            schoolLocation: schoolLocation,
                            formType: formType,
                        }, 'education');
                    }
                    setFormToggle(false)
                }}
            >
                <div className={"input-group"}>

                    <label htmlFor="school">School</label>
                    <input
                        required
                        type={"text"}
                        id={"school"}
                        name={"school"}
                        placeholder={placeHolder}
                        value={school}
                        onChange={(e) => setSchool(e.target.value)}
                    ></input>

                    <label htmlFor="degree">Degree</label>
                    <input
                        required
                        type={"text"}
                        id={"degree"}
                        name={"degree"}
                        placeholder={"Your degree.."}
                        value={degree}
                        onChange={(e) => setDegree(e.target.value)}
                    ></input>

                    <div className={"date-container"}>
                        <div className={'date-input'}>
                            <label htmlFor="startDate">Start Date</label>
                            <input
                                required
                                type={"date"}
                                id={"startDate"}
                                name={"startDate"}
                                placeholder={"Your start date.."}
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            ></input>
                        </div>
                        <div className={'date-input'}>
                            <label htmlFor="endDate">End Date</label>
                            <input
                                required
                                type={"date"}
                                id={"endDate"}
                                name={"endDate"}
                                placeholder={"Your end date.."}
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            ></input>
                        </div>
                    </div>

                    <label htmlFor="schoolLocation">School Location</label>
                    <input
                        required
                        type={"text"}
                        id={"schoolLocation"}
                        name={"schoolLocation"}
                        placeholder={"Your school location.."}
                        value={schoolLocation}
                        onChange={(e) => setLocation(e.target.value)}
                    ></input>

                </div>
                <div className={"button-container"}>
                    <button
                        className={"submit-button"}
                        type={"submit"}
                    >
                        Submit
                    </button>
                    <button
                        className={"cancel-button"}
                        onClick={() => {
                            elementInfo.actions.resetMenuList(formId, 'education');
                            setFormToggle(false)

                        }}
                    >
                        Cancel
                    </button>
                    {formType === "edit" ? (
                        <button
                            className={"delete-button"}
                            onClick={() => {
                                elementInfo.actions.removeMenuItem(elementInfo.buttonId, elementInfo.actions.setMenuList);
                                elementInfo.actions.removeMenuItem(formId, elementInfo.actions.setMenuList)
                                setFormToggle(false)
                            }}
                        >
                            Delete
                        </button>
                    ) : null}

                </div>
            </form>
        </div>
    );
}




