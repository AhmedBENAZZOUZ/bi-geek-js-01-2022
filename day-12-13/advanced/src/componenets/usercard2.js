export default function UserCode2(props) {
    return(
        <div className="card mt-5">
            <div className="card-body ">
                <h6>{ props.fullname }</h6>
                <p className="text-muted">
                    { props.email } <small> { props.phone }</small> 
                </p>
            </div>
        </div>
    );
}