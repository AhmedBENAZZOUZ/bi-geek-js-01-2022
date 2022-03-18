import React from 'react';
import { Link } from 'react-router-dom';
import AsideMenu from '../components/AsideMenu';
import Footer from '../components/footer';
import HedaerBloc from '../components/Header';

export default class ClientsVehiculesList extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            vehicules : []
        }
       
    }


    initDAta(){
        /*var myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.getItem('token') );
        myHeaders.append("Content-Type", "application/json");
 
        var requestOptions = {
        method: 'GET',
        headers: myHeaders, 
        redirect: 'follow'
        };

        fetch("http://localhost:8080/api/clients/list", requestOptions)
        .then(response => response.json())
        .then(result =>{
             this.setState({
                 clients: result
             })
        })
        .catch(error => {
            this.setState({
                errMSG: 'Network error.'
            })
        });*/
    }

    checkUserAuth() {
        if (localStorage.getItem('token') == null) {
            this.props.history.push('/auth');
        }
    }
    componentDidMount() {
        this.checkUserAuth();
        this.initDAta();

    }

    render() {
        return (
            <div className="App">

                <HedaerBloc />


                <AsideMenu />

                { /* End Sidebar*/}

                <main id="main" className="main">
                    <div class="pagetitle">
                        <h1>Vechiules</h1>

                    </div>



                    <section class="section">
                        <div class="row">
                            <div class="col-lg-12">

                                <div class="card">
                                    <div class="card-body">
                                        <div className="d-flex justify-content-between">
                                            <h5 class="card-title">Vechiules list</h5>

                                            <Link to={ '/clients/add' } className="btn btn-success add-btn" ><i className='bx bxs-plus-circle'></i> Add new</Link>
                                        </div>
                                        

                                        <div className="datatable table-responsive">
                                        <table className='table'>
                                            <tr>
                                                <th>firstname</th>
                                                
                                            </tr>

                                            <tbody>
                                                 
                                            </tbody>
                                        </table>
                                        </div>

 

                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>


                </main>{ /* End #main */}

                { /* ======= Footer ======= */}
                <Footer />

                { /* End Footer */}

                <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
            </div>

        );
    }


}


