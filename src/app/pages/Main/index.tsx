import React, { useState } from "react"
import BookList from "../../components/BooksList"
import Header from "../../components/Header"

const Main: React.FC = () => {
  return (
    <>
      <Header />
      <BookList />
    </>
  )
}

export default Main
