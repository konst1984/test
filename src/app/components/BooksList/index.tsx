import React from "react"
import CardBook from "../CardBook"
import Preloader from "../Preloader"
import ErrorPage from "../../pages/ErrorPage"
import useStore from "./hooks/useStore"
import cn from "./styles.module.css"

const BookList: React.FC = () => {
  const { books, totalItems, status, error, handleClickMore } = useStore()

  if (status === "rejected") {
    return <ErrorPage error={error} />
  }

  return (
    <>
      <div className={cn.booksList}>
        <h2 className={cn.title}>List of books</h2>
        <h3 className={cn.title}>Found {totalItems} results</h3>
        <div className={cn.list}>
          {books.map((book) => (
            <CardBook key={book.id} book={book} />
          ))}
        </div>
      </div>
      {status === "loading" && (
        <div className={cn.preloader}>
          <Preloader />
        </div>
      )}
      {books.length > 0 && books.length < totalItems && (
        <button
          className={cn.button}
          onClick={handleClickMore}
          disabled={status === "loading"}
        >
          Load more
        </button>
      )}
    </>
  )
}

export default BookList
