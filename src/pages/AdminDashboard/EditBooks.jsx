import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const EditBooks = () => {
 const book = useLoaderData()
 const {_id, authorName, bookName, bookPdfurl, categoryName, imageUrl, metaDescription} = book
  console.log("book", book)
 


  const bookCategories = [
    "Select You Book Category",
    "Fiction",
    "Non-fiction",
    "Mystery",
    "Programming",
    "Science fiction",
    "Fantasy",
    "Horror",
    "Biography",
    "Autobiography",
    "History",
    "Self-help",
    "Business",
    "Memoir",
    "Poetry",
    "Children's books",
    "Travel",
    "Religion and spirituality",
    "Science",
    "Art and design",
  ];

  const { selectedBookCategory, setSelectedBookCategory } = useState(bookCategories[0])
  const handleOnChangeCategory = (event) => {
    setSelectedBookCategory(event.target.value)
  }



  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookName = form.bookName.value;
    const authorName = form.authorName.value;
    const imageUrl = form.imageUrl.value;
    const categoryName = form.categoryName.value;
    const metaDescription = form.metaDescription.value;
    const bookPdfUrl = form.bookPDF.value;

    const bookInfo = {
      bookName,
      authorName,
      imageUrl,
      categoryName,
      metaDescription,
      bookPdfUrl,
    };
    fetch(`http://localhost:4000/update-book/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(bookInfo)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount>0) {
          console.log("data", data)
          alert("your book uploaded successfully")
        } else {
          return alert("something wrong")
        }
      })
  };
  return (
    <div className="p-3 bg-light">
      <form
        className="row g-3"
        onSubmit={handleSubmit}
        >
        <div className="col-md-6">
          <label htmlFor="bookName" className="form-label">Book Name</label>
          <input
            type="name"
            name="bookName"
            defaultValue={bookName}
            className="form-control"
            id="bookName"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="authorName" className="form-label">
            Author Name
          </label>
          <input
            type="name"
            name="authorName"
            defaultValue={authorName}
            className="form-control"
            id="authorName"
          />
        </div>
        <div className="col-12">
          <label htmlFor="imageUrl" className="form-label">
            Book Image URL
          </label>
          <input
            type="url"
            name="imageUrl"
            defaultValue={imageUrl}
            className="form-control"
            id="imageUrl"
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            id="category"
            name="categoryName"
            className="form-select"
            value={selectedBookCategory}
            onChange={handleOnChangeCategory}
          >
            {bookCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-8">
          <label htmlFor="metaDescription" className="form-label">
            Meta description
          </label>
          <textarea
            type="text"
            className="form-control"
            name="metaDescription"
            defaultValue={metaDescription}
            id="metaDescription"
          />
        </div>
        <div className="col-12">
          <div class="mb-3">
            <label htmlFor="formFile" class="form-label">
              Insert pdf link of the book
            </label>
            <input
              name="bookPDF"
              className="form-control"
              defaultValue={bookPdfurl}
              type="url"
              id="formFile"
            />
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Uudate Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBooks;
