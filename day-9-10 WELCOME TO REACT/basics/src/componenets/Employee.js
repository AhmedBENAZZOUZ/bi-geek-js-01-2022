function Employee(props){
     

    let name;

    if (props.year > 2010) {
        name = <h3 className="new" >{ props.fullname }</h3>
    } else {
        name = <h3 className="old">{ props.fullname }</h3>
    }

    return(
        <div>
            {
                props.fired === true ?
                <div>
                    <h3 className="danger">FIRED</h3>
                </div>
                :
                <div>
                    { name }
                    <p>{ props.email }</p>
                    <p>{ props.phone }</p>

                </div>
            }
        </div>
        
    );
}

export default Employee;