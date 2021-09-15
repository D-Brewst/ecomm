import React from 'react';
import { Link } from "react-router-dom";

const Canceled = () => {
    return (
        <div className="canceled">
            <h4>Order Canceled, <Link to="/">click here</Link> to be redirected to the home page.</h4>
        </div>
    )
}

export default Canceled;