import React, { Component } from "react";
import Post from "./components/post";
import Feature from "./components/feature";
import Hello from "./components/hello";

const Main = () => {



    return (
        <main className="page">
            <Hello />
            <Post />
            <section className="page__feature feature">
                <div className="feature__container container">
                    <div className="feature__block">
                        <div className="feature__header">
                            <h3 className="feature__title">
                                Featured works
                            </h3>
                        </div>
                        <div className="feature__body">
                            <Feature post={{
                                photo: "images/Rectangle 30.png",
                                name: "Designing Dashboards",
                                year: "2020",
                                theme: "Dashboard",
                                description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet."
                            }} />
                            <Feature post={{
                                photo: "images/Rectangle 30.png",
                                name: "Designing Dashboards",
                                year: "2020",
                                theme: "Dashboard",
                                description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet."
                            }} />
                        </div>
                    </div>
                </div>
            </section>
        </main >
    )
}

export default Main