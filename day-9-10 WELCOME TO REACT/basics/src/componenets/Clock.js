import React from "react";
export default class Clock extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            hours:new Date().getHours(),
            minutes:new Date().getMinutes(),
            seconds:new Date().getSeconds()
        }
    }

    initClock(){
        setInterval(()=>{
            this.setState({
                hours:new Date().getHours(),
                minutes:new Date().getMinutes(),
                seconds:new Date().getSeconds()
            })
        },1000)
    }

    
    componentDidMount(){
        console.log("did mount");

        this.initClock();
    }

    componentWillUnmount(){
        console.log("will unmount");
    }


    componentDidUpdate(){
        console.log("did update");
    }

    componentDidCatch(){
        console.log("did catch");
    }

    render(){
        return(
            <div>
                <p> <strong> {this.state.hours} </strong> : <strong> {this.state.minutes} </strong> : <strong> {this.state.seconds} </strong>   </p>
            </div>
        );
    }
}