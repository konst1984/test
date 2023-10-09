import React, { useRef } from "react"
import BookListRow from "../BookListRow"
import { reformatTextHtml } from "../../../utils/reformatTextHtml"
import NotFoundImage from "../../images/notfoundimage.webp"
import Cover from "../../images/fon.webp"
import cn from "../../pages/Book/styles.module.css"

const BookContent = (props) => {
  const refImg = useRef<HTMLImageElement | null>(null)
  const { bookContent } = props
  return (
    <>
      {bookContent && (
        <>
          <div className={cn.card}>
            <div className={`${cn["card__image-box"]}`}>
              <img
                src={Cover}
                ref={refImg}
                onLoad={() =>
                  (refImg.current.src =
                    bookContent?.imageLinks.thumbnail || NotFoundImage)
                }
                alt="Обложка книги"
                loading="lazy"
                className={cn.card__img}
              />
            </div>
            <div className={cn.content}>
              <h1 className={cn.title}>{bookContent.title}</h1>
              <BookListRow list={bookContent.categories} title={"Categories"} />
              <BookListRow list={bookContent.authors} title={"Authors"} />
              <div>
                <span className={cn.bold}>Description: </span>
                {reformatTextHtml(bookContent?.description) ||
                  "Not found description"}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default BookContent
