import React from "react"
import Submit from "./submitComponent"

import { default as logo } from "../images/logo.svg"
import { default as heroDesktop } from "../images/hero-desktop.jpg"
import { default as heroMobile} from "../images/hero-mobile.jpg"

class Card extends React.Component {
    render() {
        return (
            <section className="cardcon">
                <section className="card">
                    <article className="card__details">
                        <img className="card__logo" src={logo}  alt=""/>
                        <h2 className="card__title"><span>We´re</span>coming soon</h2>
                        <p className="card__paragraph">Hello fellow shoppers! We're currently building our new fashion store.
                            Add your email below to stay up-to-date with announcements and our launch deals.</p>
                        <Submit />
                    </article>

                    
                    <img className="card__image" src={heroDesktop} alt="" />
                    <img className="card__image--mobile" src={heroMobile} alt="" />
                    <img className="card__logo card__logo--mobile" src={logo} alt="" />
                </section>
            </section>
        );
    }
}

export default Card