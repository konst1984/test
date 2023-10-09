import React from "react"
import { Link } from "react-router-dom"
import { IBook } from "../../../types"
import NotFoundImage from "../../images/notfoundimage.webp"
import cn from "./styles.module.css"

interface ICardBook {
  book: IBook
}

const CardBook: React.FC<ICardBook> = ({ book }) => {
  const { id, image, title, authors, categories } = book

  return (
    <div className={cn.card}>
      <img
        src={image || NotFoundImage}
        alt="Фон"
        className={cn.card__bg}
        loading="lazy"
      />
      <div className={cn.wrapper}>
        <Link to={`/book/${id}`} className={cn.card__link} />
        <div className={`${cn["card__img-box"]}`}>
          <img
            src={image || NotFoundImage}
            alt="Обложка книги"
            className={cn.card__img}
            loading="lazy"
          />
        </div>
        <div className={cn.content}>
          <p className={cn.category}>{categories[0]}</p>
          <h2 className={cn.title}>{title}</h2>
          <p className={cn.authors}>
            {authors.map((author, index) => (
              <span key={author}>
                {author}
                {index !== authors.length - 1 ? "," : null}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardBook
