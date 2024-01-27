import React, {useEffect} from "react";
import {useState} from "react";
import "../forms.css";

export function ExperienceForm({formType, formInfo, formId, elementInfo, setFormToggle}) {
    const [companyName, setCompanyName] = useState("");
    const [position, setPosition] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [workLocation, setLocation] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
            if (formType === "edit") {
                setCompanyName(formInfo.companyName || "");
                setPosition(formInfo.position || "");
                setStartDate(formInfo.startDate || "");
                setEndDate(formInfo.endDate || "");
                setLocation(formInfo.workLocation || "");
                setDescription(formInfo.description || "");
            }
        }
        , [formType, formInfo]);

    return (
        <div className={"form-container"}>
            <form className={"education-form"}

                  onSubmit={(e) => {
                      e.preventDefault();
                  }}>
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

                <div className={"button-container"}>
                    <button
                        className={"submit-button"}
                        type={"submit"}
                        onClick={() => {

                            if (formType === "edit") {
                                elementInfo.actions.editMenuItem(elementInfo.buttonId, formId, {
                                    companyName: companyName,
                                    position: position,
                                    startDate: startDate,
                                    endDate: endDate,
                                    workLocation: workLocation,
                                    description: description,
                                    formType: formType,
                                }, 'experience');
                                elementInfo.actions.removeMenuItem(formId, elementInfo.actions.setMenuList);

                            } else {

                                elementInfo.actions.formSubmit(formId, companyName, {
                                    companyName: companyName,
                                    position: position,
                                    startDate: startDate,
                                    endDate: endDate,
                                    workLocation: workLocation,
                                    description: description,
                                    formType: formType,
                                }, 'experience');
                            }
                            setFormToggle(false);

                        }}
                    >
                        Submit
                    </button>
                    <button
                        className={"cancel-button"}
                        onClick={() => {
                            elementInfo.actions.resetMenuList(formId, 'experience');
                            setFormToggle(false);

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


