import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
    return (
        <div>
            <h1>Page not found</h1>
            <p>Go to<Link to="/">home</Link></p>
        </div>
    );
};

export default Error;