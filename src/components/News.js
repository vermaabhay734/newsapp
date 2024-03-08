import React, { Component } from 'react'
import NewItem from './NewItem'

export class News extends Component {
  render() {
    return (
      <div>
        This is a news Component.
        <NewItem/>
        <NewItem/>
        <NewItem/>
        <NewItem/>
      </div>
    )
  }
}

export default News
