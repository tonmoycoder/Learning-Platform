import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPdf from '../../Pages/pdf/ReactPdf';

const SideNav = () => {
    
    const [categories, setCategories] = useState([]);

    useEffect( () =>{
        fetch('https://learning-platform-website-server-side-assignment-tonmoycoder.vercel.app/category')
        .then( res => res.json())
        .then(data => setCategories(data));
    }, [])
    return (
        <div className='text-center mt-12'>
         <div>
            <h4 className='my-5'>All Category: {categories.length}</h4>
            <div >
                
                {
                    categories.map(category => <p className='ml-3 my-5 text-lg rounded border-2 border-sky-500' key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
        <ReactPdf></ReactPdf>
        </div>
    );
};

export default SideNav;