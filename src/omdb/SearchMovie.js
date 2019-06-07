import React from 'react'
import DetailedBook from "../components/DetailedBook";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

export default class SearchMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      keyword: '',
      books: []
  }
  }

  keywordChanged = event =>
      this.setState({keyword: event.target.value})

  proxyUrl = 'https://secure-garden-16347.herokuapp.com/'
  BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'

  searchMovie = () =>
      fetch((this.proxyUrl + this.BASE_URL + this.state.keyword),  {
        // mode: 'no-cors',
        method: 'GET',
        headers:{
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials':true,
          'Access-Control-Allow-Methods':'POST, GET'
        }
      })
  .then(response => response.json())
  .then(response => this.renderMovies(response))

      // console.log(this.state.keyword)


  renderMovies = (response) =>
      this.setState({books: response.items})
      // console.log(Search)

  render() {
    console.log(this.state.books)
    if (this.state.books) {
      return (

          <div>

            <h1>Bookie</h1>
            <h3>Search books</h3>
            <div className="input-group">
              <input value={this.state.keyword}
                     onChange={this.keywordChanged}
                     className="form-control"
                     placeholder="keyword"/>
              <div className="input-group-append">
                <button
                    onClick={this.searchMovie}
                    className="btn btn-primary">
                  Search
                </button>
              </div>
            </div>
            <ul className="list-group">
              {
                this.state.books.map(
                    (book,index) =>
                        <li key={index}
                            className='list-group-item'>
                            <Link to={`/DetailedBook/${book.id}`}>{book.volumeInfo.title}</Link>
                        </li>
                        )
              }
            </ul>

          </div>
      )

    } else{
      return(<div>Loading</div>)

    }



  }
}
