import React, { Component } from "react";
import NewItem from "./NewItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=0739978944434df2a1c4dd5f5431becd"
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles})
  }

  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewItem
                title={element.title?element.title.slice(0,45):""}
                description={element.description?element.description.slice(0,90):""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>;
          })}
        </div>
      </div>
    );
  }
}

export default News;
