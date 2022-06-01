import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <h2>Not found</h2>
            <Link to='/' >Back to Home</Link>
        </div>
    )
}

export default NotFoundPage;
