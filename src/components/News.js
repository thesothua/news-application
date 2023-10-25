import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Loder from "./Loder";

function News(props) {
  let [newsList, setList] = useState({
    apidata: [],
    loder: false,
    page: 1,
    totalresult: 0,
  });

  // props.setProgress(10);

  let newsUpdate = async (page) => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${newsList.page}&pageSize=${props.pagesize}`
    )
      .then((response) => {
        setList({
          apidata: [],
          loder: true,
          page: page,
          totalresult: 0,
        });
        return response.json();
      }) // Parse the response to JSON
      .then((data) => {
        // Do something with the data
        setList({
          apidata: data.articles,
          loder: false,
          page: page,
          totalresult: data.totalResults,
        });
        props.setProgress(100);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    setList({
      page: 1,
      apidata: [],
      loder: true,
      totalresult: 0,
    });

    newsUpdate(newsList.page);

    props.setProgress(10);
    // Use the fetch method to make an API request
    // fetch(
    //   `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${newsList.page}&pageSize=${props.pageSize}`
    // )
    //   .then((response) => {
    //     setList({
    //       apidata: [],
    //       loder: true,
    //       page: 1,
    //       totalresult: 0,
    //     });
    //     return response.json();
    //   }) // Parse the response to JSON
    //   .then((data) => {
    //     // Do something with the data
    //     setList({
    //       apidata: data.articles,
    //       loder: false,
    //       page: 1,
    //       totalresult: data.totalResults,
    //     });
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  }, []);

  let handleNextClick = () => {
    setList({
      page: newsList.page + 1,
      apidata: [],
      loder: true,
      totalresult: 0,
    });

    newsUpdate(newsList.page);
    // if (newsList.page > Math.ceil(newsList.totalresult / props.pageSize)) {
    //   console.log("helo");
    // } else {
    //   fetch(
    //     `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${
    //       newsList.page - 1
    //     }&pageSize=${props.pageSize}`
    //   )
    //     .then((response) => {
    //       setList({
    //         apidata: [],
    //         loder: true,
    //         page: 1,
    //         totalresult: 0,
    //       });
    //       return response.json();
    //     }) // Parse the response to JSON
    //     .then((data) => {
    //       // Do something with the data
    //       setList({
    //         apidata: data.articles,
    //         loder: false,
    //         page: newsList.page + 1,
    //         totalresult: data.totalResults,
    //       });
    //     })
    //     .catch((error) => {
    //       console.error("Error:", error);
    //     });
    // }
  };

  let handlePerviousClick = () => {
    setList({
      page: newsList.page - 1,
      apidata: [],
      loder: true,
      totalresult: 0,
    });
    newsUpdate(newsList.page);
    // fetch(
    //   `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${
    //     newsList.page + 1
    //   }&pageSize=${props.pageSize}`
    // )
    //   .then((response) =>{
    //     setList({
    //       apidata: [],
    //       loder: true,
    //       page: 1,
    //       totalresult: 0,
    //     });
    //     return response.json();
    //   } ) // Parse the response to JSON
    //   .then((data) => {
    //     // Do something with the data
    //     setList({
    //       apidata: data.articles,
    //       loder: false,
    //       page: newsList.page - 1,
    //       totalresult: data.totalResults,
    //     });
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };

  return (
    <div className="container">
      <h2 className="text-dark my-5">
        {props.category.charAt(0).toUpperCase() + props.category.slice(1)} - Top
        Headlines{" "}
      </h2>
      <div className="row">
        {newsList.loder && <Loder />}
        {newsList.apidata?.map((res) => {
          return (
            <NewsItem
              key={res.title}
              title={res.title}
              urlToImage={res.urlToImage}
              description={res.description ? res.description.slice(0, 100) : ""}
              date={res.publishedAt}
            />
          );
        })}
      </div>
      <div className="ro d-flex">
        {/* <span>
          {newsList.page} {Math.ceil(newsList.totalresult / props.pageSize)}
        </span> */}

        <button
          disabled={
            newsList.page < Math.ceil(newsList.totalresult / props.pageSize)
          }
          type="button"
          className="btn btn-dark"
          onClick={handlePerviousClick}
        >
          Pervious
        </button>

        <button
          disabled={
            newsList.page > Math.ceil(newsList.totalresult / props.pageSize)
          }
          type="button"
          className="btn btn-dark mx-2"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default News;
