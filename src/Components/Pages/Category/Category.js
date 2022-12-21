import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';
import './Category.css'

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <div>
            <h2 className='text-center my-4 text-2xl'>Total Courses in this category:<em> {categoryNews.length}</em></h2>
            <div className='ml-8 grid d md:grid-cols-3 sm:grid-cols-1 gap-3'>{
                categoryNews.map(news =><NewsSummaryCard
                    key={news._id}
                    news={news}
                ></NewsSummaryCard>)
            }
            </div>
        </div>
        </div>
    );
};

export default Category;