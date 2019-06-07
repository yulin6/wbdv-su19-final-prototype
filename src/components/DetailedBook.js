import React from 'react'
import {Link} from "react-router-dom";


var wtf = 0

class DetailedBook extends React.Component {

  constructor(props) {
    super(props);
    const pathname = window.location.pathname
    const paths = pathname.split('/')
    this.bookId = paths[2]
    console.log(this.bookId + " in detail")
    // this.books = props.books
    this.searchBook()
    this.state = {
      book: undefined
    }
  }

  proxyUrl = 'https://secure-garden-16347.herokuapp.com/'
  BASE_URL = 'https://www.googleapis.com/books/v1/volumes/'

  searchBook = () =>
      fetch((this.proxyUrl+ this.BASE_URL + this.bookId),  {
        // mode: 'no-cors',
        method: 'GET',
        headers:{
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials':true,
          'Access-Control-Allow-Methods':'POST, GET'
        }
      })
      .then(response => response.json())
      .then(response => this.renderBook(response))

  renderBook = (response) =>
  // {console.log(response)}
      this.setState({book: response})
  //
  render() {
    // {
    //   this.searchBook()
    // }
    console.log(this.state.book, typeof(this.state.book))
    if(typeof(this.state.book) === 'undefined') return null;
    return (<div>
      <Link to={'/'}>Home</Link>
      <h1>{(this.state.book.volumeInfo.title)}</h1>
      {/*{console.log(this.state.book.volumeInfo.title, "Hey you")}*/}
      <img src={this.state.book.volumeInfo.imageLinks.small} alt='image not found'/>
      {/*{console.log(this.state.accessInfo)}*/}
      <a href={this.state.book.accessInfo.webReaderLink}>Read Online</a>



    </div>)
  }

}

export default DetailedBook;
