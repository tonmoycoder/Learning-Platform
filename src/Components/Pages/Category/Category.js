import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';
import './Category.css'

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <div>
            <h2>This is Category has news: {categoryNews.length}</h2>
            {
                categoryNews.map(news =><NewsSummaryCard
                    key={news._id}
                    news={news}
                ></NewsSummaryCard>)
            }
        </div>
        </div>
    );
};

export default Category;