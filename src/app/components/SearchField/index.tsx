import React, { FormEvent, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks"
import {
  fetchBooks,
  resetBooks,
  resetStartIndex,
  setQuery,
} from "../../../features/books/booksSlice"
import cn from "./styles.module.css"

const SearchField: React.FC = () => {
  const [value, setValue] = useState<string>("")
  const query = useAppSelector((state) => state.booksReducer.query)

  const dispatch = useAppDispatch()

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault()
    if (value !== query) {
      dispatch(resetBooks())
      dispatch(resetStartIndex())
      dispatch(setQuery(value))
      dispatch(fetchBooks())
    }
    setValue("")
  }

  const handleChange = ({ target }) => {
    setValue(target?.value)
  }

  return (
    <form onSubmit={submitHandler}>
      <label>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className={cn.input}
          placeholder="Search books"
        />
      </label>
      <button className={cn.button}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </form>
  )
}

export default SearchField
