import React, { useEffect, useState } from "react";

const ManageBookTable = () => {
  const [books, setBooks] = useState([])
  const { authorName, bookName, categoryName, imageUrl, _id } = books
  console.log("books", books)
  useEffect(() => {
    fetch("http://localhost:4000/all-books")
      .then(res => res.json())
      .then(data => setBooks(data))
  }, [])
  return (
    <div>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Book Name</th>
            <th scope="col">Author Name</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            books.map(book => <tr>
              <th><img src={book.imageUrl} alt="" /></th>
              <td>{book.bookName}</td>
              <td>{book.authorName}</td>
              <td>{book.categoryName}</td>
              <td>
                <button>Update</button>
                <button>Delete</button>
              </td>
            </tr>)
          }

        </tbody>
      </table>
    </div>
  );
};

export default ManageBookTable;
