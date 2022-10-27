import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';
import './Home.css';

const Home = () => {
  const allCourses = useLoaderData();
  return (
    <div className="my-4 mx-8 inter all">
      <h2 className="text-4xl font-bold text-slate-600 roboto">
        Are you ready to steer your ship??? Then welcome to FireShipCodeCamp
      </h2>
      <p className="mt-4 p-4 border-4 border-cyan-700 rounded-lg roboto text-xl">
        FireShipCodeCamp Is here for you . <br />
        Choose your course from below to learn. ⬇{' '}
      </p>
      <div>
        <h2>Total Course: {allCourses.length}</h2>
        <div className="grid d md:grid-cols-3 sm:grid-cols-1 gap-3">
          {allCourses.map((news) => (
            <NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
