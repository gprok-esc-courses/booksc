import React from "react";

class BookTitle extends React.Component {
    render() {
        return (
            <h2>{ this.props.title }</h2>
        ) 
    }
}

export default BookTitle;