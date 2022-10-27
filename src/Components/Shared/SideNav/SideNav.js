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
        <div>
         <div>
            <h4>All Category: {categories.length}</h4>
            <div>
                
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
           
        </div>
    );
};

export default SideNav;