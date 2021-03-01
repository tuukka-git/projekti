import React, { Component } from "react";
import BoxButton from "./BoxButton";

class row extends Component {
    render() {
        return (
            <div class="row justify-content-center">
                <BoxButton/>
                <BoxButton/>
                <BoxButton/>
                <BoxButton/>
                <BoxButton/>
                <BoxButton/>
            </div>
        );
    }
}

export default row;