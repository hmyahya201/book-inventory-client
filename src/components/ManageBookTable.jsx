import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageBookTable = () => {
  const [books, setBooks] = useState([])
  const { authorName, bookName, categoryName, imageUrl} = books
  useEffect(() => {
    fetch("http://localhost:4000/all-books")
      .then(res => res.json())
      .then(data => setBooks(data))
  }, [])
  
  const handleDeleteBook = (id)=>{
    const proceed = confirm("Are you sure?")
    if(proceed){
      fetch(`http://localhost:4000/delete-book/${id}`,{
      method: "DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.deletedCount> 0){
          alert("Your book is deleted successfully")
          const remaining = books.filter(book=>book._id !==id)
          setBooks(remaining)
        }
    })
    }
  }
  return (
    <div>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">SL</th>
            <th scope="col">Image</th>
            <th scope="col">Book Name</th>
            <th scope="col">Author Name</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            books.map((book, i)=> <tr>
              <th>{i+1}</th>
              <th><img src={book.imageUrl} alt="" /></th>
              <td>{book.bookName}</td>
              <td>{book.authorName}</td>
              <td>{book.categoryName}</td>
              <td>
                <Link to={`/admin/dashboard/edit-books/${book._id}`}><button>Update</button></Link>
                <button onClick={()=>handleDeleteBook(book._id)}>Delete</button>
              </td>
            </tr>)
          }

        </tbody>
      </table>
    </div>
  );
};

export default ManageBookTable;
