import { useEffect, useState } from "react";
import { getToLocalReads } from "../Utilities/Storage";
import { TiLocationOutline } from "react-icons/ti";
import { IoPeople } from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";




const ReadBooks = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const storedData = getToLocalReads();
    setBook(storedData);
  }, []);
  console.log(book);

  return (
    <div>
      {book.map((book, idx) => (
        <div key={idx} className="p-3 border-2 border-black my-2 rounded-lg border-opacity-25">
          <div className="md:flex  md:gap-28 items-center justify-center  md:px-20 ">
            <div className="md:w-72"><img src={book.image} alt="" /></div>

            <div className="">
              <h3 className="text-2xl font-bold playFair text-[#131313]">{book.bookName}</h3>
              <h4 className="text-lg text-[#131313cc] workFair font-semibold">By {book.author}</h4>

              {/* tag----------------------- */}
              <div className="md:flex my-3 md:my-5">
              <div className="flex gap-2 md:items-center text-lg">
                <strong className="">Tags</strong>
                <p className="flex text-base md:text-lg gap-1 bg-[#23BE0A] bg-opacity-5 text-[#23BE0A] font-semibold workFair py-1 px-3 rounded-xl ">
                  {book.tags.map((t, idx) => (
                    <p className="" key={idx}>
                      #{t}
                    </p>
                  ))}
                </p>
              </div>
              <p className="flex  items-center gap-1 md:text-lg font-semibold"> <TiLocationOutline /> Year of Publishing {book.yearOfPublishing} </p>

              </div>
{/* ------------------------------------ */}
               <div>
                    <div className="text-lg font-medium  flex gap-6">
                      <p className="flex items-center gap-1"> <IoPeople /> Publisher: {book.publisher} </p>
                      <p className="flex items-center gap-1"> <RiPagesLine /> page: {book.totalPages} </p>
                    </div>
                </div>     
{/* ---------------------------------------- */}
<div className="flex  my-3 md:my-5 items-center gap-1 md:gap-10">

<div> <h3 className="text-base md:text-lg font-medium text-[#328EFF] bg-[#328EFF] bg-opacity-20 inline-block p-[2px] md:p-2 rounded-xl "> Category: {book.category}  </h3> </div>
<div> <h3 className="text-base md:text-lg font-medium text-[#FFAC33] bg-[#FFAC33] bg-opacity-20 inline-block p-[2px] md:p-2 rounded-xl "> Category: {book.rating}  </h3> </div>
<div> <a href="" className="bg-[#23BE0A] text-base md:text-lg font-semibold text-white p-[2px] md:p-2 rounded-lg">View Details </a> </div>

</div>


            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReadBooks;
