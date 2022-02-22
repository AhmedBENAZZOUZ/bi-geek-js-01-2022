export default function UserCard(props) {

    return(
        <div className="card mb-3">
                <div className="card-body">
                    <h6>{ props.fullname }</h6>
                    <p className='text-muted'>
                        { props.email } <small className=''>{props.phone}</small>
                    </p>
                </div>

            </div>

    );
}