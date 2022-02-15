import React from "react";

export default class LikeBtn extends React.Component{
    constructor(props){
        super(props);

        this.state = {

            numberOfLikes : props.data.nbrLikes,
            didLike : props.data.didLike
        }
    }

    like(){
        console.log("about to increment number of likes...");

        // NEVER MODIFY STATE DIRECTLY !!!!!

      

        this.setState({
            numberOfLikes : this.state.didLike === false ? ( this.state.numberOfLikes +1 ) : ( this.state.numberOfLikes  - 1 ),
            didLike : ! this.state.didLike
        })

        console.log(this.state);
    }


    render(){
        return (
            <button  onClick={ ()=>{
                this.like();

            } }  > { this.state.numberOfLikes } { this.state.didLike === false ? 'Like' : 'Dislike' } </button>
        );
    }




}