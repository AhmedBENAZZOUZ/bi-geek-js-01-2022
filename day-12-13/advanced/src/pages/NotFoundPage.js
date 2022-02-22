import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <div className="text-center mt-5">
            <h1>Oups, Not found</h1>
            <p>Looks like you are using an old link</p>
            <Link to={ '/' } >Back to home</Link>
        </div>
    );
}