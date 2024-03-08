import React, { Component } from 'react'
import NewItem from './NewItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
            <div className="col-md-4">
                <NewItem title="myTitle" description="myDescription" imageUrl = "https://cdn.24.co.za/files/Cms/General/d/10743/97d776dc91734e98906c0e1b7f3b1afa.jpg" newsUrl = "TODO"/>
            </div>
            <div className="col-md-4">
                <NewItem title="myTitle" description="myDescription"/>
            </div>
            <div className="col-md-4">
                <NewItem title="myTitle" description="myDescription"/>
            </div>
        </div>
      </div>
    )
  }
}

export default News
