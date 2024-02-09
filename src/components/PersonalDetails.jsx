import React from "react";
import {useState} from "react";
import "../styles/forms.css";

export function PersonalDetails({fullName, email, phone, address, setAddress, setEmail, setFullName, setPhone}) {


    return (
        <div className={"form-container personal-details-div"}>
            <form className="personal-details">
                <label htmlFor="fullName">
                    <span className={"label-text"}> Full name </span>
                </label>
                {/*fullname might be wrong we will see*/}

                {/*fullname might be wrong we will see*/}
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Your name.."
                    onChange={(e) => setFullName(e.target.value)}
                ></input>

                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Your email.."
                    onChange={(e) => setEmail(e.target.value)}
                ></input>

                <label htmlFor="phone">Phone</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Your phone number.."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                ></input>

                <label htmlFor="address">Address</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Your address.."
                    onChange={(e) => setAddress(e.target.value)}
                ></input>
            </form>
        </div>
    );
}
