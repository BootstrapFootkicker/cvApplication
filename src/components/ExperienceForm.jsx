import React, {useEffect} from "react";
import {useState} from "react";
import "../styles/forms.css";

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
            <form className={"experience-form"}

                  onSubmit={(e) => {
                      e.preventDefault();
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


                  }}>
                <div className={"input-group"}>
                    <label htmlFor="companyName">Company Name</label>
                    <input
                        required
                        type={"text"}
                        id={"companyName"}
                        name={"companyName"}
                        placeholder={"Your company name.."}
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                    ></input>

                    <label htmlFor="position">Position</label>
                    <input
                        required
                        type={"text"}
                        id={"position"}
                        name={"position"}
                        placeholder={"Your position.."}
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
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

                    <label htmlFor="workLocation">Work Location</label>
                    <input
                        required
                        type={"text"}
                        id={"workLocation"}
                        name={"workLocation"}
                        placeholder={"Your work location.."}
                        value={workLocation}
                        onChange={(e) => setLocation(e.target.value)}
                    ></input>

                    <label htmlFor="description">Description</label>
                    <input
                        required
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


