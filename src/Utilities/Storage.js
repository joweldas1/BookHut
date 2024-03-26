import toast from "react-hot-toast"


const getToLocal=()=>{
    const storedBook=localStorage.getItem("books")
    if(storedBook){
        return JSON.parse(storedBook)
    }return []
}


const saveToLocal=(book)=>{
    console.log(book);
    const save=getToLocal()
    const isExisted=save.find(find=>find.bookId===book.bookId)
    
    if(isExisted)return toast.error('already read this book')
    if(!isExisted){
        save.push(book)
        localStorage.setItem('books',JSON.stringify(save))
        toast.success ('Here is your toast.');

    }
}

const deleteItems=(id)=>{
    const books=getToLocal();
    const remaining=books.filter(book=>book.id!==id)
    localStorage.setItem("books",JSON.stringify(remaining))
}

export  {getToLocal,saveToLocal , deleteItems}
