import React, { useEffect, useRef, useState } from "react";
import News from "./News";

function NewsApp() {
  const apiKey = "4f8e2315e77a4cd896e90f37a2de2df8";

  const [newsList, setNewsList] = useState([]);
  const [query, setQuery] = useState("tesla");
  const textInputRef = useRef();

  const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2023-02-27&sortBy=publishedAt&apiKey=${apiKey}`;

  useEffect(() => {
    fetchData();
  }, [query]);

  async function fetchData() {
    try {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();

      /* let article = jsonData.articles; */
      setNewsList(jsonData.articles);
    } catch (error) {
      alert(error, "error occured");
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    const inputText = textInputRef.current.value;
    setQuery(inputText);
  }

  /* news category  */
  function changeCategory(event) {
    const category = event.target.innerHTML;
    setQuery(category);
    console.log(event.target.innerHTML);
  }

  const classStyle = {
    width: "95%",
    marginInline: "auto",
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    rowGap: "55px",
    columnGap: "35px",
    padding: "25px",
  };
  const formStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "20px",
    marginBottom: "20px",
  };
  return (
    <div>
      <h1
        style={{
          font: "monospace",
          fontSize: "3rem",
          marginLeft: "80px",
          marginTop: "20px",
          textAlign: "left",
          color: "#fff",
        }}
      >
        Newz Daily ...
      </h1>
      <form style={formStyle} onSubmit={handleSubmit}>
        <input
          style={{
            padding: "5px 20px",
            width: "30%",
            height: "2.8rem ",
            border: "none",
            fontSize: "1.15rem",
          }}
          type="text"
          placeholder="search"
          ref={textInputRef}
        />
        <input
          style={{
            padding: "5px 20px",
            height: "2.8rem ",
            backgroundColor: "black",
            color: "white",
            border: "none",
            borderLeft: "none",
            cursor: "pointer",
            fontSize: "1.1rem",
          }}
          type="submit"
          onClick={handleSubmit}
          value="Search"
        />
      </form>
      <div
        style={{
          display: "flex",
          gap: "35px",
          justifyContent: "space-evenly",
          padding: "20px",
        }}
      >
        <h3
          onClick={changeCategory}
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "5px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Sports
        </h3>
        <h3
          onClick={changeCategory}
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "5px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          India
        </h3>
        <h3
          onClick={changeCategory}
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "5px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Science
        </h3>
        <h3
          onClick={changeCategory}
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "5px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Technology
        </h3>
        <h3
          onClick={changeCategory}
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "5px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Business
        </h3>
        <h3
          onClick={changeCategory}
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "5px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Politics
        </h3>
        <h3
          onClick={changeCategory}
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "5px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Movies
        </h3>
      </div>
      <div style={classStyle}>
        {newsList.map((news) => {
          return <News key={news.url} news={news} />;
        })}
      </div>
    </div>
  );
}
export default NewsApp;
