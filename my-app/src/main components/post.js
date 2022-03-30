import React, {Component} from "react";


class Post extends Component {
    render() {
        return (
            <section className="page__post post">
            <div className="post__container container">
                <div className="post__body">
                    <div className="post__head">
                        <p className="post__title">Recent posts</p>
                    </div>
                    <div className="post__more">
                        <a href="#" className="post__more-link">View all</a>
                    </div>
                    <div className="post__article">
                        <div className="post__column">
                            <article className="post__item item">
                                <div className="item__name">
                                    <a href="#" className="item__link">
                                        <div className="item__title">Making a design system from scratch</div>
                                    </a>
                                </div>
                                <div className="item__info">
                                    <div className="item__date">
                                        <p className="item__date-text">12 Feb 2020</p>
                                    </div>
                                    <div className="item__theme">
                                        <p className="item__theme-text">Design, Pattern</p>
                                    </div>
                                </div>
                                <div className="item__body ">
                                    <p className="item__body-text">Amet minim mollit non deserunt ullamco est sit aliqua
                                        dolor
                                        do amet sint. Velit officia consequat duis enim velit mollit. Exercitation
                                        veniam consequat sunt nostrud amet. </p>
                                </div>
                            </article>
                        </div>
                        <div className="post__column">
                            <article className="post__item item">
                                <div className="item__name">
                                    <a href="#" className="item__link">
                                        <div className="item__title">Making a design system from scratch</div>
                                    </a>
                                </div>
                                <div className="item__info">
                                    <div className="item__date">
                                        <p className="item__date-text">12 Feb 2020</p>
                                    </div>
                                    <div className="item__theme">
                                        <p className="item__theme-text">Design, Pattern</p>
                                    </div>
                                </div>
                                <div className="item__body ">
                                    <p className="item__body-text">Amet minim mollit non deserunt ullamco est sit aliqua
                                        dolor
                                        do amet sint. Velit officia consequat duis enim velit mollit. Exercitation
                                        veniam consequat sunt nostrud amet.</p>
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

export default Post