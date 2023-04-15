import React from "react";
import "./news.css";

function News({ news }) {
  return (
    <div className="newsCard">
      <section>
        <img src={news.urlToImage} alt={news.title} />
        <section className="author-name">
          <h2 className="newsName">{news.source.name}</h2>
          <h3 className="author">{news.author}</h3>
        </section>
        <h1 className="title">{news.title}</h1>
      </section>
      <h4 className="description">{news.description}</h4>
      <p className="content">{news.content}</p>
      <section className="btn-section">
        <button
          className="btn"
          onClick={() => {
            window.open(news.url);
          }}
        >
          Read More
        </button>
      </section>
    </div>
  );
}

export default News;
