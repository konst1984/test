import React from "react"
import cn from "../../pages/Book/styles.module.css"

interface IBookListRow {
  list: Array<string>
  title: string
}

const BookListRow: React.FC<IBookListRow> = (props) => {
  const { list, title } = props
  return (
    <>
      {list && (
        <div>
          <span className={cn.bold}>{title}: </span>
          {list.map((item, index) => (
            <span key={item}>
              {item} {index !== list.length - 1 ? ", " : null}
            </span>
          ))}
        </div>
      )}
    </>
  )
}

export default BookListRow
