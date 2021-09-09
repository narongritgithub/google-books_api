import React from 'react';
import BookCard from './BookCard';

const BooksList = (props) =>{

    return(
        <div className="list">
            {
                //fetch Information API
                 props.books.map((props, i) => {
                    return <BookCard 
                    key={i}
                    id={props.id}
                    image={props.volumeInfo.imageLinks.thumbnail}
                    title={props.volumeInfo.title}
                    authors={props.volumeInfo.authors}
                    published={props.volumeInfo.publishedDate}
                    previewLink={props.volumeInfo.previewLink}
                    printType={props.volumeInfo.printType}/>
                })
            }

        </div>
    )
}

export default BooksList;