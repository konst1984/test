import { IBook, IBookData } from "../types"

export const formatData = (book: IBookData): IBook => {
  const { volumeInfo } = book
  return {
    id: book.id,
    image: volumeInfo?.imageLinks?.thumbnail || "",
    title: volumeInfo.title || "",
    authors: volumeInfo.authors || [""],
    categories: volumeInfo.categories || [""],
  }
}
