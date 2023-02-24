import React from "react";
import "./NewsItem.scss";

const NewsItem = (props) => {
  let { title, description, url, imgUrl, author, name } = props;
  return (
    <div className="my-4">
      <div className="card">
        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <span className="badge text-bg-success">{name}</span>
          <h4 className="card-title">{title}</h4>

          <p className="card-text">{description}</p>
          <div class="d-grid gap-2 col-6 mx-auto">
            <a href={url} target="_blank" className="btn btn-warning">
              Read More
            </a>
          </div>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} updated{" "}
              {/* {new Date(publishedAt).toGMTString()} */}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
