
import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react';
import NavBar from '../componenets/NavBar';
import UserCode2 from '../componenets/usercard2';




export default class HomePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
          data:[],
          haserror:false,
          isloading:false, 
    }
  }
  getData(){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
        .then(response => response.json())
        .then(result => {
            this.setState({
                data :result
            })
        } )
        .catch(error => {
            this.setState({
                haserror:true
            })
        }
        ).finally(()=>{
            this.setState({
                isloading:false
            })
        })

  }
  componentDidMount(){
    this.getData();
}

  render(){
    return(
      <div>
          <NavBar />
          <div className="container mt-5">
            <h6>Users :</h6>
            {
                this.state.isloading === true ?
                <div className='text-center mt-5'>
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                :
                <div></div>
            }
            {
                this.state.data.map((user)=>{
                    return(
                        <UserCode2 key={ user.id } fullname={ user.name } email={ user.email } phone={ user.phone } />
                    );
                })
            }

            {
                this.state.haserror === true ?
                <div className='alert alert-danger'>{ 'Something went wrong, please try again.' }  <span className='text-primary' onClick={ ()=>{
                    this.getData();
                } }>refresh</span>  </div>
                :
                <div></div>
            }
            
            
          </div>
      </div>
    );
  }
};
