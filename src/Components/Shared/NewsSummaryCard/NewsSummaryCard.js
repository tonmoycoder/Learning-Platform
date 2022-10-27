import React from 'react';
import { Link } from 'react-router-dom';
import './NewsSummaryCard.css';

const NewsSummaryCard = ({ news }) => {
  const { _id, title, author, details, image_url} = news;
  return (
    <div className="grid custom_design_card">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image_url} alt="Course_picture" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>
            {details.length > 250 ? (
              <>
                {details.slice(0, 250) + '...'} <Link to={`/courses/${_id}`}>Read More</Link>{' '}
              </>
            ) : (
              details
            )}
          </p>
          <div className="divider">Publish details</div>
          <div>
                        <p className='mb-0'>{author?.name}</p>
                        <p>{author?.published_date}</p>
                    </div>
          <div className="card-actions">
            <Link to={`/courses/${_id}`} className="btn btn-primary">Checkout</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSummaryCard;
