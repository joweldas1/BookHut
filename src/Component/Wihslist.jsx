import React, { useEffect, useState } from 'react';
import { getToLocalBookmarks } from '../Utilities/Storage';

const Wihslist = () => {
    const [bookmark, setBookMark] = useState([]);
    useEffect(() => {
      const storedData =getToLocalBookmarks();
      setBookMark(storedData);
    }, []);
    console.log(bookmark);
    return (
        <div>
              {bookmark.map((book,idx) => (
        <div key={idx}>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
      ))}
        </div>
    );
};

export default Wihslist;