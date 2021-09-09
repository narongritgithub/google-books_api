import React, { Component } from 'react';
import SearchArea from './SearchArea';
import axios from 'axios';
import BooksList from './BooksList';


class Books extends Component {
    //set state default
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchField:[],
            sort: '',
            filter: '',
            apiKey: 'AIzaSyCfrcjZFP0zxg1hK-O7eLmCniLk8eN6Wj4'
        }
    }

    // HTTP REQUEST API
    searchBook = (e) =>{
        e.preventDefault();
        axios
        .get("https://www.googleapis.com/books/v1/volumes?q="+ this.state.searchField + this.state.filter )
        .then((data) => {
            const cleanData = this.cleanData(data)
            this.setState({ books: cleanData});
            console.log(cleanData);
        })
    }
    
    //set state
    handleSearch = (e) => {
        this.setState({ searchField: e.target.value })
    }
    handleSort = (e) => {
        console.log(e.target.value)
        this.setState({ sort: e.target.value })
    }
    handleFilter = (e) => {
        this.setState({ filter: e.target.value })
        console.log(e.target.value)
    }

   
    //check data from API
    cleanData = (data) => {
        const cleanData = data.data.items.map((book) => {
            if(book.volumeInfo.hasOwnProperty('publishedDate') === false) {
                book.volumeInfo['publishedDate'] = '0000';
            }else if(book.volumeInfo.hasOwnProperty('imageLinks') === false){
                book.volumeInfo['imageLinks'] = { thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'}
            }
            return book;
        })
        return cleanData;
    }

    render() {
        //Sort Newst&Oldest
        const sortedBooks = this.state.books.sort((a, b) =>{
            if(this.state.sort === 'Newest'){
                return parseInt(b.volumeInfo.publishedDate.substring(0, 4)) - parseInt(a.volumeInfo.publishedDate.substring(0, 4))
            }else if(this.state.sort === 'Oldest'){
                return parseInt(a.volumeInfo.publishedDate.substring(0, 4)) - parseInt(b.volumeInfo.publishedDate.substring(0, 4))
            }
            return this.state.sort;
        })
        
        return(
            <div>
                <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} 
                handleSort={this.handleSort} handleFilter={this.handleFilter} />
                <BooksList books={sortedBooks} />
            </div>
        );
    }
}
export default Books;