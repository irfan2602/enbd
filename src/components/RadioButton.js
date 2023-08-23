import React, { useState } from 'react'

const RadioButton = () => {
    const [formData, setFormData] = useState({
        isAgree: false,
        gender: 'Male'
    })
    const handleChange = (e) => {
        const target = e.target
        const name = target.name
        const value = target.type === "checkbox" ? target.checked : target.value
        setFormData({
            ...formData,
            [name]: value
        })
    }
    return (
        <div>

            <label>Male</label>
            <input type='radio' name='gender' value='Male' checked={formData.gender === "Male"} onChange={handleChange} />
            <label>Female</label>
            <input type='radio' name='gender' value='Female' checked={formData.gender === "Female"} onChange={handleChange} />
            <h4>Gender: {formData.gender} </h4>
            <hr />
            <table style={{ border: '2px solid black', marginLeft: '5px' }}>
                <tr style={{ border: '2px solid black', marginLeft: '5px' }}>
                    <th style={{ border: '2px solid black', marginLeft: '5px' }}> {formData.gender === "Male" ? "Irfan" : "Farhan"} </th>
                    <th style={{ border: '2px solid black', marginLeft: '5px' }}> {formData.gender === "Male" ? "Irfan" : "Farhan"} </th>
                </tr>
                <tr style={{ border: '2px solid black', marginLeft: '5px' }}>
                    <td style={{ border: '2px solid black', marginLeft: '5px' }}>Irfan</td>
                    <td style={{ border: '2px solid black', marginLeft: '5px' }}>Ranchi</td>
                </tr>
                <tr style={{ border: '2px solid black', marginLeft: '5px' }}>
                    <td style={{ border: '2px solid black', marginLeft: '5px' }}>Farhan</td>
                    <td style={{ border: '2px solid black', marginLeft: '5px' }}>Ranchi</td>
                </tr>
            </table>
            <hr />
            <h4>Handling CheckBox :</h4>
            <label>Are You Agree : </label>
            <input type='checkbox' name='isAgree' checked={formData.isAgree} onChange={handleChange} />
            <h4>{formData.isAgree ? "Yes" : "No"}</h4>
        </div>
    )
}

export default RadioButton