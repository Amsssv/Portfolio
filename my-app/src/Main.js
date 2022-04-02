import React, { Component, useState, useEffect } from "react";
import Post from "./components/post";
import Hello from "./components/hello";
import FeatureList from "./components/featureList";
import axios from "axios";

const Main = () => {
    const [posts, setPost] = useState([
        {
            photo: "./images/Rectangle 30.png",
            name: "Designing Dashboards",
            year: "2020",
            theme: "Dashboard",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet."
        },
        {
            photo: "./images/Rectangle 30.png",
            name: "Designing Dashboards",
            year: "2020",
            theme: "Dashboard",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet."
        },
    ])

    useEffect(() => {
        fetchPosts()
    }, [])

    async function fetchPosts() {
        const responce = await axios.get('http://localhost:3000/list')
        setPost(responce.data)
    }

    return (
        <main className="page">
            <Hello />
            <Post />
            <FeatureList posts={posts} />
        </main >
    )
}

export default Main