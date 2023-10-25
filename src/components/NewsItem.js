import React from "react";

function NewsItem(props) {

  // console.log(props)

  return (
    <div className="col-md-6 my-2">
      <div className="media d-flex">
        <img
          src={props.urlToImage}
          className="mr-3"
          alt=""
          style={{ width: "100px", height: `3rem`, marginTop: `4px` }}
        />
        <div className="media-body">
          <h6 className="mt-0">{props.title}</h6>
          
            <small style={{ lineHeight: "1.2", fontSize: `10px` }}>
              {props.description}
            </small>
            <br />
        
          <span><small>{ new Date(props.date).toDateString()}</small></span>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
