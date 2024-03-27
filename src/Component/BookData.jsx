import { useEffect, useState } from "react";
import BookShow from "./BookShow";


const BookData = () => {
    const [books,setBooks]=useState([])
    const [show,shoMore]=useState(6)
   


    useEffect(()=>{
        fetch("./book.json")
        .then(res=>res.json())
        .then(data=>setBooks(data.books))

    },[])

    return (
        <div >
            <div className="mt-10 mb-5">
                <h2 className="text-5xl text-center workFair font-bold    ">Books</h2>
            </div>
            <div className="grid grid-cols md:grid-cols-3 gap-6 mt-5">
            {
                books.slice(0,show).map((book,idx)=> <BookShow key={idx} book={book} ></BookShow> )
            }
            </div>
            <div onClick={()=>shoMore(books.show)}  className={`text-center my-5 ${show===books.show?'hidden':''}`}><a className="btn bg-[#23BE0A] text-white hover:text-black hover:border-[#23BE0A] hover:bg-transparent">Show All</a></div>
        </div>
    );
};

export default BookData;