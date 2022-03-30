import React, {Component} from "react";

class Feature extends Component {
    render() {
        return (
            <section className="page__feature feature">
                <div className="feature__container container">
                    <div className="feature__block">
                        <div className="feature__header">
                            <h3 className="feature__title">
                                Featured works
                            </h3>
                        </div>
                        <div className="feature__body">
                            <div className="feature__article article">
                                <article className="article__item">
                                    <div className="article__column-photo">
                                        <a href="#" className="article__image ibg">
                                            <img srcSet='' alt="article image"
                                                className="image" />
                                        </a>
                                    </div>
                                    <div className="article__column-text">
                                        <div className="article__name">
                                            <a href="#" className="article__title">Designing Dashboards</a>
                                        </div>
                                        <div className="article__info">
                                            <div className="article_date date">
                                                <p className="date__post">2020</p>
                                            </div>
                                            <div className="article__theme theme">
                                                <p className="theme-name">Dashboard</p>
                                            </div>
                                        </div>
                                        <div className="article__description">
                                            <p className="article__text">Amet minim mollit non deserunt ullamco est sit
                                                aliqua dolor do amet sint. Velit officia consequat duis enim velit
                                                mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="feature__article article">
                                <article className="article__item">
                                    <div className="article__column-photo">
                                        <a href="#" className="article__image ibg">
                                            <img srcSet='' alt="article image" 
                                                className="image" />
                                        </a>
                                    </div>
                                    <div className="article__column-text">
                                        <div className="article__name">
                                            <a href="#" className="article__title">Vibrant Portraits of 2020</a>
                                        </div>
                                        <div className="article__info">
                                            <div className="article_date date">
                                                <p className="date__post">2018</p>
                                            </div>
                                            <div className="article__theme theme">
                                                <p className="theme-name">Illustration</p>
                                            </div>
                                        </div>
                                        <div className="article__description">
                                            <p className="article__text">Amet minim mollit non deserunt ullamco est sit
                                                aliqua dolor do amet sint. Velit officia consequat duis enim velit
                                                mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="feature__article article">
                                <article className="article__item">
                                    <div className="article__column-photo">
                                        <a href="#" className="article__image ibg">
                                            <img srcSet='' alt="article image" 
                                                className="image" />
                                        </a>
                                    </div>
                                    <div className="article__column-text">
                                        <div className="article__name">
                                            <a href="#" className="article__title">Illustration</a>
                                        </div>
                                        <div className="article__info">
                                            <div className="article_date date">
                                                <p className="date__post">2020</p>
                                            </div>
                                            <div className="article__theme theme">
                                                <p className="theme-name">Typography</p>
                                            </div>
                                        </div>
                                        <div className="article__description">
                                            <p className="article__text">Amet minim mollit non deserunt ullamco est sit
                                                aliqua dolor do amet sint. Velit officia consequat duis enim velit
                                                mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Feature