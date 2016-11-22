import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
}

  render() {
    return (
      <ul className="list-group col-sm4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList - this function is the
  // glue between React and Redux 
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(BookList);
