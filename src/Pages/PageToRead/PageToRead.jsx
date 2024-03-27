import React, { useContext, useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { BookContext } from '../../Component/BookShow'
import useBookState from '../../Component/CustomHook/useBookState';

const PageToRead = ({book}) => {
   

  for(let books of book){
    bookData.push(books)
  }
  console.log(bookData);
    // const { bookId, bookName, rating } = useContext(BookContext);
    // console.log(bookId);

    return (
        <></>
        // <BooksContext.Consumer>
        //     {book=>(
        //         <h3>{book.bookName}</h3>
        //     )}
        // </BooksContext.Consumer>
    )
};

export default PageToRead;
