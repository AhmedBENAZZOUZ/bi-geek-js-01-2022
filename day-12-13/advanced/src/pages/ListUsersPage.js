
import React from 'react';
 
import NavBar from '../componenets/NavBar';
import UserCard from '../componenets/UserCard';



export default class ListUsersPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
         data : [],
         hasError: false,
         isLoading : false
    }
  }


  getData(){
        var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      this.setState({
          isLoading : true,
          hasError: false
      })
      
      fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
        .then(response => response.json())
        .then(result =>{ 
            console.log(result)
            
            this.setState({
                data: result,
                
            })
        
        })
        .catch(error =>{
            this.setState({
                hasError:true,
                 
            })
        }).finally(()=>{
            this.setState({
                isLoading: false
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
            <h3>Users list:</h3>


            {
                this.state.isLoading === true ?
                <div className='text-center mt-5'>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                :
                <div></div>
            }

            {
                this.state.data.map((user)=>{
                    return(<UserCard key={user.id} fullname={ user.name } email={ user.email } phone={ user.phone } />  );
                })
            }


            {
                this.state.hasError === true ?
                <div className='alert alert-danger'>{ 'Something went wrong, please try again.' }  <span className='text-primary' onClick={ ()=>{
                    this.getData();
                } }>refrech</span>  </div>
                :
                <div></div>
            }

            


        </div>
      </div>
    );
  }
};
