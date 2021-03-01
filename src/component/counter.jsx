import React, { Component } from "react";

var items = [];
var checklist = [];
var num = 1;
var looked_color=0;
var row_l = 6;

class counter extends Component {
    constructor(props){
        super(props);
        this.timerID = setInterval(
            () => this.changeCount(),
            200
          );
        this.state = {
            number: 1
        }
    }
    changeCount() {
        console.log(items.length);
        console.log(checklist.length);
        this.setState({number: getNum()});
    }
    
    render() {
        return (
            <div class="container">
                <div class="jumbotron">
                    <h1>{this.state.number}</h1>
                </div>
            </div>
        );
    }
}

export function addToList(box){
    items.push(box);
}
export function check() {
    checker(num);
}
function getNum(){
    return num;
}
function check_algo(index) {
    try {
        if(checklist[index]){
            return;
            
        }else if(looked_color === items[index].getNumber()){
            checklist[index] = true;
            check_algo(index + row_l);
            check_algo(index - row_l);
            if( (index + 1) % 6 !== 0){check_algo(index + 1);}
            if( index % 6 !== 0){check_algo(index - 1);}
        }else{
            return;
        }
    }
    catch(err) {
        return;
    }    
}

function checker() {
    checklist = [];
    num = 0;
    for(let i = 0 ; i < items.length; i++){
        checklist.push(false);
    }
    console.log(checklist);
    for(let i = 0 ; i < items.length; i++){
        if(checklist[i] === false){
            num += 1;
            looked_color = items[i].getNumber();
            console.log("alku");
            console.log(checklist.length);
            console.log(items.length);
            console.log(num);
            console.log(looked_color);
            check_algo(i)
        }
    }
    console.log("loppu");
    console.log(checklist);
    console.log(num);
    console.log(looked_color);

}

export default counter;