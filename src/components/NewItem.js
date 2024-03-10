import React, { Component } from "react";

export class NewItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl?imageUrl:"https://th.bing.com/th/id/OIP.lrbE4OifoZsRx2TmPb0wvwAAAA?w=267&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewItem;
