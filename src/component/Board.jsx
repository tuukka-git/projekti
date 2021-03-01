import React, { Component } from "react";
import Row from "./row";
import Counter from "./counter";

class Board extends Component {
    render() {
        return (
            <div>
            <div class="row justify-content-center">
                <Counter/>
            </div>
            <div>
                <Row/>
                <Row/>
                <Row/>
                <Row/>
                <Row/>
                <Row/>
                <Row/>
                <Row/>
            </div>
            </div>
        );
    }
}
export default Board;