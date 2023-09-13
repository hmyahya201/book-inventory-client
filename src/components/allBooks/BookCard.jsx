import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({book}) => {
  const {_id, authorName, bookName, bookPdf, categoryName, imageUrl, metaDescription} = book
  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={imageUrl}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{bookName}</h5>
          <p>Author: {authorName}</p>
          <p className="card-text">{metaDescription}</p>
        </div>
        <div className="card-footer">
          <Link to={`/details/${_id}`} className="text-decoration-none">
            See details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
