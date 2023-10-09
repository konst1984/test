import { useEffect, useState } from "react"
import { IBookWithDescription } from "../../../../types"
import { fetchBook } from "../../../api/fetchBook"

const useGetBook = (id) => {
  const [book, setBook] = useState<IBookWithDescription | null>(null)
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    fetchBook(id)
      .then((data) => setBook(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [id])

  const bookContent = book?.volumeInfo
  console.log(bookContent)
  return { bookContent, error, loading }
}

export default useGetBook
