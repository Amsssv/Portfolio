import React, {Component} from "react";
import Hello from "./main components/hello";
import Post from "./main components/post";
import Feature from "./main components/feature";

class Main extends Component {
    render() {
        return (
            <main className="page">
                <Hello />
                <Post />
                <Feature />
            </main>
        )
    }
}

export default Main