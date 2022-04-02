import React, { Component } from "react";


const Feature = (props) => {

    return (
        <div className="feature__article article">
            <article className="article__item">
                <div className="article__column-photo">
                    <a href="#" className="article__image ibg">
                        <img src={props.post.photo} alt="article image"
                            className="image" />
                    </a>
                </div>
                <div className="article__column-text">
                    <div className="article__name">
                        <a href="#" className="article__title">{props.post.name}</a>
                    </div>
                    <div className="article__info">
                        <div className="article_date date">
                            <p className="date__post">{props.post.year}</p>
                        </div>
                        <div className="article__theme theme">
                            <p className="theme-name">{props.post.theme}</p>
                        </div>
                    </div>
                    <div className="article__description">
                        <p className="article__text">{props.post.description}</p>
                    </div>
                </div>
            </article>
        </div>
    )

}

export default Feature