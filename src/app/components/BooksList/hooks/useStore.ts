import { useAppDispatch, useAppSelector } from "../../../hooks"
import {
  fetchBooks,
  selectFilteredBooksByValue,
  setStartIndex,
} from "../../../../features/books/booksSlice"
import { STEP } from "../../../constants/constants"

const useStore = () => {
  const books = useAppSelector((state) => selectFilteredBooksByValue(state))
  const totalItems = useAppSelector((state) => state.booksReducer.totalItems)
  const status = useAppSelector((state) => state.booksReducer.status)
  const error = useAppSelector((state) => state.booksReducer.error)
  const dispatch = useAppDispatch()

  const handleClickMore = () => {
    dispatch(setStartIndex(STEP))
    dispatch(fetchBooks())
  }

  return {
    books,
    totalItems,
    status,
    error,
    handleClickMore,
  }
}

export default useStore
