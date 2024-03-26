import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getToLocal } from '../Utilities/Storage';

const ReadBooks = () => {
    const [book,setBook]=useState([])
    useEffect(()=>{
        const storedData=getToLocal()
        setBook(storedData)
    },[])
    console.log(book);
    
    return (
        <div>
            <h3 className='text-red'>nameeee</h3>
        </div>
    );
};

export default ReadBooks;