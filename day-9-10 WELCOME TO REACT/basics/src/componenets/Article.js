import React from "react";
import LikeBtn from "./LikeBtn";
export default class Article extends React.Component{

    constructor(props){
        super(props);

        this.state = {
          data : props.data
        }
    }


    render(){
        return(
            <div className="card mb-3">
                <div className="card-body">
                    <h3>{ this.state.data.title }</h3>
                    <p>
                        { this.state.data.content }
                    </p>
                    <LikeBtn data= { this.state.data} />
                </div>
            </div>
        );
    }
}