import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CheckOut = () => {
  const news = useLoaderData();
  const { title, details, image_url, category_id } = news;
  return (
    <div className="grid custom_design_card">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image_url} alt="Course_picture" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <Link to={`/category/${category_id}`}>
          <button className="btn btn-active btn-primary">see All course of this category</button>
                </Link>
          <div className="card-actions"></div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
