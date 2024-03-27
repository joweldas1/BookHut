import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const BookShow = ({ book }) => {
  const { bookName, author, image, review, totalPages ,category ,publisher,generation,rating,bookId} = book;
  return (
    <div className="bg-white rounded-lg">
      <Link to={`book/${bookId}`}>
      
      <div className=" p-6 rounded-xl shadow-md dark:bg-slate-100 dark:text-gray-900
solid
      ">
      <div className="      border-dotted border-b-2 bg-opacity-75 border-slate-400 my-2 hover:border-b-purple-500 hover:border-solid hover:border-">
      <img  src={image}
          alt=""
          className="mx-auto w-full h-[380px] rounded-md p-6 dark:bg-[#F3F3F3]"
        />
        <div className="mt-6 mb-2 flex justify-between">
        <a className="bg-[#23BE0A] bg-opacity-5 text-[#23BE0A] font-bold workFair py-1 px-3 rounded-xl" href=""> {category} </a>
        <a className="bg-[#23BE0A] bg-opacity-5 text-[#23BE0A] font-bold workFair py-1 px-3 rounded-xl" href=""> {publisher} </a>
        </div>
        <h2 className="text-2xl md:text-3xl text-[#131313] font-bold palyFair" >{bookName}</h2>
        <p className="text-lg text-[#131313cc] playFair my-3 font-semibold">By {author}</p>
      </div>
      <div className="flex justify-between">
        <h3 className="text-[#131313cc] font-semibold workFair">{generation}</h3>
        <div className="flex items-center gap-1 justify-center">
        <h3 className="text-[#131313cc] font-semibold workFair">{rating}</h3>
        <FaRegStar className="text-lg text-[#131313cc]" ></FaRegStar>
        </div>
      </div>
      </div>
      
      </Link>
    </div>
  );
};

export default BookShow;
