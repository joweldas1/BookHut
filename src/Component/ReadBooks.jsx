import { useEffect, useState } from "react";
import { getToLocalReads } from "../Utilities/Storage";
import { TiLocationOutline } from "react-icons/ti";
import { IoPeople } from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";
import PageToRead from "../Pages/PageToRead/PageToRead";
import { Link } from "react-router-dom";

const ReadBooks = () => {
  const [books, setBook] = useState([]);
  useEffect(() => {
    const storedData = getToLocalReads();
    setBook(storedData);
  }, []);

  return (
    <div>
      {books.map((book, idx) => (
        <div
          key={idx}
          className="p-3 md:w-4/5 mx-auto border-2 border-black my-2 rounded-lg border-opacity-25"
        >
          <div className="flex flex-col md:flex-row  md:gap-12 items-center  justify-between  md:px-20 ">
            <div className="text-center">
              <img
                className="w-40  bg-slate-200 rounded-lg p-3"
                src={book.image}
                alt=""
              />
            </div>

            <div className="mt-5 md:mt-0">
              <h3 className="text-2xl font-bold playFair text-[#131313]">
                {book.bookName}
              </h3>
              <h4 className="text-lg mt-3 text-[#131313cc] workFair font-semibold">
                By {book.author}
              </h4>

              {/* tag----------------------- */}
              <div className="md:flex my-3 md:my-5">
                <div className="flex gap-2 md:items-center text-lg">
                  <strong className="">Tags</strong>
                  <div className="flex text-lg gap-1 bg-[#23BE0A] bg-opacity-5 text-[#23BE0A] font-semibold workFair py-1 px-3 rounded-xl ">
                    {book.tags.map((t, idx) => (
                      <p className="" key={idx}>
                        #{t}
                      </p>
                    ))}
                  </div>
                </div>
                <p className="flex  items-center gap-1  mt-2 text-lg font-semibold">
                  {" "}
                  <TiLocationOutline /> Year of Publishing{" "}
                  {book.yearOfPublishing}{" "}
                </p>
              </div>
              {/* ------------------------------------ */}
              <div>
                <div className="text-lg font-medium  md:flex gap-6">
                  <p className="flex items-center gap-1">
                    {" "}
                    <IoPeople /> Publisher: {book.publisher}{" "}
                  </p>
                  <p className="flex items-center gap-1">
                    {" "}
                    <RiPagesLine /> page: {book.totalPages}{" "}
                  </p>
                </div>
              </div>
              {/* ---------------------------------------- */}
              <div className="flex  my-3 md:my-5 items-center gap-1 md:gap-10">
                <div>
                  {" "}
                  <h3 className="text-base md:text-lg font-medium text-[#328EFF] bg-[#328EFF] bg-opacity-20 inline-block p-[2px] md:p-2 rounded-xl ">
                    {" "}
                    Category: {book.category}{" "}
                  </h3>{" "}
                </div>
                <div>
                  {" "}
                  <h3 className="text-base md:text-lg font-medium text-[#FFAC33] bg-[#FFAC33] bg-opacity-20 inline-block p-[2px] md:p-2 rounded-xl ">
                    {" "}
                    Category: {book.rating}{" "}
                  </h3>{" "}
                </div>
                <div>
                  {" "}
                  <Link
                    to={`/book/${book.bookId}`}
                    className="bg-[#23BE0A] text-base md:text-lg font-semibold text-white p-[2px] md:p-2 rounded-lg"
                  >
                    View Details{" "}
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReadBooks;
