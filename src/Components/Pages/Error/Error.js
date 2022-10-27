import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
    return (
        <div className="text-center flex items-center justify-center h-full mt-5 mb-8">
            <div>
            <h1 className='my-6'>Page not found</h1>
            <img className='bg_pic' src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7888.jpg?w=2000" alt="" />
            <p className='my-5'>Go to
            <button className="btn btn-active"><Link to="/">home</Link></button></p>
            </div>
        </div>
    );
};

export default Error;