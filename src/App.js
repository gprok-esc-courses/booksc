import React from "react";
import BookTitle from "./components/BookTitle"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      pages: 'N/A',
      image: '',
    }

    // this.getBook = this.getBook.bind(this)
  }

  getBook = () => {
    let isbn = document.getElementById('isbn').value 
    console.log("searching ... " + isbn)
    fetch('https://openlibrary.org/isbn/'+isbn+'.json')
    .then(response => {
      if(response.ok) {
        response.json().then(data => {
          console.log(data)
          this.setState({title: data['title']})
          console.log(this.state.title)
        })
      }
      else {
        console.log("ERROR")
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Books Finder</h1>
        <div>
          ISBN: <input type='text' id='isbn' /> <button onClick={this.getBook}>FIND</button>
        </div>
        <BookTitle title={this.state.title} />
      </div>
    );
  }
}

export default App;
