import { useEffect, useState } from "react"
import { getToLocalReads } from "../../Utilities/Storage"

const useBookState=()=>{
    const [book,setBook]=useState([])
    useEffect(()=>{
        const books=getToLocalReads()
        setBook(books)
    },[])
    return book
}

export default useBookState 