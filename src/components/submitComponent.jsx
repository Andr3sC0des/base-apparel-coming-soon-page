import React from "react"
import { default as logo } from '../images/icon-arrow.svg';
import { default as iconerror } from "../images/icon-error.svg"

class Submit extends React.Component {
    
    ValidationForm(e) {
        const emailForm = document.forms["EmailForm"]["email"]
        const iconError = document.querySelector(".form__iconerror")
        const labelError = document.querySelector(".form__labelerror")

        if (emailForm.value === "") {
            iconError.classList.add("form__iconerror--active")
            labelError.classList.add("form__labelerror--active")
            emailForm.focus();
            e.preventDefault()
            return false;
          }
          if (emailForm.value.indexOf("@", 0) < 0) {
            iconError.classList.add("form__iconerror--active")
            labelError.classList.add("form__labelerror--active")
            emailForm.focus();
            e.preventDefault()
            return false;
          }
          if (emailForm.value.indexOf(".", 0) < 0) {
            iconError.classList.add("form__iconerror--active")
            labelError.classList.add("form__labelerror--active")
            emailForm.focus();
            e.preventDefault()
            return false;
          }
          return true;
    }
    render() {
        return (
            <form action="/" onSubmit={this.ValidationForm} name="EmailForm" className="form">
                <input name="email" className="form__input" type="text" placeholder="Email Address" ></input>
                <img className="form__iconerror" src={iconerror} alt=""/>
                <span className="form__labelerror">Please provide a valid email</span>
                <button type="submit" className="form__button"><img src={logo} alt="" /></button>
            </form>
        );
    }
}

export default Submit