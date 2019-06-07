
import React from 'react'

import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

import SearchMovie from "../omdb/SearchMovie";
import DetailedBook from "./DetailedBook";

export default class Whiteboard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (

        <Router>
          {/*<div className="container">*/}
          {/*  <h1>WhiteBoard</h1>*/}
          {/*  <Link to="/omdb">Omdb</Link> |*/}
          {/*  <Link to="/course-list">List</Link> |*/}
          {/*  <Link to="/course-grid">Grid</Link> |*/}
          {/*  <Link to="/course-editor">Editor</Link>*/}
            <Route
                exact path="/"
                component={SearchMovie}
            />

          {/*<SearchMovie/>*/}


          <Route
              path="/DetailedBook/:bookId"
              render={() => <DetailedBook/>}/>

            {/*<Route*/}
            {/*    path="/course-grid"*/}
            {/*    render={() => <CourseGrid courses={courses}/>}/>*/}
            {/*<Route*/}
            {/*    path="/course-list"*/}
            {/*    render={() => <CourseList courses={courses}/>}/>*/}
            {/*<Route*/}
            {/*    path="/course-editor/:courseId"*/}
            {/*    render={props => <CourseEditor courses={courses}/>}*/}
            {/*    // component={CourseEditor}*/}
            {/*/>*/}
          {/*</div>*/}
        </Router>
    )
  }
}
