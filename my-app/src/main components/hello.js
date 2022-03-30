import React, {Component} from "react";
import Image from "./img/Hello/photo_2022-02-18_23-00-00.jpg";


class Hello extends Component {
    render() {
        return (
            <section className="page__hello hello">
            <div className="hello__container container">
                <div className="hello__body">
                    <div className="hello__resume resume">
                        <div className="resume__text">
                            <h1 className="resume__title">Hi, I am John,
                                Creative Technologist</h1>
                            <p className="resume__description">Amet minim mollit non deserunt ullamco est sit aliqua
                                dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation
                                veniam consequat sunt nostrud amet.</p>
                        </div>
                        <div className="resume__button">
                            <a href="./resume/resume.pdf" download className="resume__link">Download Resume</a>
                        </div>
                    </div>
                    <div className="hello__image">
                        <img srcSet={Image} alt="user photo" className="image" />
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

export default Hello