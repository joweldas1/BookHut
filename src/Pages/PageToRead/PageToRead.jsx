import React, { useContext, useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { getToLocalReads } from "../../Utilities/Storage";

const PageToRead = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const booking = getToLocalReads();
   
    setBooks(booking);
  }, []);

  const data = books.map((book) => ({
    name: book.bookName,
    Page: book.totalPages,
    Rating: book.rating,
  }));

  return (
    <>
<div style={{display: 'flex', justifyContent: 'center', alignItems:'center', height:'80vh'}}>
<ResponsiveContainer className="w-full" height={250}>
<BarChart data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="Page" fill="#8884d8" />
  <Bar dataKey="Rating" fill="#82ca9d" />
</BarChart>
</ResponsiveContainer>
</div>
    </>


  );
};

export default PageToRead;
