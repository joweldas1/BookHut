import React, { useContext, useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { BookContext } from '../../Component/BookShow'
import useBookState from '../../Component/CustomHook/useBookState';
import { getToLocalReads } from '../../Utilities/Storage';

const PageToRead = () => {
    const [books,setBooks]=useState([])
useEffect(()=>{
    const book=getToLocalReads()
const booking=book.map((book)=>(
{ name:book.bookName,
    rating:book.rating,
}, setBooks(booking),
))
},[])
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
