import React, { useState } from 'react'

const UserForm = () => {
    const initialFormState = {
        firstName: "",
        lastName: ""
    }

    const [formData, setFormData] = useState(initialFormState)

    const handleChange = event => {
        const { target: { name, value } } = event
        setFormData({...formData, [name]: value})
    }

    return (
       <div>
            <h1>Form</h1>
            <label htmlFor="first-name-input">First Name</label>  
            <input id="first-name-input" name="firstName" onChange={handleChange} value={formData.firstName}/> 
            <label htmlFor="last-name-input">Last Name</label>  
            <input id="last-name-input" name="lastName" onChange={handleChange} value={formData.lastName}/> 
       </div>
    )
}

export default UserForm
