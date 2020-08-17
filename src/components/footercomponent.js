import React, { useState } from "react"
import Title from "./titlecomponent"
import Logo from "../images/logo.png"
import axios from 'axios';

const Location = () => {
  const [name, setname] = useState()
  const [email, setemail] = useState()
  const [phone, setphone] = useState()
  const handelingFormdata = e => {
    e.preventDefault()
    let client_name = e.target.elements.name.value
    let client_email = e.target.elements.email.value
    let phonenumber = e.target.elements.phone.value
    if (phonenumber.length > 10) {
      alert("Must enter a Valid Number")
    }
    const finalData = {
      Client_name: client_name,
      Client_email: client_email,
      Client_phone_number: phonenumber,
      Project_Name: " Waterford",
    }
  

    axios
      .post(" https://wmy59z5nb1.execute-api.us-east-1.amazonaws.com/prod/send_email_to_livexcellence", finalData)
      .then(res => {
        console.log(res)
        alert("You will now be redirected.")
        window.location = "/download/"
      })
      .catch(e => {
        console.log(e)
      })
  }
  return (
    <div className="locationPart">
      <div>
        <div style={{ textAlign: "center" }}>
          <Title title=" Waterford Location" />
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15551.365760983776!2d77.7421819!3d12.9819914!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc1e3bb2948afbff4!2sPrestige%20Waterford!5e0!3m2!1sen!2sin!4v1597550473653!5m2!1sen!2sin"
          width="100%"
          height="483"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
          style={{border:'none'}}
        ></iframe>
      </div>
      <div>
        <div style={{ textAlign: "center" }}>
          <Title title="Leave Us a Message" />
        </div>
        <div className="aliginingForm">
          <div style={{ textAlign: "center" }}>
            <img
              src={Logo}
              alt=" Waterford"
              width="26%"
              style={{ height: "90px", objectFit:'contain' }}
            />
          </div>
          <div>
            <form onSubmit={handelingFormdata} name="main_forma" className='form-groupab' method="post">
              <div>
                <br />
                <div className="field">
                  <label className="label">Name:</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="name"
                      required
                      value={name}
                      placeholder="e.g Alex Smith"
                    />
                  </div>
                </div>
                <br/>
                <div className="field">
                  <label className="label">Email:</label>
                  <div className="control">
                    <input
                      className="input"
                      type="email"
                      name="email"
                      required
                      value={email}
                      placeholder="e.g. alexsmith@gmail.com"
                    />
                  </div>
                </div>
                <br/>
                <div className="field">
                  <label className="label">Phone Number:</label>
                       
                       
                      <input
                        className="input"
                        type="number"
                        name="phone"
                        required
                        minLength="10"
                        maxLength="20"
                        title="Must have 10 digit numbers"
                        pattern="^\d{10}$"
                        value={phone}
                        placeholder="e.g. 999999999"
                      />
                
                  
                </div>
                <br />
                <br/>
                <div style={{ textAlign: "center" }}>
                  <button
                    className="prestigecopyabcd"
                    name="submit"
                    type="submit"
                    value="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location
