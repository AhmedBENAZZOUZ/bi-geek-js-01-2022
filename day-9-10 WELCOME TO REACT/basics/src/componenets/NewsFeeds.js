import React from "react";
import Article from "./Article";
export default class NewsFeeds extends React.Component{

    constructor(props){
        super(props);

        this.state = {
          articles : [
            { id:1,  title:'Bootcamp JS', content:'this is an exmlp content', nbrLikes:20 , didLike: false },
            { id: 2, title:'React JS', content:'this is an exmlp content', nbrLikes:18 , didLike: true },
              
          ]
        }
    }


    render(){
        return(
            <div className="container mt-5">
                {
                    this.state.articles.map((a)=>{
                        return(
                            <div key={ a.id } className="row">
                    <div className="col-sm-12">
                        <Article data = {a }  />
                    </div>
                </div>
                        );
                    })
                }
                
            </div>
        );
    }
}