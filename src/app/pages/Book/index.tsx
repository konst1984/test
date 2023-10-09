import React from "react"
import { useParams } from "react-router-dom"
import Preloader from "../../components/Preloader"
import ErrorPage from "../ErrorPage"
import BookContent from "../../components/BookContent"
import ButtonBack from "../../components/ButtonBack"
import useGetBook from "./hooks/useGetBook"
import cn from "./styles.module.css"

const Book: React.FC = () => {
  let { id } = useParams()
  const { bookContent, error, loading } = useGetBook(id)

  if (loading) {
    return (
      <div className={cn.preloader}>
        <Preloader />
      </div>
    )
  }

  if (error) {
    return <ErrorPage error={error} />
  }

  return (
    <div className={cn.wrapper}>
      <ButtonBack />
      <BookContent bookContent={bookContent} />
    </div>
  )
}

export default Book
