import React, {useState } from "react";
import Post from "./components/post";
import Hello from "./components/hello";
import FeatureList from "./components/featureList";


const Main = () => {
    return (
        <main className="page">
            <Hello />
            <Post />
            <FeatureList />
        </main >
    )
}

export default Main