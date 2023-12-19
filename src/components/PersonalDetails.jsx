import { useState } from 'react'
import '../PersonalDetails.css'
function PersonalDetails() {
    return(<form className="personal-details">
            <label htmlFor="fullName">First name</label>
            <input type ="text" id="fullName" name="fullName" placeholder="Your name.."></input>
        </form>

    )
}

export default PersonalDetails