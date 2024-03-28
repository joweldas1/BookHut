import toast from "react-hot-toast";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { createContext, useState } from "react";
import { confirmAction } from "../Utilities/Storage";
// export const BooksContext=createContext()
const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const showBook=books.books
  const book = showBook?.find((book) => book.bookId === id);
  const {
    image,
    review,
    totalPages,
    category,
    publisher,
      rating,
    tags,
    yearOfPublishing,
  } = book||{};
  console.log(book);

const handleToSave=(book)=>{
  confirmAction(book,"read")
}
const handleBookmark=(book)=>{
  confirmAction(book,"bookmark")
}



  return (
    //  <BooksContext.Provider value={book} >
    //        </BooksContext.Provider>

        <div>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col items-center     mx-auto lg:flex-row">
          <div className="w-full lg:w-1/3">
            <img className="w-full h-full" src={image} alt="" />
          </div>

          <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
            <h2 className="text-4xl text-[#131313] playFair  font-bold leading-none">
              {book.bookName}
            </h2>
            {/* <p className="mt-4 text-[#131313cc] text-lg workFair font-semibold">
              By {`${book.author}?${book.author}:'null`}
            </p> */}

            <p className="my-5 text-xl font-semibold workFair">{category}</p>
            <p className="text-lg workFair">
              {" "}
              <strong>Review:</strong>
              {review}{" "}
            </p>
            <div className="flex gap-2 items-center">
              <strong className="">Tag</strong>
              <div className="flex gap-3 bg-[#23BE0A] bg-opacity-5 text-[#23BE0A] font-semibold workFair py-1 px-3 rounded-xl ">
                {tags.map((t, idx) => (
                  <p className="" key={idx}>
                    # {t}
                  </p>
                ))}
              </div>
            </div>

            <div className="container p-2 mx-auto sm:p-4 text-[#131313] dark:text-gray-800">
              <div className="overflow-x-auto">
                <table className="w-full md:w-1/2  p-6 text-lg   workFair  whitespace-nowrap">
                  <tbody className=" dark:bg-gray-50 dark:border-gray-300">
                    <tr>
                      <td className=" py-2">
                        <p>Number of Pages:</p>
                        <p>Publisher:</p>
                        <p>Year of Publishing:</p>
                        <p>Rating:</p>
                      </td>
                      <td className=" pl-6 py-2">
                        <p className="dark:text-gray-600">
                          <strong>{totalPages}</strong>
                        </p>
                        <p className="dark:text-gray-600">
                          <strong>{publisher}</strong>
                        </p>
                        <p className="dark:text-gray-600">
                          <strong>{yearOfPublishing}</strong>
                        </p>
                        <p className="dark:text-gray-600">
                          <strong>{rating}</strong>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="mt-6 mb-2 flex justify-start gap-5">
                  <a onClick={()=>handleToSave(book)} className="btn px-6 bg-white text-black border-black border-1 rounded-lg text-lg hover:bg-[#23BE0A]">
                    Read
                  </a>
                  <a onClick={()=>handleBookmark(book)} className="btn  bg-[#50B1C9] text-white text-lg rounded-lg hover:border-black hover:text-black">
                    Wishlist
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
   
  );
};

export default BookDetails;
