import React, { Component } from "react";
import { addToList, check } from "./counter.jsx";


class BoxButton extends Component {
    constructor(props){
        super(props);
        this.colorNum = 0;
        this.state = {
            color: "white"
        }
        addToList(this);
    }

    getNumber(){
        return this.colorNum;
    }
    changeColor = () => {
        const colorList = ['white','blue','red','green',"yellow"];
        if(this.colorNum === colorList.length - 1){
            this.colorNum = 0;
        }else{
            this.colorNum += 1;
        }
        this.setState({
            color: colorList[this.colorNum]
        });
        check()
    }
    render() {
        return( <button class="BButton" style={{background: this.state.color}}
        onClick={this.changeColor}></button>
        );
    }
}

export default BoxButton;