import toast from "react-hot-toast"


const getToLocalReads=()=>{
    const storedBook=localStorage.getItem("books")
    if(storedBook){
        return JSON.parse(storedBook)
        
    }return [];
}
const getToLocalBookmarks=()=>{
    const storedBook=localStorage.getItem("books2")
    if(storedBook){
        return JSON.parse(storedBook)
    }return []; 
}



const confirmAction = (book, actionType) => {
    const read = getToLocalReads();
    const bookmark=getToLocalBookmarks()
    
    const isExisted = read.find((item) => item.bookId === book.bookId);
    const isExist= bookmark.find((item) => item.bookId === book.bookId);

    if (actionType === 'read') {
        if (isExisted) {
            toast.error('Already read');
        } else {
            read.push(book);
            localStorage.setItem('books', JSON.stringify(read));
            toast.success('Read confirmed');
        }
    } else if (actionType === 'bookmark') {
        if (isExist) {
            toast.error('Already bookmarked');
        } else {
            bookmark.push(book);
            localStorage.setItem('books2', JSON.stringify(bookmark));
            toast.success('Bookmarked');
        }
    } else {
        toast.error('Invalid action type');
    }
};
// const bookMarkHandler = (book) => {
//     const saved = saveToLocal(book);
//     if (saved) {
//         toast.success('Bookmarked successfully');
//     } else {
//         toast.error('Bookmarking failed');
//     }
// };




// const saveToLocal=(book)=>{
//     console.log(book);
//     const save=getToLocal()
//     const isExisted=save.find(find=>find.bookId===book.bookId)
    
//     if(isExisted)return toast.error('already read')
//     if(!isExisted){
//         save.push(book)
//         localStorage.setItem('books',JSON.stringify(save))
//         toast.success('read done')

//     }
// }

const deleteItems=(id)=>{
    const books=getToLocalReads();
    const remaining=books.filter(book=>book.id!==id)
    localStorage.setItem("books",JSON.stringify(remaining))
}

export  {getToLocalReads,confirmAction, deleteItems,getToLocalBookmarks}
